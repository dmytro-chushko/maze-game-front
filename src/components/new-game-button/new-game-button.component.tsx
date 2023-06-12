import { useNavigate } from "react-router-dom";

import { useCreateGameMutation } from "redux/api/game.api";
import { useAppSelector } from "redux/hooks";
import { getUserName } from "redux/reducers/user-name.reducer";

import * as Styled from "./new-game-button.styled";
import { ROUTES } from "utils/consts";

export const NewGameButton = () => {
	const [createGame, { isLoading }] = useCreateGameMutation();
	const navigate = useNavigate();
	const player_one = useAppSelector(getUserName);

	const handleStartNewGame = async () => {
		const createdGame = await createGame({ player_one });
		if ("data" in createdGame) {
			navigate(`${ROUTES.GAME}/${createdGame.data._id}`);
		}
	};

	return (
		<Styled.StartButton type="button" onClick={handleStartNewGame} disabled={isLoading}>
			{isLoading ? "...loading" : "new game"}
		</Styled.StartButton>
	);
};
