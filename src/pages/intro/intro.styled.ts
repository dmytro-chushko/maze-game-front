import styled from "styled-components";
import { COLOR, COMMON, FONT } from "styles";

export const Container = styled.div`
  position: relative;

  height: 100vh;
  width: 100vw;
`;

export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 20rem;
  padding: 2rem;

  background-color: ${COLOR.BGC.SECONDARY};
  transform: translate(-50%, -50%);
  box-shadow: ${COMMON.SHADOW};
  border: ${COMMON.BORDER};
  border-radius: ${COMMON.BORDER_RADIUS};

  input,
  button {
    padding: 0.5rem;

    border: ${COMMON.BORDER};
    border-radius: ${COMMON.BORDER_RADIUS};
    background-color: ${COLOR.BGC.PRIMARY};
  }

  p,
  button {
    font-weight: 600;
    text-align: center;
  }

  input,
  p {
    margin-bottom: 1rem;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;

  box-shadow: ${COMMON.INT_SHADOW};
`;

export const ErrorBox = styled.p`
  position: absolute;
  bottom: -1rem;

  width: 100%;

  color: ${FONT.COLOR.ERROR};
`;

export const Paragraph = styled.p`
  font-size: ${FONT.SIZE.LARGE};
`;

export const Button = styled.button`
  width: 100%;

  font-size: ${FONT.SIZE.MEDIUM};
  text-transform: uppercase;

  :hover {
    box-shadow: ${COMMON.SHADOW};
  }

  :active {
    box-shadow: none;
  }
`;
