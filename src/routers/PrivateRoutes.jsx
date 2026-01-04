import React from "react";
import useAuth from "../hook/useAuth";
import GridLoader from "react-spinners/GridLoader";
import { Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <GridLoader color="#0B3F45" size={15} />
      </div>
    );
  }

  if (!user) {
    <Navigate to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRoutes;
