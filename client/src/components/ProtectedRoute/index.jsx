import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { tokenSelector } from "../../redux/feature/auth/authSlice";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const token = useSelector(tokenSelector);
  if (!token) {
    return <Navigate to="/login" replace />;
  } else {
    return <Fragment>{children}</Fragment>;
  }
};

export default ProtectedRoute;
