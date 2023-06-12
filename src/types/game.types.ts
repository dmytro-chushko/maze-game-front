import { GAME_STATUS } from "utils/consts";

export interface IGame {
	_id: string;
	player_one: string;
	player_two: string;
	status: GAME_STATUS;
	turn: string;
	winner: string;
	maze: string;
	p_one_location: string;
	p_two_location: string;
	createdAt: string;
}

export interface ICreateGame {
	player_one: string;
}

export interface IJoinGame {
	id: string;
	player_two: string;
}
