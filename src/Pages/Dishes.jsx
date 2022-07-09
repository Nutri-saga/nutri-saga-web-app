import React, { lazy, Suspense, useEffect, useState } from "react";

import Box from "@mui/material/Box";

import { getDishes } from "../Context/ComponentActions";

const DishCard = lazy(() => import("../Components/DishCard"));

function Dishes() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data, err } = await getDishes();
    if (data) {
      setData(data);
    } else {
      return;
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap:"wrap"
        }}
      >
        {data.map((val, indx) => (
          <Box key={indx} sx={{margin:"10px"}}>
            <DishCard val={val}/>
          </Box>
        ))}
      </Box>
    </Suspense>
  );
}

export default Dishes;
