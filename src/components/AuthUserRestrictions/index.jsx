import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthUserRestrictions = () => {
  const authUser = localStorage.getItem("user");
  const authUserData = authUser ? JSON.parse(authUser) : null;

  return authUserData && authUserData.access_token ? (
    <Navigate to="/" />
  ) : (
    <Outlet />
  );
};

export default AuthUserRestrictions;
