import { useMemo } from "react";
import { useAppSelector } from "redux/hooks";
import { getUserName } from "redux/reducers/user-name.reducer";
import { IGame } from "types/game.types";

export const useExcludeOwnGame = (arr: IGame[]): IGame[] => {
	const name = useAppSelector(getUserName);

	return useMemo(() => arr.filter(game => game.player_one !== name), [arr, name]);
};
