import { ChatInput } from "./components/chat-input";
import { ChatScreen } from "./components/chat-screen";
import { MovementControls } from "./components/movement-controls";
import * as Styled from "./game-area.styled";
import * as Ui from "styles/ui";

export const GameArea = () => {
	return (
		<Styled.GameContainer>
			<Styled.FlexWrapper>
				<Styled.ChatWrapper>
					<Ui.Container.Wrapper mb="1rem">
						<ChatScreen />
					</Ui.Container.Wrapper>
					<ChatInput />
				</Styled.ChatWrapper>
				<Styled.ControlWrapper>
					<MovementControls />
				</Styled.ControlWrapper>
			</Styled.FlexWrapper>
		</Styled.GameContainer>
	);
};
