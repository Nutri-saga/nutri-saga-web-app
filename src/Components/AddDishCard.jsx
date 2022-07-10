import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActionArea, CircularProgress, TextField, Typography } from "@mui/material";
import { addDish, getDishes } from "../Context/ComponentActions";
import { Box } from "@mui/system";
import Alert from "@mui/material/Alert";
import styled from "@emotion/styled";
import DishList from "./DishList";

const StyleDiv = styled("div")(() => ({
  height: "75vh",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "0.4em",
  },
  "&::-webkit-scrollbar-track": {
    "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(0,0,0,.1)",
    borderRadius: "5px",
  },
}));

const DishLists = React.memo(function DishLists({ data }) {
  return (
    <Card
      sx={{
        width: "35vw",
        margin: "20px",
        marginTop: "0px",
      }}
    >
      <Typography
        align="center"
        sx={{
          padding: "10px",
          background: "gray",
          color: "white",
          letterSpacing: "0.05em",
          fontWeight: "500",
        }}
      >
        Dish List
      </Typography>
     { data ? <StyleDiv>
        {data.map((val, indx) => (
          <DishList val={val} key={indx} />
        ))}
      </StyleDiv> : <CircularProgress/>}
    </Card>
  );
});

export default function AddDishCard() {
  const [state, setState] = useState({
    name: "",
    servings: "",
    energy: "",
    protein: "",
    fats: "",
    calories: "",
  });
  const [preview, setPreview] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const onChange = (e) => {
    console.log(e);

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreview(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, servings, energy, protein, fats, calories } = state;
    const modalData = {
      name,
      servings,
      energy,
      protein,
      fats,
      calories,
      url: preview,
    };
    const { success, err } = await addDish(modalData);
    if (success) {
      setSuccess("Successfully added...");
      setTimeout(() => {
        setState({
          name: "",
          servings: "",
          energy: "",
          protein: "",
          fats: "",
          calories: "",
        });
        setPreview("");
        setSuccess("");
        setLoading(false);
      }, 2000);
    } else if (err) {
      setError(err);
      setTimeout(() => {
        setError("");
        setLoading(false);
      }, 2000);
    }
  };

  const getData = async () => {
    const { data, err } = await getDishes();
    if (data) {
      setData(data);
      console.log(data);
    } else {
      return;
    }
  };
  useEffect(() => {
    getData();
  }, [loading]);

  return (
    <div style={{ display: "flex" }}>
      <Card
        sx={{
          width: "35vw",
          margin: "20px",
          marginTop: "0px",
          boxShadow: "gray 2px 4px 15px",
        }}
      >
        <Box sx={{ background: "#1faa00", padding: "10px" }}>
          <Typography
            color="white"
            sx={{
              letterSpacing: "0.05em",
              fontWeight: "500",
            }}
            align="center"
          >
            Add Dish
          </Typography>
        </Box>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}

        <CardActionArea>
          <CardContent sx={{ padding: "20px" }}>
            <form onSubmit={handleSubmit}>
              <TextField
                value={state.name}
                onChange={(e) => setState({ ...state, name: e.target.value })}
                label="Dish Name"
                fullWidth
                required
                sx={{ marginBottom: "10px" }}
                inputProps={{ style: { height: "12px" } }}
              />
              <TextField
                value={state.servings}
                onChange={(e) =>
                  setState({ ...state, servings: e.target.value })
                }
                label="Servings"
                fullWidth
                required
                sx={{ marginBottom: "10px" }}
                inputProps={{ style: { height: "12px" } }}
              />
              <TextField
                value={state.energy}
                onChange={(e) => setState({ ...state, energy: e.target.value })}
                label="Energy"
                fullWidth
                required
                sx={{ marginBottom: "10px" }}
                inputProps={{ style: { height: "12px" } }}
                type="number"
              />
              <TextField
                value={state.protein}
                onChange={(e) =>
                  setState({ ...state, protein: e.target.value })
                }
                label="Protein"
                fullWidth
                required
                sx={{ marginBottom: "10px" }}
                inputProps={{ style: { height: "12px" } }}
                type="number"
              />
              <TextField
                value={state.fats}
                onChange={(e) => setState({ ...state, fats: e.target.value })}
                label="Fats"
                fullWidth
                required
                sx={{ marginBottom: "10px" }}
                inputProps={{ style: { height: "12px" } }}
                type="number"
              />
              <TextField
                value={state.calories}
                onChange={(e) =>
                  setState({ ...state, calories: e.target.value })
                }
                label="Calories"
                fullWidth
                required
                sx={{ marginBottom: "10px" }}
                inputProps={{ style: { height: "12px" } }}
                type="number"
              />
              <span style={{ color: "red" }}>
                * Please add quantity in grams.
              </span>
              <br />
              <br />
              <input
                value={state.image}
                onChange={onChange}
                type="file"
                name="dish_image"
                accept="images/*"
                required
                style={{ marginBottom: "10px" }}
              />
              <Button
                sx={{
                  color: "white",
                  fontWeight: "500",
                  letterSpacing: "0.05em",
                  marginTop: "10px",
                }}
                variant="contained"
                type="Submit"
                disabled={loading}
                fullWidth
              >
                {loading ? <CircularProgress/> :"Submit"}
              </Button>
            </form>
          </CardContent>
        </CardActionArea>
      </Card>
      <DishLists data={data} />
    </div>
  );
}
