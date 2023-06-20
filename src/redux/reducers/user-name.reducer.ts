import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "redux/store";
import { IUserName } from "types/intro.types";
import { REDUCER_PATHES } from "utils/consts";

const initialState: IUserName = {
	name: "",
};

export const userName = createSlice({
	name: REDUCER_PATHES.USER,
	initialState,
	reducers: {
		setUserName(state, action: PayloadAction<IUserName>) {
			state.name = action.payload.name;
		},
		unsetUserName: state => {
			state.name = "";
		},
	},
});

export const { setUserName, unsetUserName } = userName.actions;
export const getUserName = (state: RootState) => state.user.name;
