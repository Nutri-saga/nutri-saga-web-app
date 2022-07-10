import React, { useContext } from "react";
import DishCard from "../Components/DishCard";

import { Box } from "@mui/material";

import { DishContext } from "../Context/DishContext";
import PlannerCard from "../Components/PlannerCard";

import styled from "@emotion/styled";

const DivContainer = styled('div')(()=>({
  height:"84vh",
  overflowY:"scroll",
  '&::-webkit-scrollbar': {
      width: '0.4em'
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'green',
      borderRadius:"5px"
    }
}))

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
      <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between",  flexDirection:"column"}}>
        <PlannerCard title="Energy" value={energy} color="#ff9800"/>
        <PlannerCard title="Fats"  value={fats} color="#c51162"/>
        <PlannerCard title="Protein" value={protein} color="#673ab7"/>
        <PlannerCard title="Calories" value={calories} color="#2196f3"/>

      </div>
      <DivContainer>
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
      </DivContainer>
    </div>
  );
}

export default React.memo(Planner);
