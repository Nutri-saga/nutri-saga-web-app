import React, { useContext } from "react";

//react-router-dom
import { Navigate, Outlet } from "react-router-dom";

//Context
import { AuthContext } from "../Contexts/AuthContext";

//protected route function
function ProtectedRoutes() {
  const { user } = useContext(AuthContext);

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
