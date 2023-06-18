import { useEffect, useRef } from "react";
import { MazeContainer } from "./maze.styled";
import { addPointsToCanvas } from "utils/add-points-to-canvas";
import { useParams } from "react-router-dom";
import { useGetGameByIdQuery } from "redux/api/game.api";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { setTurn } from "redux/reducers/game.raducer";
import { getUserName } from "redux/reducers/user-name.reducer";
import { socket } from "web-socket/socket";
import { GAME_EVENT } from "utils/consts";
import { maze } from "types/maze.types";

export const Maze = () => {
	const { id } = useParams();
	const { data, refetch } = useGetGameByIdQuery(id || "");
	const dispatch = useAppDispatch();
	const userName = useAppSelector(getUserName);
	const mazeRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = mazeRef.current;
		const context = canvas?.getContext("2d");

		const handleMoveEvent = () => refetch();

		socket.on(GAME_EVENT.MOVE, handleMoveEvent);

		if (data) {
			const {
				player_one,
				player_two,
				p_one_game_flow_maze,
				p_two_game_flow_maze,
				p_one_location,
				p_two_location,
				exit,
				turn,
			} = data;
			const game_flow_maze = userName === player_one ? p_one_game_flow_maze : p_two_game_flow_maze;

			if (userName === player_one) {
				dispatch(setTurn(!!turn ? true : false));
			}
			if (userName === player_two) {
				dispatch(setTurn(!turn ? true : false));
			}

			const mazeSize = game_flow_maze.length;

			game_flow_maze.forEach((row, y) =>
				row.forEach((cell, x) => {
					if (context && canvas) {
						context.beginPath();
						context.rect(
							(x * canvas.width) / mazeSize,
							(y * canvas.height) / mazeSize,
							canvas.width / mazeSize,
							canvas.width / mazeSize,
						);
						switch (cell) {
							case true:
								context.fillStyle = "white";
								break;
							case false:
								context.fillStyle = "#6B7280";
								break;
							case "W":
								context.fillStyle = "black";
						}
						context.fill();

						if (y === exit.exitY && x === exit.exitX) {
							addPointsToCanvas("E", mazeSize, context, canvas, "red", x, y);
						}
						if (y === p_one_location.pointY && x === p_one_location.pointX) {
							if (userName === player_one) {
								addPointsToCanvas("point", mazeSize, context, canvas, "green", x, y);
							}
						}
						if (y === p_two_location.pointY && x === p_two_location.pointX) {
							if (userName === player_two) {
								addPointsToCanvas("point", mazeSize, context, canvas, "green", x, y);
							}
						}
					}
				}),
			);
		}

		return () => {
			socket.off(GAME_EVENT.MOVE, handleMoveEvent);
		};
	}, [data, dispatch, refetch, userName]);

	return (
		<MazeContainer>
			<canvas ref={mazeRef} width={343} height={343}></canvas>
		</MazeContainer>
	);
};
