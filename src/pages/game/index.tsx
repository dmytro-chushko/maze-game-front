import { WaitingScreen } from "components/waiting-screen";
import { GameArea } from "modules/game-area";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetGameByIdQuery } from "redux/api/game.api";
import * as Ui from "styles/ui";
import { GAME_STATUS } from "utils/consts";
import { socket } from "web-socket/socket";

export const Game = () => {
	const { id } = useParams();
	const { data, isLoading, refetch } = useGetGameByIdQuery(id || "");

	useEffect(() => {
		const handleStartGame = () => refetch();
		socket.on("start-game", handleStartGame);

		return () => {
			socket.off("start-game", handleStartGame);
		};
	}, [refetch]);

	return (
		<Ui.Container.Main>
			<Ui.Container.Absolute center>
				{isLoading && <div>...LOADING</div>}
				{data && data.status === GAME_STATUS.PENDING && <WaitingScreen />}
				{data && data.status === GAME_STATUS.STARTED && <GameArea />}
			</Ui.Container.Absolute>
		</Ui.Container.Main>
	);
};
