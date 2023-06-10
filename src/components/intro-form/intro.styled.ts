import styled from "styled-components";
import { FONT } from "styles";

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

export const ErrorBox = styled.p`
  position: absolute;
  bottom: -1rem;

  width: 100%;

  color: ${FONT.COLOR.ERROR};
`;
