import React, { lazy, Suspense, useEffect, useState } from "react";

import Box from "@mui/material/Box";

import { getDishes } from "../Context/ComponentActions";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

const UpdateDishCards = lazy(() => import("../Components/UpdateDishCards"));

const DivContainer = styled('div')(()=>({
    height:"74vh",
    overflowY:"scroll",
    '&::-webkit-scrollbar': {
        width: '0.4em'
      },
      '&::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#1faa00',
        borderRadius:"5px"
      }
}))

function Dishes() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const getData = async () => {
    const { data, err } = await getDishes();
    if (data) {
      setData(data);
    } else {
      return;
    }
  };
  useEffect(() => {
    document.title= "Update Dish"
    getData();
  }, []);

  useEffect(() => {
    setSearchData(
      data.filter((dish) =>
        dish.name
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase())
      )
    );
  }, [search]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
           <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#1faa00",
            fontWeight: "600",
            padding: "0px 10px 0px 10px",
            letterSpacing: "0.05em",
          }}
        >
          Update/Delete Dish
        </Typography>
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name..."
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon sx={{ color: "#1faa00" }} />
                </IconButton>
              </InputAdornment>
            ),
            style: {
              height: "40px",
              width: "300px",
              borderRadius: "20px",
              marginRight: "10px",
              color: "#1faa00",
              boxShadow: "#1faa00 3px 3px 8px ",
              color:"#1faa00",
              fontWeight:"600"
            },
          }}
        />
      </div>
      <hr style={{boxShadow:"#1faa00 1px 1px 5px", borderColor:"#1faa00"}}/>
      <DivContainer >
        {data ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            {searchData!=""
              ? searchData.map((val, indx) => (
                  <Box key={indx} sx={{ margin: "10px" }}>
                    <UpdateDishCards val={val} />
                  </Box>
                ))
              : data.map((val, indx) => (
                  <Box key={indx} sx={{ margin: "10px" }}>
                    <UpdateDishCards val={val} />
                  </Box>
                ))}
          </Box>
        ) : (
          <div>Loading...</div>
        )}
      </DivContainer>
    </Suspense>
  );
}

export default Dishes;
