import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutesLogged = () => {
  const token = JSON.parse(localStorage.getItem("@token"));
  return !token ? <Outlet /> : <Navigate to="/" />;
};
