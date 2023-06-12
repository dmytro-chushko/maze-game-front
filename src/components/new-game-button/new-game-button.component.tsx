import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useCreateGameMutation, useGetAllPendingGamesQuery } from "redux/api/game.api";
import { useAppSelector } from "redux/hooks";
import { getUserName } from "redux/reducers/user-name.reducer";
import { socket } from "web-socket/socket";

import * as Styled from "./new-game-button.styled";
import { ROUTES } from "utils/consts";

export const NewGameButton = () => {
	const [createGame, { isLoading }] = useCreateGameMutation();
	const { refetch } = useGetAllPendingGamesQuery();
	const navigate = useNavigate();
	const player_one = useAppSelector(getUserName);

	const handleStartNewGame = async () => {
		const createdGame = await createGame({ player_one });
		if ("data" in createdGame) {
			socket.emit("create-game");
			navigate(`${ROUTES.GAME}/${createdGame.data._id}`);
		}
	};

	useEffect(() => {
		const handleUpdate = () => {
			console.log("update");
			refetch();
		};
		socket.on("update-game-list", handleUpdate);

		return () => {
			socket.off("update-game-list", handleUpdate);
		};
	}, []);

	return (
		<Styled.StartButton type="button" onClick={handleStartNewGame} disabled={isLoading}>
			{isLoading ? "...loading" : "new game"}
		</Styled.StartButton>
	);
};
