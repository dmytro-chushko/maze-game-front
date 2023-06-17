import { useEffect, useRef } from "react";
import { MazeContainer } from "./maze.styled";
import { addPointsToCanvas } from "utils/add-points-to-canvas";
import { useParams } from "react-router-dom";
import { useGetGameByIdQuery } from "redux/api/game.api";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { setTurn } from "redux/reducers/game.raducer";
import { getUserName } from "redux/reducers/user-name.reducer";

export const Maze = () => {
	const { id } = useParams();
	const { data } = useGetGameByIdQuery(id || "");
	const dispatch = useAppDispatch();
	const userName = useAppSelector(getUserName);
	const mazeRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = mazeRef.current;
		const context = canvas?.getContext("2d");

		if (data) {
			const { player_one, player_two, game_flow_maze, p_one_location, p_two_location, exit, turn } =
				data;
			const mazeSize = game_flow_maze.length;

			if (userName === player_one) dispatch(setTurn(!!turn ? true : false));
			if (userName === player_two) dispatch(setTurn(!turn ? true : false));

			game_flow_maze.forEach((row, y) =>
				row.forEach((cell, x) => {
					const color = cell ? "white" : "#6B7280";
					if (context && canvas) {
						context.beginPath();
						context.rect(
							(x * canvas.width) / mazeSize,
							(y * canvas.height) / mazeSize,
							canvas.width / mazeSize,
							canvas.width / mazeSize,
						);
						context.fillStyle = color;
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
	}, [data, dispatch, userName]);

	return (
		<MazeContainer>
			<canvas ref={mazeRef} width={343} height={343}></canvas>
		</MazeContainer>
	);
};
