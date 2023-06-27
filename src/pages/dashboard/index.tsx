import { PersonalizedGreeting } from "components/personalized-greeting";
import { NewGameButton } from "components/new-game-button";
import { GameList } from "components/game-list";
import { GameTitle } from "components/game-title";

import * as Ui from "styles/ui";

export const Dashboard = () => {
	return (
		<Ui.Container.Main>
			<GameTitle />
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
