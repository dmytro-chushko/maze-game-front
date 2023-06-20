import { useNavigate, useParams } from "react-router-dom";
import { useGetGameByIdQuery } from "redux/api/game.api";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { removeAllMessages } from "redux/reducers/messages.reducer";
import { getUserName } from "redux/reducers/user-name.reducer";
import { GAME_EVENT, ROUTES } from "utils/consts";
import { socket } from "web-socket/socket";

import * as Ui from "styles/ui";

export const GameControls = () => {
	const { id } = useParams();
	const { data } = useGetGameByIdQuery(id || "");
	const navigate = useNavigate();
	const user = useAppSelector(getUserName);
	const dispatch = useAppDispatch();

	const handleGiveUp = () => {
		socket.emit(GAME_EVENT.GIVE_UP, { id, user });
	};

	const handleExitGame = () => {
		dispatch(removeAllMessages());
		navigate(ROUTES.DASHBOARD);
	};

	return (
		<>
			<Ui.Container.Wrapper mb="1rem">
				<Ui.Button
					type="button"
					disabled={!!data?.winner}
					aria-label="Give up button"
					onClick={handleGiveUp}
				>
					give up
				</Ui.Button>
			</Ui.Container.Wrapper>
			<Ui.Button
				type="button"
				disabled={!data?.winner}
				aria-label="Exit game button"
				onClick={handleExitGame}
			>
				exit game
			</Ui.Button>
		</>
	);
};
