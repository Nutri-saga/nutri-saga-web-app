import React, { useEffect } from "react";

//componet's
import AddDishCard from "../Components/AddDishCard";

//main component
function AddDish() {
  useEffect(() => {
    document.title = "Add Dish";
  }, []);

  return (
    <div>
      <AddDishCard />
    </div>
  );
}

export default AddDish;
