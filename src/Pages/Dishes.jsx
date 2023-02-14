import React, { lazy, Suspense, useEffect, useState } from "react";

//api's
import { getDishes } from "../api/ComponentActions";

//mui
import Box from "@mui/material/Box";
import { CircularProgress, OutlinedInput, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";

//Component's
const DishCard = lazy(() => import("../Components/DishCard"));

//styling
const DivContainer = styled("div")(() => ({
  height: "74vh",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "0.4em",
  },
  "&::-webkit-scrollbar-track": {
    "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#1faa00",
    borderRadius: "5px",
  },
}));

const SearchBox = styled(Box)(() => ({
  "& .MuiOutlinedInput-root": {
    width: "200px",
    fontSize: "12px",
    background: "#FFFFFF",
    borderRadius: "4px",
    height: "1.8rem",
    color: "#222222",
    margin: 0,
    padding: "1rem",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "2px solid #1faa00",
  },
}));

//main component
function Dishes() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  const getData = async () => {
    const { data } = await getDishes();
    if (data) {
      setData(data);
    } else {
      return;
    }
  };
  useEffect(() => {
    document.title = "Dish Book";
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
  }, [search, data]);
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
            fontSize: "18px",
          }}
        >
          Dish List
        </Typography>
        <SearchBox>
          <OutlinedInput
            placeholder="Search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon fontSize="small" className="search-icon" />
              </InputAdornment>
            }
          />
        </SearchBox>
      </div>
      <hr style={{ opacity: "0.1", background: "gray" }} />
      <DivContainer>
        {data.length > 0 ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            {searchData !== ""
              ? searchData.map((val, indx) => (
                  <Box key={indx} sx={{ margin: "10px" }}>
                    <DishCard val={val} />
                  </Box>
                ))
              : data.map((val, indx) => (
                  <Box key={indx} sx={{ margin: "10px" }}>
                    <DishCard val={val} />
                  </Box>
                ))}
          </Box>
        ) : (
          <div
            style={{ width: "fit-content", margin: "auto", marginTop: "10px" }}
          >
            <CircularProgress sx={{ color: "green" }} />
          </div>
        )}
      </DivContainer>
    </Suspense>
  );
}

export default Dishes;
