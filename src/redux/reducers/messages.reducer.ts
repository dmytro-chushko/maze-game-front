import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "redux/store";
import { IMessage } from "types/chat.types";
import { REDUCER_PATHES } from "utils/consts";

const initialState: IMessage[] | [] = [];

export const chatMessages = createSlice({
	name: REDUCER_PATHES.MESSAGES,
	initialState,
	reducers: {
		addNewMessage(state, action: PayloadAction<IMessage>) {
			return [...state, action.payload];
		},
		removeAllMessages() {
			return [];
		},
	},
});

export const { addNewMessage, removeAllMessages } = chatMessages.actions;
export const getMessages = (state: RootState) => state.messages;
