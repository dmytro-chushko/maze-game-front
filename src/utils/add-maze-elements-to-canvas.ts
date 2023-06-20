import { COLOR } from "styles";
import { MAZE_ELEMENT } from "./consts";

export const addMazeElementsToCanvas = (
	context: CanvasRenderingContext2D,
	cellSize: number,
	canvasX: number,
	canvasY: number,
	cell: boolean | MAZE_ELEMENT,
): void => {
	context.beginPath();
	context.rect(canvasX * cellSize, canvasY * cellSize, cellSize, cellSize);
	switch (cell) {
		case true:
			context.fillStyle = COLOR.BGC.PRIMARY;
			break;
		case false:
			context.fillStyle = COLOR.BGC.DARK;
			break;
		case MAZE_ELEMENT.WALL:
			context.fillStyle = COLOR.BGC.BLACK;
	}
	context.fill();
};
