import styled, { css } from "styled-components";

import { ReactComponent as ArrowUp } from "assets/arrow-up.svg";
import { ReactComponent as ArrowDown } from "assets/arrow-down.svg";
import { ReactComponent as ArrowLeft } from "assets/arrow-left.svg";
import { ReactComponent as ArrowRight } from "assets/arrow-right.svg";

import { Button } from "styles/ui";

export const ControlsContainer = styled.div`
	display: grid;
	grid-template-rows: 1fr auto;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 0.5rem;
	justify-items: center;

	width: 10rem;
	margin: auto;
`;

export const IconButton = styled(Button)`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 3rem;
	height: 3rem;
`;

export const JoindGreedItem = styled.div`
	grid-column: span 3;
`;

const IconStyles = css`
	width: 1rem;
	height: 1rem;
	fill: currentColor;
`;

export const IconUp = styled(ArrowUp)`
	${IconStyles};
`;

export const IconDown = styled(ArrowDown)`
	${IconStyles};
`;

export const IconLeft = styled(ArrowLeft)`
	${IconStyles};
`;

export const IconRight = styled(ArrowRight)`
	${IconStyles};
`;
