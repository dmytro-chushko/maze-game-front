import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { ITextMessage } from "types/chat.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { messageSchema } from "utils/validation";

import * as Styled from "./chat-input.styled";
import * as Ui from "styles/ui";
import { socket } from "web-socket/socket";
import { Socket, io } from "socket.io-client";

export const ChatInput = () => {
	const { id } = useParams();
	const socketRef = useRef<Socket | null>(null);
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
		if (socket) socket.emit("message", { chatId: id, message: data.message });
		reset();
	};

	useEffect(() => {
		setFocus("message");
	}, [setFocus]);

	useEffect(() => {
		socketRef.current = socket;
		socket.emit("join", { chatId: id });
		socket.on("message", () => console.log("message"));

		return () => {
			socket.emit("leave", { chatId: id });
			socket.disconnect();
			socket.off();
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
