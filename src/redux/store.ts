import { configureStore } from "@reduxjs/toolkit";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

import { persistedReducer } from "./persist-config";
import { errorHandler } from "./middlewares/error-handler.middleware";
import { gameApi } from "./api/game.api";
import { chatMessages } from "./reducers/messages.reducer";

export const store = configureStore({
	reducer: {
		user: persistedReducer,
		messages: chatMessages.reducer,
		[gameApi.reducerPath]: gameApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		})
			.concat(gameApi.middleware)
			.concat(errorHandler),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
