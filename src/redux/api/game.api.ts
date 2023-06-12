import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/base-query";
import { ICreateGame, IGame, IJoinGame } from "types/game.types";
import { QUERY_URL, REDUCER_PATHES } from "utils/consts";

export const gameApi = createApi({
	reducerPath: REDUCER_PATHES.GAME,
	baseQuery: baseQuery(QUERY_URL.GAME),
	tagTypes: ["Games"],
	endpoints: builder => ({
		getAllPendingGames: builder.query<IGame[], void>({
			query: () => ({ url: "" }),
			providesTags: ["Games"],
		}),
		createGame: builder.mutation<IGame, ICreateGame>({
			query: body => ({
				url: "",
				method: "POST",
				body,
			}),
		}),
		joinGame: builder.mutation<IGame, IJoinGame>({
			query: ({ id, ...body }) => ({
				url: id,
				method: "PATCH",
				body,
			}),
		}),
		abortGame: builder.mutation<{ message: string }, string>({
			query: id => ({
				url: id,
				method: "DELETE",
			}),
		}),
	}),
});

export const {
	useGetAllPendingGamesQuery,
	useCreateGameMutation,
	useJoinGameMutation,
	useAbortGameMutation,
} = gameApi;
