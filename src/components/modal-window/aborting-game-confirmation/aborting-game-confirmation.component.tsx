import { FONT } from "styles";
import { ButtonSet } from "../button-set";
import { TypeSetState } from "types/set-state.types";

import * as Ui from "styles/ui";

interface IAGCProps {
	onClose: TypeSetState<boolean>;
	handleAbortingGameClick: () => Promise<void>;
}

export const AbortingGameConfirmation: React.FC<IAGCProps> = ({
	onClose,
	handleAbortingGameClick,
}) => {
	const handleCancelClick = () => onClose(false);

	return (
		<Ui.Container.Absolute>
			<Ui.Container.Content>
				<Ui.Container.Wrapper mb="1rem">
					<Ui.Paragraph ta={FONT.TEXT_ALIGN.CENTER} fw={FONT.WEIGHT.BOLD} fz={FONT.SIZE.LARGE}>
						If you confirm this action, the game will be cancelled. Continue?
					</Ui.Paragraph>
				</Ui.Container.Wrapper>
				<ButtonSet onCancel={handleCancelClick} onConfirm={handleAbortingGameClick} />
			</Ui.Container.Content>
		</Ui.Container.Absolute>
	);
};
