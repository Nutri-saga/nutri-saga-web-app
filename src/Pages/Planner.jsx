import React, { useContext } from "react";
import DishCard from "../Components/DishCard";

import { Box } from "@mui/material";

import { DishContext } from "../Context/DishContext";
import PlannerCard from "../Components/PlannerCard";
function Planner() {
  const { setDish, dishes } = useContext(DishContext);
  let protein = 0;
  let energy =0 ;
  let fats = 0;
  let calories = 0;

  for(let i=0; i<dishes.length; i++){
    protein += parseFloat(dishes[i].protein);
    energy += parseFloat(dishes[i].energy);
    fats += parseFloat(dishes[i].fats);
    calories += parseFloat(dishes[i].calories);
  }
  console.log(protein)
  return (
    <div style={{display:"flex"}}>
      <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly", marginBottom:"10px", flexDirection:"column"}}>
        <PlannerCard title="Energy" value={energy} color="#ff9800"/>
        <PlannerCard title="Fats"  value={fats} color="#c51162"/>
        <PlannerCard title="Protein" value={protein} color="#673ab7"/>
        <PlannerCard title="Calories" value={calories} color="#2196f3"/>

      </div>
      <div style={{height:"84vh", overflowY:"scroll", minWidth:"66.3vw"}}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {dishes.map((val, indx) => (
            <div key={indx} style={{ margin: "10px" }}>
              <DishCard val={val} />
            </div>
          ))}
        </Box>
      </div>
    </div>
  );
}

export default React.memo(Planner);
