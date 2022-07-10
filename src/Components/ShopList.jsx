import React, { useEffect, useState, useContext } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Checkbox } from "@mui/material";

import { DishContext } from "../Context/DishContext";

export default React.memo(function ShopList({ val }) {
  const { setShop, getShop, removeShop } = useContext(DishContext);
  const [changed, setChange] = useState(false);
  useEffect(() => {
    const ans = getShop();
    if (ans)
      for (let i = 0; i < ans.length; i++) {
        if (ans[i] == val._id) {
          setChange(true);
        }
      }
  }, []);
  const handleChange = (e) => {
    console.log("yes");
    if (e.target.checked) {
      setShop(val);
    } else {
      removeShop(val);
    }
    setChange((prev) => !prev);
  };
  return (
    <Card
      sx={{
        margin: "10px",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img width="40" height="40" src={val.image_url["url"]} />
        {changed ? (
          <Typography
            sx={{ marginLeft: "20px", textDecoration: "line-through" }}
          >
            {val.name}&nbsp;&nbsp;<span>( {val.servings} )</span>
          </Typography>
        ) : (
          <Typography sx={{ marginLeft: "20px" }}>{val.name}&nbsp;&nbsp;<span>( {val.servings} )</span></Typography>
        )}
      </div>
      <div>
        <Checkbox checked={changed} onChange={handleChange} />
      </div>
    </Card>
  );
});
