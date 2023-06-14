import { useEffect, useState } from "react";

import { socket } from "web-socket/socket";

import * as Styled from "./chat-screen.styled";

export const ChatScreen = () => {
	const [message, setMessage] = useState<string>("");

	useEffect(() => {
		const handleSetMessage = (message: string) => {
			console.log("recive");
			setMessage(message);
		};

		socket.on("message", handleSetMessage);

		return () => {
			socket.off("message", handleSetMessage);
		};
	}, []);

	return <Styled.ScreenContainer>{message}</Styled.ScreenContainer>;
};
