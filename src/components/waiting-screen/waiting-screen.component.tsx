import { useNavigate, useParams } from "react-router-dom";

import { Timer } from "components/timer";
import { useAbortGameMutation } from "redux/api/game.api";
import { ROUTES } from "utils/consts";

import { FONT } from "styles";
import * as Ui from "styles/ui";

export const WaitingScreen = () => {
	const [abortGame, { isLoading }] = useAbortGameMutation();
	const { id } = useParams();
	const navigate = useNavigate();

	const handleAbortGame = async () => {
		if (id) {
			const deletedGame = await abortGame(id);
			console.log(deletedGame);
		}
		navigate(ROUTES.DASHBOARD);
	};

	return (
		<Ui.Container.Content>
			<Ui.Container.Wrapper mb="1rem">
				<Ui.Paragraph
					ta={FONT.TEXT_ALIGN.CENTER}
					fw={FONT.FONT_WEIGHT.MEDIUM}
					fz={FONT.SIZE.MEDIUM}
				>
					You started a new game {<Timer />} ago. Waiting for a second player…
				</Ui.Paragraph>
			</Ui.Container.Wrapper>
			<Ui.Button type="button" onClick={handleAbortGame} disabled={isLoading}>
				{isLoading ? "...loading" : "abort game"}
			</Ui.Button>
		</Ui.Container.Content>
	);
};
