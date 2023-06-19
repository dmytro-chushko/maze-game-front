import { useEffect } from "react";

import { socket } from "web-socket/socket";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { addNewMessage, getMessages } from "redux/reducers/messages.reducer";
import { getUserName } from "redux/reducers/user-name.reducer";
import { IRecivedMessage } from "types/chat.types";
import { getTime } from "utils/get-time";

import * as Styled from "./chat-screen.styled";
import { CHAT_EVENT, GAME_EVENT } from "utils/consts";
import { IGiveUpMessage } from "types/game.types";
import { useParams } from "react-router-dom";
import { useGetGameByIdQuery } from "redux/api/game.api";

export const ChatScreen = () => {
	const dispatch = useAppDispatch();
	const messages = useAppSelector(getMessages);
	const name = useAppSelector(getUserName);
	const { id } = useParams();
	const { refetch } = useGetGameByIdQuery(id || "");

	useEffect(() => {
		const handleSetMessage = (message: IRecivedMessage) => {
			if (message.sender !== name) {
				const timestamp = getTime();
				dispatch(addNewMessage({ ...message, timestamp }));
			}
		};

		const handleGiveUp = (payload: IGiveUpMessage) => {
			const { user, message } = payload;
			const timestamp = getTime();
			dispatch(addNewMessage({ sender: "", message: `Player ${user} ${message}`, timestamp }));
			refetch();
		};

		socket.on(CHAT_EVENT.MESSAGE, handleSetMessage);
		socket.on(GAME_EVENT.GIVE_UP, handleGiveUp);

		return () => {
			socket.off(CHAT_EVENT.MESSAGE, handleSetMessage);
			socket.on(GAME_EVENT.GIVE_UP, handleGiveUp);
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
