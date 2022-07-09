import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Stepper from '../Components/Stepper';
import AddDish from '../Pages/AddDish';
import Dishes from '../Pages/Dishes';
import Planner from '../Pages/Planner';

function Approuter() {
  return (
    <Routes>
        <Route path="/dishes" element={<Dishes/>} />
        <Route path="/shoppinglist" element={<Stepper/>} />
        <Route path="/adddish" element={<AddDish/>} />
        <Route path="/planner" element={<Planner/>}/>
    </Routes>
  )
}

export default Approuter