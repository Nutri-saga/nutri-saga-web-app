import React from "react";
import BusinessIcon from "@mui/icons-material/Business";
import { Card, CardContent, Box, Typography } from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import MailIcon from "@mui/icons-material/Mail";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import CallIcon from "@mui/icons-material/Call";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

function Adress() {
  return (
    <Box sx={{ padding: "20px", paddingLeft: "100px", paddingRight: "100px" }}>
      <Box
        sx={{
          display: "flex",
          width: "fit-content",
          margin: "auto",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <PermContactCalendarIcon />
        <Typography
          sx={{ fontWeight: "700", letterSpacing: "0.03em", marginLeft: "3px" }}
          align="center"
        >
          Contact Us
        </Typography>
      </Box>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Card
          sx={{
            width: "49%",
            boxShadow: "purple 2px 5px 15px",
            padding: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "fit-content",
              margin: "auto",
              alignItems: "center",
            }}
          >
            <ContactMailIcon sx={{ color: "purple" }} />
            <Typography
              sx={{
                fontWeight: "700",
                letterSpacing: "0.03em",
                marginLeft: "3px",
                color: "purple",
              }}
              align="center"
            >
              Address
            </Typography>
          </Box>
          <CardContent>
            <Typography
              align="center"
              sx={{
                marginTop: "20px",
                color: "purple",
                letterSpacing: "0.03em",
              }}
            >
              <address>
                188/9 XYZ Chowk,
                <br />
                New Delhi -11002 ,<br />
                INDIA
              </address>
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: "49%",
            boxShadow: "purple 2px 5px 15px",
            padding: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "fit-content",
              margin: "auto",
              alignItems: "center",
            }}
          >
            <MailIcon sx={{ color: "purple" }} />
            <Typography
              sx={{
                fontWeight: "700",
                letterSpacing: "0.03em",
                marginLeft: "3px",
                color: "purple",
              }}
              align="center"
            >
              Get in touch
            </Typography>
          </Box>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                color: "purple",
                width: "fit-content",
                margin: "auto",
                marginTop: "20px",
              }}
            >
              <CallIcon sx={{ marginRight: "5px" }} />
              <Typography> +91 8273343222</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                color: "purple",
                width: "fit-content",
                margin: "auto",
                marginTop: "20px",
              }}
            >
              <MailIcon sx={{ marginRight: "5px" }} />
              <Typography>nutrisaga@xyz.com</Typography>
            </Box>
          </CardContent>
        </Card>
      </CardContent>
    </Box>
  );
}

export default Adress;
