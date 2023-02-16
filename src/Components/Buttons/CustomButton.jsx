import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import styled from "@emotion/styled";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  "& .btn": {
    background: theme.palette.primary.main,
    width: "100%",
    color: "white",
  },
}));

export default function CustomButton({ children, loading, ...restProps }) {
  return (
    <StyledBox>
      <Button
        className="btn"
        disableRipple
        disableElevation
        disableFocusRipple
        disabled={loading}
        sx={{ textTransform: "none" }}
        {...restProps}
      >
        {children}
      </Button>
    </StyledBox>
  );
}
