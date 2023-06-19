import { GAME_STATUS } from "utils/consts";
import { IExit, IPoint, maze } from "./maze.types";

export interface IGame {
	_id: string;
	player_one: string;
	player_two: string;
	status: GAME_STATUS;
	turn: number;
	winner: string;
	maze: maze;
	p_one_game_flow_maze: maze;
	p_two_game_flow_maze: maze;
	p_one_location: IPoint;
	p_two_location: IPoint;
	exit: IExit;
	createdAt: string;
}

export interface ICreateGame {
	player_one: string;
}

export interface IJoinGame {
	id: string;
	player_two: string;
}

export interface IGameData {
	turn: boolean;
}

export interface IGiveUpMessage {
	user: string;
	message: string;
}

export interface IMoveMessage {
	message: string;
}
