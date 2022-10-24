import React from "react";
import { Typography, Button, Paper } from "@mui/material";

export default function Card(props) {
  const { header, description, button } = props;
  return (
    <React.Fragment>
      <Paper
        elevation={4}
        sx={{
          borderRadius: "30px",
          padding: "50px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "primary.main",
        }}
      >
        <Typography
          fontWeight="700"
          fontFamily='"Mulish", sans-serif'
          textAlign="center"
        >
          {header}
        </Typography>
        <Typography fontFamily='"Mulish", sans-serif' textAlign="center">
          {description}
        </Typography>
        <Button color="success" sx={{ mt: "5px" }}>
          {button}
        </Button>
      </Paper>
    </React.Fragment>
  );
}
