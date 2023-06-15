import { useRef } from "react";
import { MazeContainer } from "./maze.styled";
import { generateMaze } from "utils/generate-maze";

export const Maze = () => {
	const mazeRef = useRef<HTMLCanvasElement>(null);
	const maze = generateMaze(9);
	const canvas = mazeRef.current;
	const context = canvas?.getContext("2d");

	console.log(maze);

	maze.forEach((row, y) =>
		row.forEach((cell, x) => {
			const color = cell ? "white" : "#6B7280";
			if (context) {
				context.beginPath();
				context.rect(x * 80, y * 80, 80, 80);
				context.fillStyle = color;
				context.fill();
			}
		}),
	);

	return (
		<MazeContainer>
			<canvas ref={mazeRef} width={240} height={240}></canvas>
		</MazeContainer>
	);
};
