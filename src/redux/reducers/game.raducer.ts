import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { IGameData } from "types/game.types";
import { REDUCER_PATHES } from "utils/consts";

const initialState: IGameData = {
	turn: false,
};

export const gameData = createSlice({
	name: REDUCER_PATHES.GAME,
	initialState,
	reducers: {
		setTurn(state, action: PayloadAction<boolean>) {
			state.turn = action.payload;
		},
	},
});

export const { setTurn } = gameData.actions;
export const getTurn = (state: RootState) => state.game.turn;
