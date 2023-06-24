import * as Styled from "./button-set.styled";
import * as Ui from "styles/ui";

interface IButtonSet {
	cnacelButton?: string;
	confirmButton?: string;
	onCancel: () => void;
	onConfirm: () => void;
}

export const ButtonSet: React.FC<IButtonSet> = ({
	cnacelButton,
	confirmButton,
	onCancel,
	onConfirm,
}) => {
	return (
		<Styled.ButtonsWrapper>
			<Ui.Button type="button" onClick={onCancel}>
				{cnacelButton ? cnacelButton : "cancel"}
			</Ui.Button>
			<Ui.Button type="button" onClick={onConfirm}>
				{confirmButton ? confirmButton : "ok"}
			</Ui.Button>
		</Styled.ButtonsWrapper>
	);
};
