import styled, { css } from "styled-components";

import { COMMON, FONT } from "styles";

interface IParagraph {
	ta?: FONT.TEXT_ALIGN;
	fw?: FONT.WEIGHT;
	fz?: FONT.SIZE;
	color?: FONT.COLOR;
}

export const Paragraph = styled.p<IParagraph>`
	${({ ta }) =>
		ta &&
		css`
			text-align: ${ta};
		`};
	${({ fw }) =>
		fw &&
		css`
			font-weight: ${fw};
		`};
	${({ fz }) =>
		fz &&
		css`
			font-size: ${fz};
		`};
	${({ color }) =>
		color &&
		css`
			color: ${color};
		`};
`;

export const TitleTeg = styled.h1`
	font-size: 4em;
	font-weight: ${FONT.WEIGHT.BOLD};
	text-shadow: ${COMMON.TEXT_SHADOW};

	color: ${FONT.COLOR.ACCENT};
`;
