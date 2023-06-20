import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { userName } from "./reducers/user-name.reducer";

const userPersistConfig = {
	key: "user",
	storage,
	whitelist: ["name"],
};

export const persistedReducer = persistReducer(userPersistConfig, userName.reducer);
