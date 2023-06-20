import { useNavigate, useParams } from "react-router-dom";
import { useGetGameByIdQuery } from "redux/api/game.api";
import { useAppSelector } from "redux/hooks";
import { getUserName } from "redux/reducers/user-name.reducer";
import { Button } from "styles/ui";

import * as Ui from "styles/ui";
import { GAME_EVENT, ROUTES } from "utils/consts";
import { socket } from "web-socket/socket";

export const GameControls = () => {
	const { id } = useParams();
	const { data } = useGetGameByIdQuery(id || "");
	const navigate = useNavigate();
	const user = useAppSelector(getUserName);

	const handleGiveUp = () => {
		socket.emit(GAME_EVENT.GIVE_UP, { id, user });
	};

	const handleExitGame = () => {
		navigate(ROUTES.DASHBOARD);
	};

	return (
		<>
			<Ui.Container.Wrapper mb="1rem">
				<Button
					type="button"
					disabled={!!data?.winner}
					aria-label="Give up button"
					onClick={handleGiveUp}
				>
					give up
				</Button>
			</Ui.Container.Wrapper>
			<Button
				type="button"
				disabled={!data?.winner}
				aria-label="Exit game button"
				onClick={handleExitGame}
			>
				exit game
			</Button>
		</>
	);
};
