import styled, { css } from "styled-components";
import { COLOR, COMMON } from "styles";

export const Main = styled.div`
  position: relative;

  height: 100vh;
  width: 100vw;
`;

interface IAbsolute {
  center?: boolean;
}

export const Absolute = styled.div<IAbsolute>`
  position: absolute;
  ${({ center }) =>
    center &&
    css`
      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%);
    `};
`;

interface IWrapper {
  mb?: string;
}

export const Wrapper = styled.div<IWrapper>`
  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb};
    `};
`;

export const Content = styled.div`
  padding: 2rem;

  background-color: ${COLOR.BGC.SECONDARY};
  box-shadow: ${COMMON.SHADOW};
  border: ${COMMON.BORDER};
  border-radius: ${COMMON.BORDER_RADIUS};
`;
