import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const authUser = localStorage.getItem("user");
  const authUserData = authUser ? JSON.parse(authUser) : null;

  return authUserData && authUserData.access_token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;
