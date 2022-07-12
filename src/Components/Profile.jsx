import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import { Button, CircularProgress, TextField } from "@mui/material";
import Alert from "@mui/material/Alert";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

import axios from "axios";

import { AuthContext } from "../Context/AuthContext";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const nameRef = React.useRef();
  const userNameRef = React.useRef();

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { user, update, setUser } = React.useContext(AuthContext);

  useEffect(()=>{
    document.title = "Profile"
  },[])
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/user/update`,
        {
          id: user._id,
          username: userNameRef.current.value,
          name: nameRef.current.value,
        }
      );
      if (data) {
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);
        setSuccess(data.message);
        setLoading(false);
        setTimeout(() => {
          setSuccess("");
        }, 2000);
      }
    } catch (err) {
      setError(err.response.data.message);
      setLoading(false);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Card
        sx={{
          width: "100%",
          height: "84vh",
          background: "white",
          margin: "auto",
          boxShadow: "#90ee 2px 2px  15px",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {user.name.charAt(0)}
            </Avatar>
          }
          title={`${user.name.charAt(0).toUpperCase()}${user.name.substring(
            1
          )}`}
          subheader={`Created At : ${new Date(user.createdAt).toDateString()}`}
        />

        <CardContent sx={{ width: "400px", margin: "auto" }}>
          {success !== "" && <Alert severity="success">{success}</Alert>}
          {error !== "" && <Alert severity="error">{error}</Alert>}
          <div style={{width:"fit-content", margin:"auto"}}>
            <Avatar sx={{ background:"green", height:"120px", width:"120px" }} aria-label="recipe">
              <AssignmentIndIcon sx={{fontSize:"100px"}}/>
            </Avatar>
          </div>
          <br />
          <form onSubmit={handleSubmit}>
            <TextField
              inputProps={{ style: { height: "10px" } }}
              sx={{ marginBottom: "20px" }}
              fullWidth
              defaultValue={user.name}
              label="Name"
              inputRef={nameRef}
              required
            />
            <TextField
              inputProps={{ style: { height: "10px" } }}
              sx={{ marginBottom: "20px" }}
              fullWidth
              defaultValue={user.username}
              label="Username"
              inputRef={userNameRef}
              required
            />
            <TextField
              inputProps={{ style: { height: "10px" } }}
              sx={{ marginBottom: "20px" }}
              fullWidth
              defaultValue={user.userType}
              label="UserType"
              disabled
            />
            <Button
              fullWidth
              sx={{ background: "#1976D2", color: "white" }}
              variant="contained"
              type="submit"
            >
              {loading ? <CircularProgress /> : "Update"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
