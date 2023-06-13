import { IGame } from "types/game.types";

export const excludeOwnGame = (arr: IGame[], name: string): IGame[] =>
	arr.filter(game => game.player_one !== name);
