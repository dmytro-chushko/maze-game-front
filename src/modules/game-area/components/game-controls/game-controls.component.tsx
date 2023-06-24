import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import { useGetGameByIdQuery } from "redux/api/game.api";
import { useAppDispatch } from "redux/hooks";
import { removeAllMessages } from "redux/reducers/messages.reducer";
import { ModalWindow } from "components/modal-window";
import { SurrenderConfirmation } from "components/modal-window/surrender-confirmation";
import { GAME_STATUS, ROUTES } from "utils/consts";

import * as Ui from "styles/ui";

export const GameControls = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { id } = useParams();
	const { data } = useGetGameByIdQuery(id || "");
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const hamdleOpenModal = () => {
		setIsOpen(true);
	};

	const handleExitGame = () => {
		dispatch(removeAllMessages());
		navigate(ROUTES.DASHBOARD);
	};

	return (
		<>
			<Ui.Container.Wrapper mb="1rem">
				{data && data.status === GAME_STATUS.STARTED && (
					<Ui.Button
						type="button"
						disabled={!!data?.winner}
						aria-label="Give up button"
						onClick={hamdleOpenModal}
					>
						give up
					</Ui.Button>
				)}
			</Ui.Container.Wrapper>
			<Ui.Button
				type="button"
				disabled={!data?.winner}
				aria-label="Exit game button"
				onClick={handleExitGame}
			>
				exit game
			</Ui.Button>
			<ModalWindow isOpen={isOpen} onClose={setIsOpen}>
				<SurrenderConfirmation onClose={setIsOpen} />
			</ModalWindow>
		</>
	);
};
