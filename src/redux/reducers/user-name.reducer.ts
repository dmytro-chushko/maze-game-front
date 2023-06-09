import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { IUserName } from "types/intro.types";

const initialState: IUserName = {
  name: "",
};

export const userName = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName(state, action: PayloadAction<IUserName>) {
      state.name = action.payload.name;
    },
    unsetUserName: (state) => {
      state.name = "";
    },
  },
});

export const { setUserName, unsetUserName } = userName.actions;
export const getToken = (state: RootState) => state.user.name;
