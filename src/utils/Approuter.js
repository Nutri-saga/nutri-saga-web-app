import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddDish from '../Pages/AddDish';
import Dishes from '../Pages/Dishes';
import Planner from '../Pages/Planner';
import ShoppingList from '../Pages/ShoppingList';

function Approuter() {
  return (
    <Routes>
        <Route path="/dishes" element={<Dishes/>} />
        <Route path="/adddish" element={<AddDish/>} />
        <Route path="/planner" element={<Planner/>}/>
        <Route path="/shoppinglist" element={<ShoppingList/>}/>
    </Routes>
  )
}

export default Approuter