import { useGetAllPendingGamesQuery, useJoinGameMutation } from "redux/api/game.api";
import { FONT } from "styles";

import * as Styled from "./game-list.styled";
import * as Ui from "styles/ui";
import { formatsDateWithTime } from "utils/formatsDateWithTime";
import { useAppSelector } from "redux/hooks";
import { getUserName } from "redux/reducers/user-name.reducer";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "utils/consts";
import { socket } from "web-socket/socket";
import { excludeOwnGame } from "utils/exclude-own-game.hook";

export const GameList = () => {
	const { data, isLoading } = useGetAllPendingGamesQuery();
	const [joinGame, { isLoading: isJoining }] = useJoinGameMutation();
	const navigate = useNavigate();
	const userName = useAppSelector(getUserName);
	console.log(data);

	const handleJoinGame = async (id: string) => {
		const startedGame = await joinGame({ id, player_two: userName });
		if ("data" in startedGame) {
			socket.emit("join-game");
			navigate(`${ROUTES.GAME}/${startedGame.data._id}`);
		}
	};

	if (isLoading) {
		return <Ui.Container.SubContent>...LOADING</Ui.Container.SubContent>;
	}

	return (
		<Ui.Container.SubContent>
			{data && data?.length > 0 ? (
				<ul>
					{excludeOwnGame(data, userName).map(game => (
						<Styled.ListItem key={game._id}>
							<Ui.Paragraph color={FONT.COLOR.SECONDARY} fw={FONT.WEIGHT.MEDIUM}>
								{formatsDateWithTime(game.createdAt)}
								<br />
								<Styled.Span>{game.player_one}</Styled.Span> initiated new game.
							</Ui.Paragraph>
							<Styled.JoinButton
								type="button"
								aria-label="join game"
								onClick={() => handleJoinGame(game._id)}
							>
								join
							</Styled.JoinButton>
						</Styled.ListItem>
					))}
				</ul>
			) : (
				<Ui.Paragraph ta={FONT.TEXT_ALIGN.CENTER} fw={FONT.WEIGHT.MEDIUM} fz={FONT.SIZE.MEDIUM}>
					There are no pending games yet
				</Ui.Paragraph>
			)}
		</Ui.Container.SubContent>
	);
};
