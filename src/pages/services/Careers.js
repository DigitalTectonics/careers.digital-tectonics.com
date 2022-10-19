import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import banner from "../../assets/banner.png";

export default function Careers() {
  return (
    <Box
      id="careers"
      sx={{
        mt: "-10px",
        pb: { xs: "160px", md: "150px", lg: "100px" },
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
          p: { xs: "20px", sm: "50px", md: "50px", lg: "200px" },
          width: "90%",
          backgroundColor: "white",
          mt: "50px",
          borderRadius: { xs: "20px", md: "30px", lg: "40px" },
          border: "3px solid #2d8046",
          backgroundColor: "primary.landing",
          backgroundImage: {
            sx: "none",
            sm: "none",
            md: "none",
            lg: `url(${banner})`,
          },
          backgroundPosition: "left",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid
          container
          spacing={10}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} lg={9}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing="20px"
            >
              <Grid item xs={12} md={6} lg={3}>
                <Paper
                  elevation={4}
                  sx={{
                    borderRadius: "30px",
                    padding: "50px",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    fontWeight="700"
                    fontFamily='"Mulish", sans-serif'
                    textAlign="center"
                  >
                    Diversity & Inclusion
                  </Typography>
                  <Typography
                    fontFamily='"Mulish", sans-serif'
                    textAlign="center"
                  >
                    Whether you're a seasoned developer or gearing up to submit
                    your first app, everyone can use a second review and prevent
                    a rejection.
                  </Typography>
                  <Button sx={{ mt: "5px" }}>More Inclusion</Button>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Paper
                  elevation={4}
                  sx={{
                    borderRadius: "30px",
                    padding: "50px",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    fontWeight="700"
                    fontFamily='"Mulish", sans-serif'
                    textAlign="center"
                  >
                    Benefits
                  </Typography>
                  <Typography
                    fontFamily='"Mulish", sans-serif'
                    textAlign="center"
                  >
                    Whether you're a seasoned developer or gearing up to submit
                    your first app, everyone can use a second review and prevent
                    a rejection.
                  </Typography>
                  <Button sx={{ mt: "5px" }}>View Benefits</Button>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Paper
                  elevation={4}
                  sx={{
                    borderRadius: "30px",
                    padding: "50px",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    fontWeight="700"
                    fontFamily='"Mulish", sans-serif'
                    textAlign="center"
                  >
                    Open Positions
                  </Typography>
                  <Typography
                    fontFamily='"Mulish", sans-serif'
                    textAlign="center"
                  >
                    Whether you're a seasoned developer or gearing up to submit
                    your first app, everyone can use a second review and prevent
                    a rejection.
                  </Typography>
                  <Button sx={{ mt: "5px" }}>See Positions</Button>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Paper
                  elevation={4}
                  sx={{
                    borderRadius: "30px",
                    padding: "50px",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    fontWeight="700"
                    fontFamily='"Mulish", sans-serif'
                    textAlign="center"
                  >
                    Hiring Process
                  </Typography>
                  <Typography
                    fontFamily='"Mulish", sans-serif'
                    textAlign="center"
                  >
                    Whether you're a seasoned developer or gearing up to submit
                    your first app, everyone can use a second review and prevent
                    a rejection.
                  </Typography>
                  <Button sx={{ mt: "5px" }}>Learn More</Button>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper
        elevation={4}
        sx={{
          p: { xs: "15px", sm: "50px", md: "50px", lg: "50px" },
          width: "90%",
          backgroundColor: "white",
          mt: "50px",
          borderRadius: { xs: "20px", md: "30px", lg: "40px" },
          border: "3px solid",
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
            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{
                  fontSize: { xs: "1.5em", sm: "2.5em", md: "2.5em" },
                  mb: "30px",
                }}
                letterSpacing="0.1rem"
                fontWeight="700"
                fontFamily="poppins"
                color="white"
              >
                Jump start your career at Digital Tectonics LLC!
              </Typography>
              <Typography color="white" fontFamily='"Mulish", sans-serif'>
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
              <Grid item xs={12} md={6} lg={3}>
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
                    Diversity & Inclusion
                  </Typography>
                  <Typography
                    fontFamily='"Mulish", sans-serif'
                    textAlign="center"
                  >
                    Whether you're a seasoned developer or gearing up to submit
                    your first app, everyone can use a second review and prevent
                    a rejection.
                  </Typography>
                  <Button color="success" sx={{ mt: "5px" }}>
                    More Inclusion
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
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
                    Benefits
                  </Typography>
                  <Typography
                    fontFamily='"Mulish", sans-serif'
                    textAlign="center"
                  >
                    Whether you're a seasoned developer or gearing up to submit
                    your first app, everyone can use a second review and prevent
                    a rejection.
                  </Typography>
                  <Button color="success" sx={{ mt: "5px" }}>
                    View Benefits
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
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
                    Open Positions
                  </Typography>
                  <Typography
                    fontFamily='"Mulish", sans-serif'
                    textAlign="center"
                  >
                    Whether you're a seasoned developer or gearing up to submit
                    your first app, everyone can use a second review and prevent
                    a rejection.
                  </Typography>
                  <Button color="success" sx={{ mt: "5px" }}>
                    See Positions
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
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
                    Hiring Process
                  </Typography>
                  <Typography
                    fontFamily='"Mulish", sans-serif'
                    textAlign="center"
                  >
                    Whether you're a seasoned developer or gearing up to submit
                    your first app, everyone can use a second review and prevent
                    a rejection.
                  </Typography>
                  <Button color="success" sx={{ mt: "5px" }}>
                    Learn More
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
