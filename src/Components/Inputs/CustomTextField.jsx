import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const StyledTextField = styled(Box)(({ theme }) => ({
  width: "100%",
  "& .text-field": {
    width: "100%",
    "& .MuiOutlinedInput-input": {
      width: "100%",
      fontSize: "14px",
      background: "#FFFFFF",
      borderRadius: "4px",
      letterSpacing: "0.05em",
      height: "2.5rem",
      color: "#222222",
      margin: 0,
      padding: "0 1rem",
      [theme.breakpoints.down("xl")]: {
        fontSize: "12px",
        height: "2rem",
      },
    },
  },
}));

export default function CustomTextField({ value, onClick, ...restProps }) {
  return (
    <StyledTextField>
      <TextField
        value={value}
        onClick={onClick}
        {...restProps}
        className="text-field"
      />
    </StyledTextField>
  );
}
