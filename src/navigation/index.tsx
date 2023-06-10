import { Dashboard } from "pages/dashboard";
import { Intro } from "pages/intro";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./protected-routes";
import { ROUTES } from "utils/consts";

export const MainRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path={ROUTES.INTRO} element={<Intro />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
