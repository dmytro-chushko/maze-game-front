import { useParams } from "react-router-dom";

import { useGetGameByIdQuery } from "redux/api/game.api";
import { ChatInput } from "./components/chat-input";
import { ChatScreen } from "./components/chat-screen";
import { GameControls } from "./components/game-controls";
import { Maze } from "./components/maze";
import { MovementControls } from "./components/movement-controls";
import { Turn } from "./components/turn";
import { Winner } from "./components/winner";

import * as Styled from "./game-area.styled";
import * as Ui from "styles/ui";

export const GameArea = () => {
	const { id } = useParams();
	const { data } = useGetGameByIdQuery(id || "");

	return (
		<Styled.GameContainer>
			<Styled.FlexWrapper mb="1rem">
				<Styled.FlexItemWrapper fg={0}>
					<Styled.FlexCentered>
						<Maze />
					</Styled.FlexCentered>
				</Styled.FlexItemWrapper>
				<Styled.FlexItemWrapper fg={1}>
					<Styled.FlexWrapper column>
						<Ui.Container.Wrapper mb="1rem">
							<GameControls />
						</Ui.Container.Wrapper>
						{!data?.winner && <Turn />}
						{!!data?.winner && <Winner winner={data.winner} />}
					</Styled.FlexWrapper>
				</Styled.FlexItemWrapper>
			</Styled.FlexWrapper>
			<Styled.FlexWrapper>
				<Styled.FlexItemWrapper fg={2}>
					<Ui.Container.Wrapper mb="1rem">
						<ChatScreen />
					</Ui.Container.Wrapper>
					<ChatInput />
				</Styled.FlexItemWrapper>
				<Styled.FlexItemWrapper fg={1}>
					<MovementControls />
				</Styled.FlexItemWrapper>
			</Styled.FlexWrapper>
		</Styled.GameContainer>
	);
};
