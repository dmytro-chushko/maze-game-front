import * as Styled from "./chat-input.styled";

export const ChatInput = () => {
	return (
		<Styled.FlexWraper>
			<Styled.InputContainer>
				<Styled.Input type="text" />
			</Styled.InputContainer>
			<Styled.InputButton type="submit">send</Styled.InputButton>
		</Styled.FlexWraper>
	);
};
