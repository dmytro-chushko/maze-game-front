import { useAppSelector } from "redux/hooks";
import { getTurn } from "redux/reducers/game.raducer";
import { getUserName } from "redux/reducers/user-name.reducer";
import { useParams } from "react-router-dom";
import { socket } from "web-socket/socket";
import { GAME_EVENT } from "utils/consts";

import * as Styled from "./movement-controls.styled";

export const MovementControls = () => {
	const turn = useAppSelector(getTurn);
	const user = useAppSelector(getUserName);
	const { id } = useParams();

	const handleMove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const { move } = e.currentTarget.dataset;
		if (id) {
			socket.emit(GAME_EVENT.MOVE, { id, user, move });
		}
	};

	return (
		<Styled.ControlsContainer>
			<Styled.JoindGreedItem>
				<Styled.IconButton
					type="button"
					disabled={!turn}
					aria-label="arrow up"
					data-move="/up"
					onClick={handleMove}
				>
					<Styled.IconUp />
				</Styled.IconButton>
			</Styled.JoindGreedItem>
			<Styled.IconButton
				type="button"
				disabled={!turn}
				aria-label="arrow left"
				data-move="/left"
				onClick={handleMove}
			>
				<Styled.IconLeft />
			</Styled.IconButton>
			<Styled.IconButton
				type="button"
				disabled={!turn}
				aria-label="arrow down"
				data-move="/down"
				onClick={handleMove}
			>
				<Styled.IconDown />
			</Styled.IconButton>
			<Styled.IconButton
				type="button"
				disabled={!turn}
				aria-label="arrow right"
				data-move="/right"
				onClick={handleMove}
			>
				<Styled.IconRight />
			</Styled.IconButton>
		</Styled.ControlsContainer>
	);
};
