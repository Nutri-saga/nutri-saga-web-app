import React, { Suspense } from "react";

//react-router-dom
import { Route, Routes } from "react-router-dom";

const ViewLayout = React.lazy(() => import("./Loyout/Layout"));

//importing components as lazy loading
const AddDish = React.lazy(() => import("./Pages/AddDish"));
const Dishes = React.lazy(() => import("./Pages/Dishes"));
const Planner = React.lazy(() => import("./Pages/Planner"));
const ShoppingList = React.lazy(() => import("./Pages/ShoppingList"));
const Login = React.lazy(() => import("./Pages/Login"));
const UpdateDish = React.lazy(() => import("./Pages/UpdateDish"));
const AdminDashboard = React.lazy(() => import("./Pages/AdminDashboard"));
const UpdateDishByID = React.lazy(() => import("./Pages/UpdateDishByID"));
const Profile = React.lazy(() => import("./Components/Profile"));
const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));
const Calculator = React.lazy(() => import("./Pages/Calculator"));

function Approuter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="app" element={<ViewLayout />}>
          <Route path="dishes" element={<Dishes />} />
          <Route path="planner" element={<Planner />} />
          <Route path="shoppinglist" element={<ShoppingList />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="adddish" element={<AddDish />} />
          <Route path="updatedish" element={<UpdateDish />} />
          <Route path="updatedish/:id" element={<UpdateDishByID />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default Approuter;
