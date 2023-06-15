import { Button } from "styles/ui";

import * as Ui from "styles/ui";

export const GameControls = () => {
	return (
		<>
			<Ui.Container.Wrapper mb="1rem">
				<Button type="button">give up</Button>
			</Ui.Container.Wrapper>
			<Button type="button">exit game</Button>
		</>
	);
};
