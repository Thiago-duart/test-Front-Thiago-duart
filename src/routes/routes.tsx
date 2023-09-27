import { Route, Routes } from "react-router-dom";
import { DashBoard } from "../pages/HomePage/DashBoard";
import { PrivateRoutesLogged } from "./PrivateRoutesLogged";
import { PrivateRoutesCommon } from "./privateRoutesCommon";
import { LoginPage } from "../pages/LoginPage/Login-page";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutesLogged />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route element={<PrivateRoutesCommon />}>
        <Route path="/" element={<DashBoard />} />
      </Route>
    </Routes>
  );
};
