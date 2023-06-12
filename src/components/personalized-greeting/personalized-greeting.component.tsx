import { useGetUserName } from "redux/hooks";
import { FONT } from "styles";
import * as Ui from "styles/ui";

export const PersonalizedGreeting = () => {
	return (
		<>
			<Ui.Paragraph ta={FONT.TEXT_ALIGN.CENTER} fw={FONT.WEIGHT.BOLD} fz={FONT.SIZE.LARGE}>
				Hello {useGetUserName()}!
			</Ui.Paragraph>
			<Ui.Paragraph ta={FONT.TEXT_ALIGN.CENTER} fw={FONT.WEIGHT.MEDIUM} fz={FONT.SIZE.MEDIUM}>
				Join one of the games below or start a new one
			</Ui.Paragraph>
		</>
	);
};
