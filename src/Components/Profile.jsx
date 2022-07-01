import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Button, TextField } from "@mui/material";
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

  const { user, update } = React.useContext(AuthContext);

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(user)
    try{
    const response = await axios.put(`${process.env.REACT_APP_BASE_URL}user/update`,{
        id:user._id,
        username:userNameRef.current.value,
        name:nameRef.current.value
    })
    console.log(response)
}   catch(err){
    console.log(err.response)
}
    
  };

  return (
    <div style={{display:"flex"}}>
      <Card sx={{ width: "30%", margin: "auto" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {user.name.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={`${user.name.charAt(0).toUpperCase()}${user.name.substring(
            1
          )}`}
          subheader={`Created At : ${new Date(user.createdAt).toDateString()}`}
        />

        <CardContent sx={{ width: "400px", margin: "auto" }}>
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
              Update
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card sx={{ width: "30%", margin: "auto" }}>

        <CardContent sx={{ width: "400px", margin: "auto" }}>
          <form onSubmit={handleSubmit}>
            <TextField
              inputProps={{ style: { height: "10px" } }}
              sx={{ marginBottom: "20px" }}
              fullWidth
              defaultValue={user.name}
              label="Name"
              required
            />
            <TextField
              inputProps={{ style: { height: "10px" } }}
              sx={{ marginBottom: "20px" }}
              fullWidth
              defaultValue={user.username}
              label="Username"
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
              Update
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
