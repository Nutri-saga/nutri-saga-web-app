import React, { Suspense } from "react";

//react-router-dom
import { Route, Routes } from "react-router-dom";

const ViewLayout = React.lazy(() => import("./Loyout/index"));

//importing components as lazy loading
const Login = React.lazy(() => import("./Pages/user/login"));
const Dashboard = React.lazy(() => import("./Pages/user/dashboard"));
const ErrorView = React.lazy(() => "./Pages/error/index");
const Home = React.lazy(() => import("./Pages/home"));

function Approuter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="app" element={<ViewLayout />}>
          <Route path="user/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/user/login" element={<Login />} />
        <Route path="/*" element={<ErrorView />} />
      </Routes>
    </Suspense>
  );
}

export default Approuter;
