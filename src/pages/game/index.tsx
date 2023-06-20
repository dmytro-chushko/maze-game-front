import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { WaitingScreen } from "components/waiting-screen";
import { GameArea } from "modules/game-area";
import { useGetGameByIdQuery } from "redux/api/game.api";
import { GAME_EVENT, GAME_STATUS } from "utils/consts";
import { socket } from "web-socket/socket";

import * as Ui from "styles/ui";

export const Game = () => {
	const { id } = useParams();
	const { data, isLoading, refetch } = useGetGameByIdQuery(id || "");

	useEffect(() => {
		const handleStartGame = () => refetch();
		socket.on(GAME_EVENT.START_GAME, handleStartGame);

		return () => {
			socket.off(GAME_EVENT.START_GAME, handleStartGame);
		};
	}, [refetch]);

	return (
		<Ui.Container.Main>
			<Ui.Container.Absolute center>
				{isLoading && <div>...LOADING</div>}
				{data && data.status === GAME_STATUS.PENDING && <WaitingScreen />}
				{data && (data.status === GAME_STATUS.STARTED || data.status === GAME_STATUS.FINISHED) && (
					<GameArea />
				)}
			</Ui.Container.Absolute>
		</Ui.Container.Main>
	);
};
