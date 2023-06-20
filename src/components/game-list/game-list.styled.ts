import styled from "styled-components";

import { FONT } from "styles";
import { Button } from "styles/ui";

export const ListItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;

	:not(:last-child) {
		margin-bottom: 1rem;
	}
`;

export const JoinButton = styled(Button)`
	width: auto;
	padding: 0.5rem 1rem;

	text-transform: capitalize;
`;

export const Span = styled.span`
	font-weight: ${FONT.WEIGHT.BOLD};
	font-size: ${FONT.SIZE.LARGE};

	color: ${FONT.COLOR.ACCENT};
`;
