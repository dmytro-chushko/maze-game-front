import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import { MazeContainer } from "./maze.styled";
import { addPointsToCanvas } from "utils/add-points-to-canvas";
import { useGetGameByIdQuery } from "redux/api/game.api";
import { useAppDispatch, useGetUserName } from "redux/hooks";
import { setTurn } from "redux/reducers/game.raducer";
import { socket } from "web-socket/socket";
import { GAME_EVENT, MAZE_ELEMENT } from "utils/consts";
import { addPathToCanvas } from "utils/add-path-to-canvas";
import { addMazeElementsToCanvas } from "utils/add-maze-elements-to-canvas";

import { COLOR } from "styles";

export const Maze = () => {
	const { id } = useParams();
	const { data, refetch } = useGetGameByIdQuery(id || "");
	const dispatch = useAppDispatch();
	const userName = useGetUserName();
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
			const game_flow_maze =
				userName === player_one ? [...p_one_game_flow_maze] : [...p_two_game_flow_maze];

			if (userName === player_one) {
				dispatch(setTurn(!!turn ? true : false));
			}
			if (userName === player_two) {
				dispatch(setTurn(!turn ? true : false));
			}

			const mazeSize = game_flow_maze.length;

			game_flow_maze.forEach((row, y, arr) =>
				row.forEach((cell, x) => {
					if (context && canvas) {
						const cellSize = canvas?.width / mazeSize;

						addMazeElementsToCanvas(context, cellSize, x, y, cell);

						addPathToCanvas(arr, cellSize, context, COLOR.BGC.DARK, x, y);

						if (y === exit.exitY && x === exit.exitX) {
							addPointsToCanvas(MAZE_ELEMENT.EXIT, mazeSize, context, canvas, "red", x, y);
						}
						if (y === p_one_location.pointY && x === p_one_location.pointX) {
							if (userName === player_one) {
								addPointsToCanvas(
									MAZE_ELEMENT.POINT,
									mazeSize,
									context,
									canvas,
									COLOR.BGC.DARK,
									x,
									y,
								);
							}
						}
						if (y === p_two_location.pointY && x === p_two_location.pointX) {
							if (userName === player_two) {
								addPointsToCanvas(
									MAZE_ELEMENT.POINT,
									mazeSize,
									context,
									canvas,
									COLOR.BGC.DARK,
									x,
									y,
								);
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
