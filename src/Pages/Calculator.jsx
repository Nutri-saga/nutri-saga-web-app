import React, { useState, useEffect } from "react";
import {
  Card,
  Box,
  Typography,
  Select,
  MenuItem,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
import { useNavigate } from "react-router-dom";

function Calculator() {
  const [days, setDays] = useState(5);
  const [energy, setEnergy] = useState(0);
  const [fats, setFats] = useState(0);
  const [protein, setProtein] = useState(0);
  const [calories, setCalories] = useState(0);

  const [cal, setCal] = useState("");
  const [loading, setLoading]= useState(false);

  useEffect(()=>{
    document.title = "Daily Nutri Calculator";
  },[])

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    const obj = {
      Energy: parseInt(energy) * parseInt(days),
      Fats: parseInt(fats) * parseInt(days),
      Protein: parseInt(protein) * parseInt(days),
      Calories: parseInt(calories) * parseInt(days),
    };
    localStorage.setItem("calculator", JSON.stringify(obj));

    setCal("Your daily nutrition is set successfully...");
    navigate('/dishes');
    setTimeout(()=>{
        setCal('')
        setLoading(false)
    },2000)
  };

  return (
    <Box>
      <form onSubmit={handleSubmit} >
        <Card
          sx={{
            width: "400px",
            minHeight: "350px",
            margin: "auto",
            boxShadow: "gray 2px 5px 15px",
            marginTop: "40px",
          }}
        >
          <Box sx={{ width: "100%", background: "#ff3d00" }}>
            <Box
              sx={{
                display: "flex",
                width: "fit-content",
                margin: "auto",
                padding: "10px",
              }}
            >
              <CalculateIcon sx={{ color: "white" }} />
              <Typography sx={{ marginLeft: "5px", color: "white" }}>
                Daily to Weekly Nutri Calclulator
              </Typography>
            </Box>
          </Box>
          <Box sx={{ padding: "10px" }}>
            {cal && <Alert severity="success">{cal} </Alert>}
            <Typography
              sx={{
                fontSize: "14px",
                marginLeft: "3px",
                fontWeight: "550",
                color: "gray",
              }}
            >
              Select Week Days
            </Typography>
            <Select
              sx={{ height: "40px" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              fullWidth
              value={days}
              onChange={(e) => setDays(e.target.value)}
              required
            >
              <MenuItem value={5}>Five</MenuItem>
              <MenuItem value={6}>Six</MenuItem>
              <MenuItem value={7}>Seven</MenuItem>
            </Select>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ marginTop: "8px" }}>
                <Typography
                  sx={{
                    color: "gray",
                    letterSpacing: "0.03em",
                    marginLeft: "3px",
                    fontSize: "14px",
                  }}
                >
                  Energy
                </Typography>
                <TextField
                  inputProps={{ style: { height: "8px", width: "150px" } }}
                  val={energy}
                  onChange={(e) => setEnergy(e.target.value)}
                  type="number"
                  required
                />
              </Box>
              <Box sx={{ marginTop: "8px" }}>
                <Typography
                  sx={{
                    color: "gray",
                    letterSpacing: "0.03em",
                    marginLeft: "3px",
                    fontSize: "14px",
                  }}
                >
                  Fats
                </Typography>
                <TextField
                  inputProps={{ style: { height: "8px", width: "150px" } }}
                  val={fats}
                  onChange={(e) => setFats(e.target.value)}
                  type="number"
                  required
                />
              </Box>
              <Box sx={{ marginTop: "8px" }}>
                <Typography
                  sx={{
                    color: "gray",
                    letterSpacing: "0.03em",
                    marginLeft: "3px",
                    fontSize: "14px",
                  }}
                >
                  Protein
                </Typography>
                <TextField
                  inputProps={{ style: { height: "8px", width: "150px" } }}
                  val={protein}
                  onChange={(e) => setProtein(e.target.value)}
                  type="number"
                  required
                />
              </Box>
              <Box sx={{ marginTop: "8px" }}>
                <Typography
                  sx={{
                    color: "gray",
                    letterSpacing: "0.03em",
                    marginLeft: "3px",
                    fontSize: "14px",
                  }}
                >
                  Calories
                </Typography>
                <TextField
                  inputProps={{ style: { height: "8px", width: "150px" } }}
                  val={calories}
                  onChange={(e) => setCalories(e.target.value)}
                  type="number"
                  required
                />
              </Box>
            </Box>
          </Box>
          <hr style={{ marginTop: "20px" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              paddingRight: "10px",
              alignItems: "center",
            }}
          >
            <Button
              type="submit"
              sx={{
                background: "#ff3d00",
                width: "100px",
                fontSize: "12px",
                fontWeight: "550",
                textTransform: "inherit",
                letterSpacing: "0.08em",
              }}
              variant="contained"
            >
             {loading ? <CircularProgress size="1rem" sx={{color:"white"}}/> : "Convert"}
            </Button>
            <Button
              sx={{ color: "gray", textTransform: "inherit" }}
              type="reset"
            >
              Reset
            </Button>
          </Box>
        </Card>
      </form>
    </Box>
  );
}

export default Calculator;
