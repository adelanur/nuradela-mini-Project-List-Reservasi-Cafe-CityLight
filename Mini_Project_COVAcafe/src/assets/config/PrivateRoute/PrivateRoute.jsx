import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLogin = useSelector((state) => state.Users.isLogin);
  if (isLogin == false) {
    return <Navigate to={"/login"} replace />;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
