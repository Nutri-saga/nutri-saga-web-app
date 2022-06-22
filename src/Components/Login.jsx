import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { CardActionArea, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Alert } from "@mui/material";
import { Link } from "react-router-dom";
import img from "../assets/nutritionLogin.jpg";



const StyledTextField = styled(TextField)(() => ({
  marginBottom: "20px",
}));
const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "#1872CB",
}));

function Login() {
  const { isLoading, user, error, login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(error);
  const [loading, setLoading] = useState(isLoading);

  useEffect(() => {
    setErr(error);
    setLoading(isLoading);
  }, [isLoading, error, user]);

  const handleClick = (username, password) => {
    if (username === "" || password === "") {
      console.log(process.env.REACT_APP_BASE_URL)
      setLoading(true);
      if (password) setErr("Please enter username");
      if (username) setErr("Please enter password");
      if (!username && !password) setErr("Please enter username and password");
      setTimeout(() => {
        setErr("");
        setLoading(false);
      }, 2000);
      return;
    }
    login(username, password);
  };

  return (
    <div>
      <Card
        sx={{
          maxWidth: "65vw",
          margin: "auto",
          marginTop:"60px",
          padding: "0%",
          display: "flex",
        }}
      >
        <CardActionArea>
          <CardContent sx={{padding:"0px", overflow:"hidden"}}>
            <img style={{ width: "100%", height: "78vh" }} src={img} />
          </CardContent>
        </CardActionArea>
        <CardActionArea>
          <CardContent sx={{padding:"30px"}}>
            <h1>Login</h1>
            {err != "" && (
              <Alert sx={{ marginBottom: "10px" }} severity="error">
                {err}
              </Alert>
            )}
            <StyledTextField
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              color="primary"
              fullWidth
            />
            <StyledTextField
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              color="primary"
              fullWidth
            />
            <Button
              onClick={() => handleClick(username, password)}
              variant="contained"
              fullWidth
              disabled={loading}
            >
              Login
            </Button>
            <Typography sx={{ marginTop: "20px" }} textAlign="center">
              Don't have account ?{" "}
              <StyledLink to="/signup"> Sign up</StyledLink>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Login;
