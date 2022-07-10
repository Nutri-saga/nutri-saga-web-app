import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { CardActionArea, CircularProgress, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Alert } from "@mui/material";
import { Link } from "react-router-dom";
import img from "../assets/nutritionLogin.jpg";
import { useNavigate } from "react-router-dom";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

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
  const navigate = useNavigate();

  useEffect(() => {
    setErr(error);
    setLoading(isLoading);
    if (user) {
      navigate("/dashboard");
    }
  }, [isLoading, error, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      console.log(process.env.REACT_APP_BASE_URL);
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
    if(username , password){
      login(username, password);
    }else{
      setErr('Username and password not entered...')
      setTimeout(()=>{
        setErr("");
        setLoading(false);
      },2000)
    }
  };

  return (
    <div>
      <Card
        sx={{
          maxWidth: "65vw",
          margin: "auto",
          marginTop: "20px",
          padding: "0%",
          display: "flex",
        }}
      >
        <CardActionArea>
          <CardContent sx={{ padding: "0px", overflow: "hidden" }}>
            <img style={{ width: "100%", height: "78vh" }} src={img} />
          </CardContent>
        </CardActionArea>
        <CardActionArea>
          <form onSubmit={handleSubmit}>
            <>
              {" "}
              <CardContent sx={{ padding: "30px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {" "}
                  <AssignmentIndIcon
                    sx={{ marginRight: "5px" }}
                    fontSize="large"
                  />
                  <h1 style={{ paddingTop: "4px" }}>Admin Login</h1>
                </div>
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
                  required
                />
                <StyledTextField
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  color="primary"
                  fullWidth
                  required
                />
                <Button
                  variant="contained"
                  fullWidth
                  disabled={loading}
                  type="submit"
                >
                  {loading ? <CircularProgress /> : "Login"}
                </Button>
              </CardContent>
            </>
          </form>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Login;
