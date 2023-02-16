import React, { useContext, useState, useEffect } from "react";

//Context's
import { AuthContext } from "../Contexts/AuthContext";

//@mui
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import Alert from "@mui/material/Alert";
import Box from "@mui/system/Box";

//react-router-dom
import { useNavigate } from "react-router-dom";

//images
import img from "../assets/nutritionLogin.jpg";

//api
import { userLogin } from "../api/userActions";

//Cutom Components
import CustomTextField from "../Components/Inputs/CustomTextField";
import CustomButton from "../Components/Buttons/CustomButton";

//Styling
const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${img})`,
  backgroundPosition: "auto",
  "& .login-card": {
    position: "absolute",
    top: "50%",
    left: "50%",
    borderRadius: "5px",
    transform: "translate(-50%, -50%)",
    width: "20%",
    [theme.breakpoints.down("lg")]: {
      width: "40%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    background: "#FFFFFF",
    "& .heading": {
      padding: "0.5rem",
      textAlign: "center",
      color: "#FFFFFF",
      background: theme.palette.primary.main,
      fontSize: "16px",
      fontWeight: "600",
      letterSpacing: "0.05em",
    },
    "& .card-actions": {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      padding: "1rem",
      paddingBottom: "3rem",
      "& .label": {
        fontSize: "14px",
        color: "#787878",
        letterSpacing: "0.05em",
        fontWeight: "500",
        fontStyle: "normal",
      },
    },
  },
}));

//Main Component
function Login() {
  const { user } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data, err } = await userLogin(username, password);

    if (err) {
      setError(err);
      setTimeout(() => {
        setError(null);
      }, 1500);
      setLoading(false);
      return;
    }

    if (data) {
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      setLoading(false);
      navigate("/");
    }
  };

  return (
    <StyledBox>
      <form onSubmit={handleSubmit}>
        <Box className="login-card">
          <Typography className="heading">User Login</Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <Box className="card-actions">
            <Box>
              <Typography className="label">Username</Typography>
              <CustomTextField
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Box>
            <Box>
              <Typography className="label">Password</Typography>
              <CustomTextField
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <CustomButton loading={loading} type="submit">
              Login
            </CustomButton>
          </Box>
        </Box>
      </form>
    </StyledBox>
  );
}

export default Login;
