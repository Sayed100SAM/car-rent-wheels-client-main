import React from "react";
import { useContextHook } from "../Hooks/useContextHook";
import { Navigate, useLocation } from "react-router";
import LoadingComponent from "../Components/LoadingSpinner/LoadingComponent";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContextHook();
  const location = useLocation();

  if (loading) {
    return <LoadingComponent></LoadingComponent>;
  }

  if (user) {
    return children;
  } else {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }
};

export default PrivateRoute;
