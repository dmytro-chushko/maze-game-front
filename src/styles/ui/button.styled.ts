import styled from "styled-components";

import { COLOR, COMMON, FONT } from "styles";

export const Button = styled.button`
	width: 100%;
	padding: 0.5rem;

	font-size: ${FONT.SIZE.MEDIUM};
	text-transform: uppercase;
	font-weight: 600;
	text-align: center;

	border: ${COMMON.BORDER};
	border-radius: ${COMMON.BORDER_RADIUS};
	background-color: ${COLOR.BGC.PRIMARY};

	transition: ${COMMON.TRANSITION};

	:disabled {
		color: ${FONT.COLOR.DISABLED};
		cursor: auto;
		border: ${COMMON.DISABLED_BORDER};
	}

	:hover:not(:disabled),
	:focus:not(:disabled) {
		box-shadow: ${COMMON.SHADOW};
	}

	:active:not(:disabled) {
		box-shadow: none;
	}
`;
