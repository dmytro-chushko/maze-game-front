import { WaitingScreen } from "components/waiting-screen";
import * as Ui from "styles/ui";

export const Game = () => {
	return (
		<Ui.Container.Main>
			<Ui.Container.Absolute center>
				<WaitingScreen />
			</Ui.Container.Absolute>
		</Ui.Container.Main>
	);
};
