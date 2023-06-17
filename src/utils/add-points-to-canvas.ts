export const addPointsToCanvas = (
	pointSymbol: string,
	size: number,
	context: CanvasRenderingContext2D,
	canvas: HTMLCanvasElement,
	color: string,
	indexX: number,
	indexY: number,
): void => {
	context.fillStyle = color;
	context.font = "12px serif";
	context.textAlign = "center";
	context.textBaseline = "middle";
	context.fillText(
		pointSymbol,
		(indexX * canvas.width) / size + (canvas.width / size) * 0.5,
		(indexY * canvas.height) / size + (canvas.width / size) * 0.5,
	);
};
