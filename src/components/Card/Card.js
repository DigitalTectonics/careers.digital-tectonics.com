import React from "react";
import { Typography, Button, Grid, Avatar } from "@mui/material";
import { CardContainer, CardContent } from "./styles";

export default function Card(props) {
  const { image, header, description, button } = props;
  return (
    <React.Fragment>
      <CardContainer
        elevation={4}
        sx={{
          backgroundColor: "primary.main",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, lg: 3, xl: 4 }}
          justifyContent="center"
        >
          <Grid item xs={12} lg={6}>
            <Avatar
              src={image}
              sx={{ width: "100%", height: "100%", borderRadius: "30px" }}
              variant="rounded"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <CardContent
              elevation={2}
              sx={{ backgroundColor: "primary.landing" }}
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
            </CardContent>
          </Grid>
        </Grid>
      </CardContainer>
    </React.Fragment>
  );
}
