import React, { Suspense } from "react";

//react-router-dom
import { Route, Routes } from "react-router-dom";

const ViewLayout = React.lazy(() => import("./Loyout/Layout"));

//importing components as lazy loading
const Login = React.lazy(() => import("./Pages/Login"));

const Home = React.lazy(() => import("./Pages/Home"));

function Approuter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="app" element={<ViewLayout />}></Route>
        <Route path="/user/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default Approuter;
