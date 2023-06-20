import { useAppDispatch, useAppSelector } from "redux/hooks";
import { getTurn, setTurn } from "redux/reducers/game.raducer";
import { getUserName } from "redux/reducers/user-name.reducer";
import { useParams } from "react-router-dom";
import { socket } from "web-socket/socket";
import { GAME_EVENT } from "utils/consts";

import * as Styled from "./movement-controls.styled";
import { useGetGameByIdQuery } from "redux/api/game.api";
import { addNewMessage } from "redux/reducers/messages.reducer";
import { getTime } from "utils/get-time";

export const MovementControls = () => {
	const turn = useAppSelector(getTurn);
	const user = useAppSelector(getUserName);
	const dispatch = useAppDispatch();
	const { id } = useParams();
	const { data } = useGetGameByIdQuery(id || "");

	const handleMove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const { move } = e.currentTarget.dataset;
		if (id && move) {
			const timestamp = getTime();

			dispatch(
				addNewMessage({
					sender: "",
					message: `going ${move.slice(1)}`,
					timestamp,
				}),
			);
			dispatch(setTurn(false));
			socket.emit(GAME_EVENT.MOVE, { id, user, move });
		}
	};

	return (
		<Styled.ControlsContainer>
			<Styled.JoindGreedItem>
				<Styled.IconButton
					type="button"
					disabled={!turn || !!data?.winner}
					aria-label="arrow up"
					data-move="/up"
					onClick={handleMove}
				>
					<Styled.IconUp />
				</Styled.IconButton>
			</Styled.JoindGreedItem>
			<Styled.IconButton
				type="button"
				disabled={!turn || !!data?.winner}
				aria-label="arrow left"
				data-move="/left"
				onClick={handleMove}
			>
				<Styled.IconLeft />
			</Styled.IconButton>
			<Styled.IconButton
				type="button"
				disabled={!turn || !!data?.winner}
				aria-label="arrow down"
				data-move="/down"
				onClick={handleMove}
			>
				<Styled.IconDown />
			</Styled.IconButton>
			<Styled.IconButton
				type="button"
				disabled={!turn || !!data?.winner}
				aria-label="arrow right"
				data-move="/right"
				onClick={handleMove}
			>
				<Styled.IconRight />
			</Styled.IconButton>
		</Styled.ControlsContainer>
	);
};
