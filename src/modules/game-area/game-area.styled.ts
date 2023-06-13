import styled from "styled-components";
import { Container } from "styles/ui";

export const GameContainer = styled(Container.Content)`
	width: 45rem;
`;

export const FlexWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
`;

export const ChatWrapper = styled(Container.Wrapper)`
	flex-grow: 2;
`;

export const ControlWrapper = styled(Container.Wrapper)`
	flex-grow: 1;
`;
