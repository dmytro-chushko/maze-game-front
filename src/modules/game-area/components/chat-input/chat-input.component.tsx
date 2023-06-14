import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { ITextMessage } from "types/chat.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { messageSchema } from "utils/validation";
import { socket } from "web-socket/socket";
import { Socket } from "socket.io-client";
import { useAppSelector } from "redux/hooks";
import { getUserName } from "redux/reducers/user-name.reducer";
import { CHAT_EVENT } from "utils/consts";

import * as Styled from "./chat-input.styled";
import * as Ui from "styles/ui";

export const ChatInput = () => {
	const { id } = useParams();
	const socketRef = useRef<Socket | null>(null);
	const sender = useAppSelector(getUserName);
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
		const socket = socketRef.current;
		if (socket) socket.emit(CHAT_EVENT.MESSAGE, { chatId: id, sender, message: data.message });
		reset();
	};

	useEffect(() => {
		setFocus("message");
	}, [setFocus]);

	useEffect(() => {
		socketRef.current = socket;
		socket.emit(CHAT_EVENT.JOIN, { chatId: id });

		return () => {
			socket.emit(CHAT_EVENT.LEAVE, { chatId: id });
			socket.disconnect();
		};
	}, [id]);

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
