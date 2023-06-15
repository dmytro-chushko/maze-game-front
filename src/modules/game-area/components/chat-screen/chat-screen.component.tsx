import { useEffect } from "react";

import { socket } from "web-socket/socket";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { addNewMessage, getMessages } from "redux/reducers/messages.reducer";
import { getUserName } from "redux/reducers/user-name.reducer";
import { IRecivedMessage } from "types/chat.types";
import { getTime } from "utils/get-time";

import * as Styled from "./chat-screen.styled";

export const ChatScreen = () => {
	const dispatch = useAppDispatch();
	const messages = useAppSelector(getMessages);
	const name = useAppSelector(getUserName);

	useEffect(() => {
		const handleSetMessage = (message: IRecivedMessage) => {
			if (message.sender !== name) {
				const timestamp = getTime();
				dispatch(addNewMessage({ ...message, timestamp }));
			}
		};

		socket.on("message", handleSetMessage);

		return () => {
			socket.off("message", handleSetMessage);
		};
	}, []);

	return (
		<Styled.ScreenContainer>
			<Styled.MessagesContainer>
				{[...messages].reverse().map(({ timestamp, sender, message }, i) => (
					<Styled.MessageContainer key={i}>
						<Styled.TimeStamp>{timestamp}</Styled.TimeStamp>
						<Styled.Sender>{sender}:</Styled.Sender>
						<Styled.Message>{message}</Styled.Message>
					</Styled.MessageContainer>
				))}
			</Styled.MessagesContainer>
		</Styled.ScreenContainer>
	);
};
