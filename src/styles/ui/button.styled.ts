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

  :hover,
  :focus {
    box-shadow: ${COMMON.SHADOW};
  }

  :active {
    box-shadow: none;
  }
`;
