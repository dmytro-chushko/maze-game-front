import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useCreateGameMutation, useGetAllPendingGamesQuery } from "redux/api/game.api";
import { useAppSelector } from "redux/hooks";
import { getUserName } from "redux/reducers/user-name.reducer";
import { socket } from "web-socket/socket";
import { GAME_EVENT, ROUTES } from "utils/consts";

import * as Styled from "./new-game-button.styled";

export const NewGameButton = () => {
	const [createGame, { isLoading }] = useCreateGameMutation();
	const { refetch } = useGetAllPendingGamesQuery();
	const navigate = useNavigate();
	const player_one = useAppSelector(getUserName);

	const handleStartNewGame = async () => {
		const createdGame = await createGame({ player_one });
		if ("data" in createdGame) {
			socket.emit(GAME_EVENT.CREATE_GAME);
			navigate(`${ROUTES.GAME}/${createdGame.data._id}`);
		}
	};

	useEffect(() => {
		const handleUpdate = () => {
			refetch();
		};
		socket.on(GAME_EVENT.UPDATE_GAME_LIST, handleUpdate);

		return () => {
			socket.off(GAME_EVENT.UPDATE_GAME_LIST, handleUpdate);
		};
	}, [refetch]);

	return (
		<Styled.StartButton type="button" onClick={handleStartNewGame} disabled={isLoading}>
			{isLoading ? "...loading" : "new game"}
		</Styled.StartButton>
	);
};
