import styled from "styled-components";
import { FONT } from "styles";
import { Button, Container } from "styles/ui";

export const FlexWraper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;

	width: 100%;
`;

export const InputContainer = styled(Container.SubContent)`
	flex-grow: 4;

	padding: 0.5rem;
`;

export const InputButton = styled(Button)`
	flex-grow: 1;

	width: auto;

	text-transform: capitalize;
`;

export const Input = styled.input`
	width: 100%;
	height: 100%;

	font-size: ${FONT.SIZE.MEDIUM};
	font-weight: ${FONT.SIZE.MEDIUM};

	color: ${FONT.COLOR.SECONDARY};
	background-color: transparent;
	border: none;
`;
