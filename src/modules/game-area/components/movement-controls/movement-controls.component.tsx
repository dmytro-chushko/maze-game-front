import * as Styled from "./movement-controls.styled";

export const MovementControls = () => {
	return (
		<Styled.ControlsContainer>
			<Styled.JoindGreedItem>
				<Styled.IconButton type="button" aria-label="arrow up">
					<Styled.IconUp />
				</Styled.IconButton>
			</Styled.JoindGreedItem>
			<Styled.IconButton type="button" aria-label="arrow left">
				<Styled.IconLeft />
			</Styled.IconButton>
			<Styled.IconButton type="button" aria-label="arrow down">
				<Styled.IconDown />
			</Styled.IconButton>
			<Styled.IconButton type="button" aria-label="arrow right">
				<Styled.IconRight />
			</Styled.IconButton>
		</Styled.ControlsContainer>
	);
};
