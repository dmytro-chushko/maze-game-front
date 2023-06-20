import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PrivateRoute, PublicRoute } from "./protected-routes";
import { Dashboard } from "pages/dashboard";
import { Intro } from "pages/intro";
import { Game } from "pages/game";
import { ROUTES } from "utils/consts";
import { PageNotFound } from "pages/not-found";

export const MainRouter = () => (
	<BrowserRouter>
		<Routes>
			<Route element={<PublicRoute />}>
				<Route path={ROUTES.INTRO} element={<Intro />} />
			</Route>
			<Route element={<PrivateRoute />}>
				<Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
				<Route path={ROUTES.GAME_ID} element={<Game />} />
			</Route>
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	</BrowserRouter>
);
