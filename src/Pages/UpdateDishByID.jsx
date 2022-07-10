import React, { useEffect, useState, useRef, useContext } from "react";
import { deleteDish, getDish, updateDish } from "../Context/ComponentActions";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  Button,
  CardActionArea,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { DishContext } from "../Context/DishContext";

function UpdateDishByID() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [done, setDone] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const {removeDish} = useContext(DishContext);

  const nameRef = useRef();
  const servingsRef = useRef();
  const energyRef = useRef();
  const proteinRef = useRef();
  const fatsRef = useRef();
  const caloriesRef = useRef();

  const { id } = useParams();

  async function getData() {
    const { data, err } = await getDish(id);
    if (data) {
      setData(data);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let modalData = {};
    modalData["name"] = nameRef.current.value;
    modalData["servings"] = servingsRef.current.value;
    modalData["energy"] = energyRef.current.value;
    modalData["protein"] = proteinRef.current.value;
    modalData["fats"] = fatsRef.current.value;
    modalData["calories"] = caloriesRef.current.value;
    modalData["id"] = id;

    const { success, err } = await updateDish(modalData);
    setLoading(true);

    if (success) {
      setDone("Updated successfully...");
      nameRef.current.value = "";
      servingsRef.current.value = "";
      energyRef.current.value = "";
      proteinRef.current.value = "";
      fatsRef.current.value = "";
      caloriesRef.current.value = "";
      setLoading(false);
      setTimeout(() => {
        setDone("");
        navigate("/updatedish");
      }, 1500);
    } else {
      setError(err);
      setTimeout(() => {
        setError("");
        setLoading(false);
      }, 1500);
    }
  };
  
  const handleDelete = async()=>{
    const ans = window.confirm('Are you sure want to delete.')
    setLoading(true);
    if(ans){ 
      const {success, err} =  await deleteDish(id);
      console.log(success)
     if(success){
        setDone("Dish delete successfully...");
        removeDish(data);
        setTimeout(()=>{
            setLoading(false);
            navigate('/updatedish')
        },1000)
     }else if(err){
        setError(err);
        setTimeout(()=>{
            setError('');
            setLoading(false);
            navigate('/updatedish');
        },1500)
     }
    }else{
        setLoading(false);
        return;
    }

  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card
      sx={{
        flexBasis: "50%",
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
          Update Dish
        </Typography>
      </Box>
      {error && <Alert severity="error">{error}</Alert>}
      {done && <Alert severity="success">{done}</Alert>}

      <CardActionArea sx={{ display: "flex" }}>
        <CardContent sx={{ padding: "20px" }}>
          <form onSubmit={handleSubmit}>
            <TextField
              defaultValue={data.name}
              multiline
              inputRef={nameRef}
              label="Dish Name"
              focused
              fullWidth
              required
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              defaultValue={data.servings}
              multiline
              inputRef={servingsRef}
              label="Servings"
              focused
              fullWidth
              required
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              defaultValue={data.energy}
              multiline
              inputRef={energyRef}
              focused
              label="Energy"
              fullWidth
              required
              sx={{ marginBottom: "10px" }}
              type="number"
            />
            <TextField
              defaultValue={data.protein}
              multiline
              inputRef={proteinRef}
              focused
              label="Protein"
              fullWidth
              required
              sx={{ marginBottom: "10px" }}
              type="number"
            />
            <TextField
              defaultValue={data.fats}
              multiline
              inputRef={fatsRef}
              focused
              label="Fats"
              fullWidth
              required
              sx={{ marginBottom: "10px" }}
              type="number"
            />
            <TextField
              defaultValue={data.calories}
              multiline
              inputRef={caloriesRef}
              focused
              label="Calories"
              fullWidth
              required
              sx={{ marginBottom: "10px" }}
              type="number"
            />
            <span style={{ color: "red" }}>
              * Please add quantity in grams.
            </span>
            <Box sx={{dispaly:"flex"}} fullWidth>
              <Button
                sx={{
                  color: "white",
                  fontWeight: "500",
                  letterSpacing: "0.05em",
                  marginTop: "10px",
                  width:"49%",
                  marginRight:"2%"
                }}
                variant="contained"
                color="success"
                type="Submit"
                disabled={loading}
              >
                {loading ? <CircularProgress /> : "Update"}
              </Button>
              <Button
                sx={{
                  color: "white",
                  fontWeight: "500",
                  letterSpacing: "0.05em",
                  marginTop: "10px",
                  width:"49%"
                }}
                variant="contained"
                color="error"
                disabled={loading}
                onClick={handleDelete}
              >
                {loading ? <CircularProgress /> : "Delete"}
              </Button>
            </Box>
          </form>
        </CardContent>
        <CardContent>
          <img style={{ width: "100%", border:"2px solid green", padding:"10px", borderRadius:"5px", boxShadow:"green 2px 2px 8px" }} src={data.image_url?.url} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default UpdateDishByID;
