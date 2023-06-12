import { PersonalizedGreeting } from "components/personalized-greeting";
import { NewGameButton } from "components/new-game-button";

import * as Ui from "styles/ui";
import { GameList } from "components/game-list";

export const Dashboard = () => {
	return (
		<Ui.Container.Main>
			<Ui.Container.Absolute center>
				<Ui.Container.Content>
					<Ui.Container.Wrapper mb="1rem">
						<PersonalizedGreeting />
					</Ui.Container.Wrapper>
					<Ui.Container.Wrapper mb="1rem">
						<GameList />
					</Ui.Container.Wrapper>
					<NewGameButton />
				</Ui.Container.Content>
			</Ui.Container.Absolute>
		</Ui.Container.Main>
	);
};
