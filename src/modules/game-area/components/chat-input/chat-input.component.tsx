import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { ITextMessage } from "types/chat.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { messageSchema } from "utils/validation";
import { socket } from "web-socket/socket";
import { Socket } from "socket.io-client";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { getUserName } from "redux/reducers/user-name.reducer";
import { CHAT_EVENT, GAME_EVENT } from "utils/consts";
import { addNewMessage } from "redux/reducers/messages.reducer";
import { getTime } from "utils/get-time";

import * as Styled from "./chat-input.styled";
import * as Ui from "styles/ui";
import { isMovement } from "utils/check-the-movement";
import { getTurn } from "redux/reducers/game.raducer";

export const ChatInput = () => {
	const { id } = useParams();
	const socketRef = useRef<Socket | null>(null);
	const sender = useAppSelector(getUserName);
	const dispatch = useAppDispatch();
	const turn = useAppSelector(getTurn);
	const {
		register,
		handleSubmit,
		formState: { errors },
		setFocus,
		reset,
	} = useForm<ITextMessage>({
		resolver: yupResolver(messageSchema),
	});

	const onSubmit = (data: ITextMessage) => {
		const { message } = data;
		const movement = message.toLowerCase().trim();
		const socket = socketRef.current;
		const timestamp = getTime();

		if (isMovement(message) && socket) {
			if (!turn) {
				dispatch(
					addNewMessage({
						sender: "",
						message: `wait your turn`,
						timestamp,
					}),
				);

				return;
			}
			socket.emit(GAME_EVENT.MOVE, { id, user: sender, move: movement });
			dispatch(
				addNewMessage({
					sender: "",
					message: `going ${movement.slice(1)}`,
					timestamp,
				}),
			);
			reset();

			return;
		}
		dispatch(addNewMessage({ sender: "You", message: data.message, timestamp }));
		if (socket)
			socket.emit(CHAT_EVENT.MESSAGE, { chatId: id, sender, message: data.message.trim() });
		reset();
	};

	useEffect(() => {
		setFocus("message");
	}, [setFocus]);

	useEffect(() => {
		socketRef.current = socket;
		socket.emit(CHAT_EVENT.JOIN, { chatId: id, user: sender });

		return () => {
			socket.emit(CHAT_EVENT.LEAVE, { chatId: id, user: sender });
			socket.disconnect();
		};
	}, [id, sender]);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Styled.FlexWraper>
				<Styled.InputContainer>
					<Styled.Input type="text" {...register("message")} />
					<Ui.ErrorBox>{errors.message?.message}</Ui.ErrorBox>
				</Styled.InputContainer>
				<Styled.InputButton type="submit">send</Styled.InputButton>
			</Styled.FlexWraper>
		</form>
	);
};
