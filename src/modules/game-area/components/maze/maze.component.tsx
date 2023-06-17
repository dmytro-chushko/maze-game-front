import { useEffect, useRef } from "react";
import { MazeContainer } from "./maze.styled";
import { addPointsToCanvas } from "utils/add-points-to-canvas";
import { useParams } from "react-router-dom";
import { useGetGameByIdQuery } from "redux/api/game.api";
import { useAppDispatch } from "redux/hooks";
import { setTurn } from "redux/reducers/game.raducer";

export const Maze = () => {
	const { id } = useParams();
	const { data } = useGetGameByIdQuery(id || "");
	const dispatch = useAppDispatch();
	const mazeRef = useRef<HTMLCanvasElement>(null);
	// const mazeSize = 15;
	// const { maze, exit, playerOnePoint, playerTwoPoint } = generateMaze(mazeSize);

	// console.log(maze);
	// console.log(exit);
	// console.log(playerOnePoint);
	// console.log(playerTwoPoint);

	useEffect(() => {
		const canvas = mazeRef.current;
		const context = canvas?.getContext("2d");

		if (data) {
			const { maze, p_one_location, p_two_location, exit, turn } = data;
			const mazeSize = maze.length;

			dispatch(setTurn(!!turn ? true : false));

			maze.forEach((row, y) =>
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
							addPointsToCanvas("P1", mazeSize, context, canvas, "green", x, y);
						}
						if (y === p_two_location.pointY && x === p_two_location.pointX) {
							addPointsToCanvas("P2", mazeSize, context, canvas, "green", x, y);
						}
					}
				}),
			);
		}
	}, [data, dispatch]);

	return (
		<MazeContainer>
			<canvas ref={mazeRef} width={343} height={343}></canvas>
		</MazeContainer>
	);
};
