import React from "react";
import { Route, Routes } from "react-router-dom";
import AddDish from "../Pages/AddDish";
import Dishes from "../Pages/Dishes";
import Planner from "../Pages/Planner";
import ShoppingList from "../Pages/ShoppingList";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from '../Pages/Login';

function Approuter() {
  return (
    <Routes>
      <Route path="/dishes" element={<Dishes />} />
      <Route path="/planner" element={<Planner />} />
      <Route path="/shoppinglist" element={<ShoppingList />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/adddish" element={<AddDish />} />
      </Route>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default Approuter;
