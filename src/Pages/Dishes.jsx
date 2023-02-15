import React, { lazy, Suspense, useEffect, useState } from "react";

//api's
import { getDishes } from "../api/ComponentActions";

//mui
import Box from "@mui/material/Box";

//Component's
const DishCard = lazy(() => import("../Components/DishCard"));

//main component
function Dishes() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await getDishes();
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
        className="container"
        sx={{
          display: "flex",
          gap: "1rem",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          widt: "100%",
        }}
      >
        {data.map((val, indx) => (
          <DishCard val={val} />
        ))}
      </Box>
    </Suspense>
  );
}

export default Dishes;
