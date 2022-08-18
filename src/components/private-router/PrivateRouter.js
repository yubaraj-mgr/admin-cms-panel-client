import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { user } = useSelector((state) => state.admin);
  return user._id ? (
    children
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default PrivateRouter;
