import { useNavigate, useParams } from "react-router-dom";

import { Timer } from "components/timer";
import { useAbortGameMutation, useGetAllPendingGamesQuery } from "redux/api/game.api";
import { ROUTES } from "utils/consts";

import { FONT } from "styles";
import * as Ui from "styles/ui";
import { useEffect } from "react";
import { socket } from "web-socket/socket";

export const WaitingScreen = () => {
	const [abortGame, { isLoading }] = useAbortGameMutation();
	const { refetch } = useGetAllPendingGamesQuery();
	const { id } = useParams();
	const navigate = useNavigate();

	const handleAbortGame = async () => {
		if (id) {
			await abortGame(id);
			socket.emit("abort-game");
		}
		navigate(ROUTES.DASHBOARD);
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
		<Ui.Container.Content>
			<Ui.Container.Wrapper mb="1rem">
				<Ui.Paragraph ta={FONT.TEXT_ALIGN.CENTER} fw={FONT.WEIGHT.MEDIUM} fz={FONT.SIZE.MEDIUM}>
					You started a new game {<Timer />} ago. Waiting for a second player…
				</Ui.Paragraph>
			</Ui.Container.Wrapper>
			<Ui.Button type="button" onClick={handleAbortGame} disabled={isLoading}>
				{isLoading ? "...loading" : "abort game"}
			</Ui.Button>
		</Ui.Container.Content>
	);
};
