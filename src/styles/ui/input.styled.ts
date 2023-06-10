import styled from "styled-components";
import { COLOR, COMMON } from "styles";

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;

  border: ${COMMON.BORDER};
  border-radius: ${COMMON.BORDER_RADIUS};
  background-color: ${COLOR.BGC.PRIMARY};
  box-shadow: ${COMMON.INT_SHADOW};
`;
