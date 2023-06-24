import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { socket } from "web-socket/socket";
import { Timer } from "components/timer";
import { useAbortGameMutation, useGetAllPendingGamesQuery } from "redux/api/game.api";
import { GAME_EVENT, ROUTES } from "utils/consts";
import { ModalWindow } from "components/modal-window";
import { AbortingGameConfirmation } from "components/modal-window/aborting-game-confirmation";

import { FONT } from "styles";
import * as Ui from "styles/ui";

export const WaitingScreen = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [abortGame, { isLoading }] = useAbortGameMutation();
	const { refetch } = useGetAllPendingGamesQuery();
	const { id } = useParams();
	const navigate = useNavigate();

	const handleAbortGame = async () => {
		if (id) {
			await abortGame(id);
			socket.emit(GAME_EVENT.ABORT_GAME);
		}
		setIsOpen(false);
		navigate(ROUTES.DASHBOARD, { replace: true });
	};

	const handleInvokeModalWindow = () => setIsOpen(true);

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
		<Ui.Container.Content>
			<Ui.Container.Wrapper mb="1rem">
				<Ui.Paragraph ta={FONT.TEXT_ALIGN.CENTER} fw={FONT.WEIGHT.MEDIUM} fz={FONT.SIZE.MEDIUM}>
					You started a new game {<Timer />} ago. Waiting for a second player…
				</Ui.Paragraph>
			</Ui.Container.Wrapper>
			<Ui.Button type="button" onClick={handleInvokeModalWindow} disabled={isLoading}>
				{isLoading ? "...loading" : "abort game"}
			</Ui.Button>
			<ModalWindow isOpen={isOpen} onClose={setIsOpen}>
				<AbortingGameConfirmation onClose={setIsOpen} handleAbortingGameClick={handleAbortGame} />
			</ModalWindow>
		</Ui.Container.Content>
	);
};
