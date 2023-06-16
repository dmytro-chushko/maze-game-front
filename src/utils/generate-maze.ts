type maze = boolean[][];
type directions = number[][];
interface IEraiser {
	x: number;
	y: number;
}
interface IExit {
	exitX: number;
	exitY: number;
}
interface IMaze {
	maze: maze;
	exit: IExit;
}

export function generateMaze(size: number): IMaze {
	const maze: maze = [];
	const eraiser: IEraiser = { x: 0, y: 0 };

	for (let y = 0; y < size; y++) {
		const row = [];

		for (let x = 0; x < size; x++) {
			row.push(false);
		}

		maze.push(row);
	}

	while (!isMazeFinished(maze)) {
		moveEraiser(eraiser, maze);
	}

	const exit = generateExit(size);

	return { maze, exit };
}

function moveEraiser(eraiser: IEraiser, maze: maze) {
	maze[eraiser.y][eraiser.x] = true;
	const directions = [];

	if (eraiser.x > 0) {
		directions.push([-2, 0]);
	}

	if (eraiser.x < maze.length - 1) {
		directions.push([2, 0]);
	}

	if (eraiser.y > 0) {
		directions.push([0, -2]);
	}

	if (eraiser.y < maze.length - 1) {
		directions.push([0, 2]);
	}

	const [dx, dy] = getRandomItem(directions);

	eraiser.x += dx;
	eraiser.y += dy;

	if (!maze[eraiser.y][eraiser.x]) {
		maze[eraiser.y][eraiser.x] = true;
		maze[eraiser.y - dy / 2][eraiser.x - dx / 2] = true;
	}
}

function getRandomItem(array: directions) {
	const index = Math.floor(Math.random() * array.length);
	return array[index];
}

function isMazeFinished(maze: maze) {
	for (let y = 0; y < maze.length; y += 2) {
		for (let x = 0; x < maze[y].length; x += 2) {
			if (!maze[y][x]) {
				return false;
			}
		}
	}

	return true;
}

function generateExit(size: number): IExit {
	const exitSide = Math.floor(Math.random() * 4);
	let exitX: number, exitY: number;

	switch (exitSide) {
		case 0: // верх
			exitX = 0;
			exitY = Math.floor(Math.random() * size) * 2;
			break;
		case 1: // право
			exitX = Math.floor(Math.random() * size) * 2;
			exitY = size - 1;
			break;
		case 2: // низ
			exitX = size - 1;
			exitY = Math.floor(Math.random() * size) * 2;
			break;
		case 3: // ліво
			exitX = Math.floor(Math.random() * size) * 2;
			exitY = 0;
			break;
		default:
			exitX = 0;
			exitY = 0;
	}

	return { exitX, exitY };
}
