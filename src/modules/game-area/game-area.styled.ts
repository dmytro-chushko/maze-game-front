import styled, { css } from "styled-components";
import { COMMON } from "styles";
import { Container } from "styles/ui";

export const GameContainer = styled(Container.Content)`
	width: 40rem;

	canvas {
		display: block;

		border-radius: ${COMMON.BORDER_INNER_RADIUS} 0 ${COMMON.BORDER_INNER_RADIUS} 0;
	}
`;

export const FlexWrapper = styled.div<{ mb?: string; column?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;

	${({ column }) =>
		column &&
		css`
			flex-direction: column;
			justify-content: space-around;
		`};

	${({ mb }) =>
		mb &&
		css`
			margin-bottom: ${mb};
		`};
`;

export const FlexCentered = styled(FlexWrapper)`
	justify-content: center;
`;

export const FlexItemWrapper = styled(Container.Wrapper)<{ fg: number }>`
	flex-grow: ${({ fg }) => fg};
`;

export const ControlWrapper = styled(Container.Wrapper)`
	flex-grow: 1;
`;
