import React, { useContext, useEffect, useState } from "react";
import DishCard from "../Components/DishCard";

import { Box, Card, Typography } from "@mui/material";

import { DishContext } from "../Context/DishContext";
import PlannerCard from "../Components/PlannerCard";
import CloseIcon from "@mui/icons-material/Close";

import styled from "@emotion/styled";

const DivContainer = styled("div")(() => ({
  height: "84vh",
  width: "80%",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "0.4em",
  },
  "&::-webkit-scrollbar-track": {
    "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "green",
    borderRadius: "5px",
  },
}));

function Planner() {
  const { setDish, dishes } = useContext(DishContext);
  const [data, setData] = useState();
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.title = `Weekly Planner (${dishes?.length})`;
    if (localStorage.getItem("calculator")) {
      setData(JSON.parse(localStorage.getItem("calculator")));
    }
  }, []);
  let protein = 0;
  let energy = 0;
  let fats = 0;
  let calories = 0;

  for (let i = 0; i < dishes?.length; i++) {
    protein += parseFloat(dishes[i].protein);
    energy += parseFloat(dishes[i].energy);
    fats += parseFloat(dishes[i].fats);
    calories += parseFloat(dishes[i].calories);
  }
  console.log(protein);
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          flexDirection: "column",
          width: "20%",
        }}
      >
        <PlannerCard title="Energy" value={energy} color="#ff9800" />
        <PlannerCard title="Fats" value={fats} color="#c51162" />
        <PlannerCard title="Protein" value={protein} color="#673ab7" />
        <PlannerCard title="Calories" value={calories} color="#2196f3" />
      </div>
      <DivContainer>
        {data && show ? (
          <Card
            variant="outlined"
            sx={{
              background: "#ff3d00",
              width: "fit-content",
              margin: "auto",
              padding: "10px",
            }}
          >
            <div style={{width:"fit-content", marginLeft:"auto"}}>
              <CloseIcon
                onClick={() => setShow((prev) => !prev)}
                sx={{ position: "relative", color: "white", cursor: "pointer" }}
              />
            </div>
            <Typography
              align="center"
              sx={{
                color: "white",
                marginBottom: "3px",
                letterSpacing: "0.05em",
              }}
            >
              Weekly Nurition Need
            </Typography>
            <Typography
              sx={{ color: "white" }}
            >{`Energy : ${data.Energy}g | Protein: ${data.Protein}g | Fats: ${data.Fats}g | Calories: ${data.Calories}g`}</Typography>
          </Card>
        ) : (
          ""
        )}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent:"space-around",
            width: "100%",
            padding: "20px",
            float:"left"
          }}
        >
          {dishes?.map((val, indx) => (
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
