import React, { useContext, useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { CardActionArea, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Alert } from "@mui/material";
import { Link } from "react-router-dom";
import img from "../assets/nutritionLogin.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const StyledTextField = styled(TextField)(() => ({
  marginBottom: "20px",
}));
const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "#1872CB",
}));

function SignUp() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate  = useNavigate();

  const register = async(name, username, password)=>{
    try{
      const {data} = await axios.post(`${process.env.REACT_APP_BASE_URL}user/signup`,{
        name,
        username,
        password
      })
      if(data){
        setSuccess(data.message)
        setTimeout(()=>{
          setSuccess('')
          setUsername('')
          setPassword('')
          setLoading(false)
          navigate('/Login')
        },2000)
      }
    }
    catch(err){
      // console.log(err)
      setLoading(true)
      setErr(err.response.data)
      setTimeout(()=>{
        setLoading(false)
        setErr('')
      },2000)
    }
    
  }

  const handleClick = (name, username, password) => {
    if (username === "" || password === "" || name==="") {
      setLoading(true);
      if (!username || !password || !name) setErr("All fields are required");
      setTimeout(() => {
        setErr("");
        setLoading(false);
      }, 2000);
      return;
    }
    if(username.length<8){
      setErr('Username must be greater than 8 characters.');
      setLoading(true)
      setTimeout(()=>{
        setErr('');
        setLoading(false)
      },2000)
      return;
    }
    register(name, username, password);
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
            <h1>SignUp</h1>
            {err != "" && (
              <Alert sx={{ marginBottom: "10px" }} severity="error">
                {err}
              </Alert>
            )}
            {success && <Alert sx={{ marginBottom: "10px" }} severity="success">
                {success}
              </Alert>}
            <StyledTextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              color="primary"
              fullWidth
            />
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
              onClick={() => handleClick(name, username, password)}
              variant="contained"
              fullWidth
              disabled={loading}
            >
              Sign Up
            </Button>
            <Typography sx={{ marginTop: "20px" }} textAlign="center">
              Have an account ?{" "}
              <StyledLink to="/Login"> Login</StyledLink>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default SignUp;
