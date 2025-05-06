import React, { useContext } from "react";
import AuthContext from "../context/authContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-ring loading-xl"></span>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/signIn" state={location?.pathname}></Navigate>;
};

export default PrivateRouter;
