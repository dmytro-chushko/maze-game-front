export type maze = (boolean | "W")[][];

export interface IExit {
	exitX: number;
	exitY: number;
}

export interface IPoint {
	pointX: number;
	pointY: number;
}

export interface IMaze {
	maze: maze;
	exit: IExit;
	playerOnePoint: IPoint;
	playerTwoPoint: IPoint;
}
