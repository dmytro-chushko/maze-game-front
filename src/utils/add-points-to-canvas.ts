export const addPointsToCanvas = (
	pointSymbol: string | "point",
	size: number,
	context: CanvasRenderingContext2D,
	canvas: HTMLCanvasElement,
	color: string,
	indexX: number,
	indexY: number,
): void => {
	const cellSize = canvas.width / size;
	context.fillStyle = color;
	context.font = "12px serif";
	context.textAlign = "center";
	context.textBaseline = "middle";
	if (pointSymbol === "point") {
		context.beginPath();
		context.arc(
			indexX * cellSize + cellSize * 0.5,
			indexY * cellSize + cellSize * 0.5,
			cellSize * 0.25,
			0,
			Math.PI * 2,
		);
		context.fillStyle = "red";
		context.fill();
		context.closePath();
	} else {
		context.fillText(
			pointSymbol,
			(indexX * canvas.width) / size + (canvas.width / size) * 0.5,
			(indexY * canvas.height) / size + (canvas.width / size) * 0.5,
		);
	}
};
