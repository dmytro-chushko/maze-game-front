import { Navigate, Outlet } from "react-router-dom";
import { useGetUserName } from "redux/hooks";
import { ROUTES } from "utils/consts";

export const PublicRoute = () => {
  return !useGetUserName() ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.DASHBOARD} replace />
  );
};

export const PrivateRoute = () => {
  return useGetUserName() ? <Outlet /> : <Navigate to={ROUTES.INTRO} replace />;
};
