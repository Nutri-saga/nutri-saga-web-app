import React from "react";
import { Route, Routes } from "react-router-dom";
import AddDish from "../Pages/AddDish";
import Dishes from "../Pages/Dishes";
import Planner from "../Pages/Planner";
import ShoppingList from "../Pages/ShoppingList";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from '../Pages/Login';
import UpdateDish from "../Pages/UpdateDish";
import AdminDashboard from "../Pages/AdminDashboard";
import UpdateDishByID from "../Pages/UpdateDishByID";
import Profile from '../Components/Profile';

function Approuter() {
  return (
    <Routes>
      <Route path="/dishes" element={<Dishes />} />
      <Route path="/planner" element={<Planner />} />
      <Route path="/shoppinglist" element={<ShoppingList />} />
      <Route path="/login" element={<Login/>}/>

      <Route element={<ProtectedRoutes />}>
      <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/adddish" element={<AddDish />} />
        <Route path="/updatedish" element={<UpdateDish />} />
        <Route path="/updatedish/:id" element={<UpdateDishByID/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Route>
      
    </Routes>
  );
}

export default Approuter;
