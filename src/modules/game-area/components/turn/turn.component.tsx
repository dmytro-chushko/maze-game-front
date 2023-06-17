import { useAppSelector } from "redux/hooks";
import { getTurn } from "redux/reducers/game.raducer";
import { FONT } from "styles";
import { Paragraph } from "styles/ui";

export const Turn = () => {
	const turn = useAppSelector(getTurn);

	return (
		<Paragraph ta={FONT.TEXT_ALIGN.CENTER} fw={FONT.WEIGHT.BOLD} fz={FONT.SIZE.LARGE}>
			Now it`s {turn ? "your" : "opponent's"} turn
		</Paragraph>
	);
};
