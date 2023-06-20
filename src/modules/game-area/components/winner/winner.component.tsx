import { useGetUserName } from "redux/hooks";

import { FONT } from "styles";
import { Paragraph } from "styles/ui";

interface IWinner {
	winner: string;
}

export const Winner: React.FC<IWinner> = ({ winner }) => {
	const userName = useGetUserName();

	return (
		<Paragraph ta={FONT.TEXT_ALIGN.CENTER} fw={FONT.WEIGHT.BOLD} fz={FONT.SIZE.LARGE}>
			{winner === userName ? "You win the game" : "You lose the game"}
		</Paragraph>
	);
};
