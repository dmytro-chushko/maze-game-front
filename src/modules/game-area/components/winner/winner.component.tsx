import { useAppSelector } from "redux/hooks";
import { getUserName } from "redux/reducers/user-name.reducer";
import { FONT } from "styles";
import { Paragraph } from "styles/ui";

interface IWinner {
	winner: string;
}

export const Winner: React.FC<IWinner> = ({ winner }) => {
	const userName = useAppSelector(getUserName);

	return (
		<Paragraph ta={FONT.TEXT_ALIGN.CENTER} fw={FONT.WEIGHT.BOLD} fz={FONT.SIZE.LARGE}>
			{winner === userName ? "You win the game" : "You lose the game"}
		</Paragraph>
	);
};
