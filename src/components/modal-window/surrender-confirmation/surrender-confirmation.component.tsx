import { useParams } from "react-router-dom";

import { TypeSetState } from "types/set-state.types";
import { socket } from "web-socket/socket";
import { GAME_EVENT } from "utils/consts";
import { useAppSelector } from "redux/hooks";
import { getUserName } from "redux/reducers/user-name.reducer";

import * as Ui from "styles/ui";
import { FONT } from "styles";
import { ButtonSet } from "../button-set";

interface IContentWindow {
	onClose: TypeSetState<boolean>;
}

export const SurrenderConfirmation = ({ onClose }: IContentWindow) => {
	const { id } = useParams();
	const user = useAppSelector(getUserName);

	const handleGiveUp = () => {
		socket.emit(GAME_EVENT.GIVE_UP, { id, user });
	};

	const handleCancelClick = () => onClose(false);

	const handleGiveUpClick = () => {
		handleGiveUp();
		onClose(false);
	};

	return (
		<Ui.Container.Absolute>
			<Ui.Container.Content>
				<Ui.Container.Wrapper mb="1rem">
					<Ui.Paragraph ta={FONT.TEXT_ALIGN.CENTER} fw={FONT.WEIGHT.BOLD} fz={FONT.SIZE.LARGE}>
						Are you shure want to give up?
					</Ui.Paragraph>
				</Ui.Container.Wrapper>
				<ButtonSet
					confirmButton="give up"
					onCancel={handleCancelClick}
					onConfirm={handleGiveUpClick}
				/>
			</Ui.Container.Content>
		</Ui.Container.Absolute>
	);
};
