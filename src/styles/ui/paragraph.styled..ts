import styled, { css } from "styled-components";
import { FONT } from "styles";

interface IParagraph {
  ta?: FONT.TEXT_ALIGN;
  fw?: FONT.FONT_WEIGHT;
  fz?: FONT.SIZE;
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
`;
