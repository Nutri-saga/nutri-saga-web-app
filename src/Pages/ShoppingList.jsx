import React, { useContext, useEffect } from "react";
import ShopList from "../Components/ShopList";
import { Card } from "@mui/material";

import { DishContext } from "../Context/DishContext";
import ShopBag from "../assets/cart.png";

import Typography from "@mui/material/Typography";

import styled from "@emotion/styled";

const DivContainer = styled('div')(()=>({
  height:"60vh",
  overflowY:"scroll",
  '&::-webkit-scrollbar': {
      width: '0.4em'
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#1976D2',
      borderRadius:"5px"
    }
}))

export default function ShoppingList() {
  const { dishes } = useContext(DishContext);
  useEffect(()=>{
    document.title=`Shopping Bag (${dishes?.length || 'Nothing to shop'})`
  },[])
  return (
    <div>
      <Card
        sx={{ width: "80%", margin: "auto", boxShadow: "gray 2px 5px 15px" }}
      >
        <div style={{ width: "fit-content", margin: "auto" }}>
          <img style={{ width: "100px" }} src={ShopBag} />
          <Typography
            sx={{ letterSpacing: "0.02em", fontWeight: "600" }}
            color="primary"
            align="center"
          >
            Shopping Bag
          </Typography>
        </div>
        <hr />
        <DivContainer>
          {dishes?.length > 0 ? (
            <div>
            {dishes?.map((val, indx) => (
              <ShopList key={indx} val={val} />
            ))}
          </div>
          ) : (
            <div
            style={{
              width: "fit-content",
              margin: "auto",
              fontSize: "20px",
              fontWeight: "600",
              marginTop: "40px",
            }}
          >
            Nothing to shop ☹️
          </div>
          )}
        </DivContainer>
      </Card>
    </div>
  );
}
