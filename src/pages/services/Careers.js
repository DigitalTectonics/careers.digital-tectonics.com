import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import Card from "../../components/Card/Card";

export default function Careers(props) {
  const cards = [
    {
      header: "Diversity & Inclusion",
      description:
        "Whether you're a seasoned developer or gearing up to submit your first app, everyone can use a second review and prevent a rejection.",
      button: "More Inclusion",
    },
    {
      header: "Benefits",
      description:
        "Whether you're a seasoned developer or gearing up to submit your first app, everyone can use a second review and prevent a rejection.",
      button: "View Benefits",
    },
    {
      header: "Open Positions",
      description:
        "Whether you're a seasoned developer or gearing up to submit your first app, everyone can use a second review and prevent a rejection.",
      button: "See Positions",
    },
    {
      header: "Hiring Process",
      description:
        "Whether you're a seasoned developer or gearing up to submit your first app, everyone can use a second review and prevent a rejection.",
      button: "Learn More",
    },
  ];
  return (
    <Box
      id="careers"
      sx={{
        scrollMarginTop: "4em",
        zIndex: "1000",
        pb: { xs: "250px", md: "150px", lg: "100px" },
        width: "100vw",
        backgroundColor: "primary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          zIndex: "0",
          p: { xs: "15px", sm: "50px", md: "50px", lg: "50px" },
          width: "90%",
          mt: "50px",
          borderRadius: { xs: "20px", md: "30px", lg: "40px" },
          border: "4px solid",
          borderColor: "primary.text",
          backgroundColor: "primary.landing",
        }}
      >
        <Grid
          container
          spacing={10}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} lg={3}>
            <Box
              color={props.mode === "light" ? "white" : "primary.text"}
              sx={{ width: "100%" }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.5em", sm: "2.5em", md: "2.5em" },
                  mb: "30px",
                }}
                letterSpacing="0.1rem"
                fontWeight="700"
                fontFamily="poppins"
              >
                Jump start your career at Digital Tectonics LLC!
              </Typography>
              <Typography fontFamily='"Mulish", sans-serif'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                vitae ipsum sit amet risus semper consectetur sit amet non
                augue. Aenean commodo, neque ac mattis mollis, justo odio mollis
                massa, nec aliquam erat justo sit amet arcu. Suspendisse quis
                consequat arcu. Curabitur a dui eget massa maximus egestas.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={9}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing="20px"
            >
              {cards.map((card) => {
                return (
                  <Grid item xs={12} md={6} lg={3}>
                    <Card
                      header={card.header}
                      description={card.description}
                      button={card.button}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
