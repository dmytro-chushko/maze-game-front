import { useEffect, useRef } from "react";
import { MazeContainer } from "./maze.styled";
import { generateMaze } from "utils/generate-maze";
import { addPointsToCanvas } from "utils/add-points-to-canvas";

export const Maze = () => {
	const mazeRef = useRef<HTMLCanvasElement>(null);
	const mazeSize = 15;
	const { maze, exit, playerOnePoint, playerTwoPoint } = generateMaze(mazeSize);

	console.log(maze);
	console.log(exit);
	console.log(playerOnePoint);
	console.log(playerTwoPoint);

	useEffect(() => {
		const canvas = mazeRef.current;
		const context = canvas?.getContext("2d");

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
					if (y === playerOnePoint.pointY && x === playerTwoPoint.pointX) {
						addPointsToCanvas("P1", mazeSize, context, canvas, "green", x, y);
					}
					if (y === playerTwoPoint.pointY && x === playerTwoPoint.pointX) {
						addPointsToCanvas("P2", mazeSize, context, canvas, "green", x, y);
					}
				}
			}),
		);
	}, [
		exit.exitX,
		exit.exitY,
		maze,
		playerOnePoint.pointY,
		playerTwoPoint.pointX,
		playerTwoPoint.pointY,
	]);

	return (
		<MazeContainer>
			<canvas ref={mazeRef} width={343} height={343}></canvas>
		</MazeContainer>
	);
};
