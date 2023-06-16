type maze = boolean[][];
type directions = number[][];
interface IEraiser {
	x: number;
	y: number;
}

export function generateMaze(size: number) {
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

	return maze;
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
