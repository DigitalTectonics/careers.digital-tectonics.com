import React from "react";
import { Typography, Button } from "@mui/material";
import { CardContainer } from "./styles";

export default function Card(props) {
  const { header, description, button } = props;
  return (
    <React.Fragment>
      <CardContainer
        elevation={4}
        sx={{
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
      </CardContainer>
    </React.Fragment>
  );
}
