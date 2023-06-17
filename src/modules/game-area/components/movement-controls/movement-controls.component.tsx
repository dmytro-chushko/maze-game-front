import { useAppSelector } from "redux/hooks";
import * as Styled from "./movement-controls.styled";
import { getTurn } from "redux/reducers/game.raducer";

export const MovementControls = () => {
	const turn = useAppSelector(getTurn);

	return (
		<Styled.ControlsContainer>
			<Styled.JoindGreedItem>
				<Styled.IconButton type="button" disabled={!turn} aria-label="arrow up">
					<Styled.IconUp />
				</Styled.IconButton>
			</Styled.JoindGreedItem>
			<Styled.IconButton type="button" disabled={!turn} aria-label="arrow left">
				<Styled.IconLeft />
			</Styled.IconButton>
			<Styled.IconButton type="button" disabled={!turn} aria-label="arrow down">
				<Styled.IconDown />
			</Styled.IconButton>
			<Styled.IconButton type="button" disabled={!turn} aria-label="arrow right">
				<Styled.IconRight />
			</Styled.IconButton>
		</Styled.ControlsContainer>
	);
};
