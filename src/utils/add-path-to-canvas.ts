import { maze } from "types/maze.types";
import { MAZE_ELEMENT } from "./consts";

export const addPathToCanvas = (
	arr: maze,
	cellSize: number,
	context: CanvasRenderingContext2D,
	color: string,
	canvasX: number,
	canvasY: number,
): void => {
	context?.setLineDash([2, 2]);

	if (arr[canvasY][canvasX] && arr[canvasY][canvasX] !== MAZE_ELEMENT.WALL) {
		if (
			canvasY < arr.length - 1 &&
			arr[canvasY + 1][canvasX] &&
			arr[canvasY + 1][canvasX] !== MAZE_ELEMENT.WALL
		) {
			context.beginPath();
			context.strokeStyle = color;
			context.moveTo(cellSize * (canvasX + 0.5), cellSize * (canvasY + 0.5));
			context.lineTo(cellSize * (canvasX + 0.5), cellSize * (canvasY + 1.5));
			context.stroke();
		}
		if (
			canvasY > 0 &&
			arr[canvasY - 1][canvasX] &&
			arr[canvasY - 1][canvasX] !== MAZE_ELEMENT.WALL
		) {
			context.beginPath();
			context.strokeStyle = color;
			context.moveTo(cellSize * (canvasX + 0.5), cellSize * (canvasY + 0.5));
			context.lineTo(cellSize * (canvasX + 0.5), cellSize * (canvasY - 0.5));
			context.stroke();
		}
		if (
			canvasX < arr.length - 1 &&
			arr[canvasY][canvasX + 1] &&
			arr[canvasY][canvasX + 1] !== MAZE_ELEMENT.WALL
		) {
			context.beginPath();
			context.strokeStyle = color;
			context.moveTo(cellSize * (canvasX + 0.5), cellSize * (canvasY + 0.5));
			context.lineTo(cellSize * (canvasX + 1.5), cellSize * (canvasY + 0.5));
			context.stroke();
		}
		if (
			canvasX > 0 &&
			arr[canvasY][canvasX - 1] &&
			arr[canvasY][canvasX - 1] !== MAZE_ELEMENT.WALL
		) {
			context.beginPath();
			context.strokeStyle = color;
			context.moveTo(cellSize * (canvasX + 0.5), cellSize * (canvasY + 0.5));
			context.lineTo(cellSize * (canvasX - 0.5), cellSize * (canvasY + 0.5));
			context.stroke();
		}
	}
};
