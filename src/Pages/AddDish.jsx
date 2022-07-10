import React, {useEffect} from "react";
import AddDishCard from "../Components/AddDishCard";

function AddDish() {
  useEffect(()=>{
    document.title = "Add Dish";
  },[])
  return (
    <div>
      <AddDishCard />
    </div>
  );
}

export default AddDish;
