import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "./store";
import { getUserName } from "./reducers/user-name.reducer";

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useGetUserName = (): string => {
	return useAppSelector(getUserName);
};
