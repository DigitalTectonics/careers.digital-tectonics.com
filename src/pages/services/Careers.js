import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { AiOutlineMobile } from "react-icons/ai";

export default function Careers() {
  return (
    <Box
      id="careers"
      sx={{
        mt: "-10px",
        pb: "100px",
        width: "100vw",
        backgroundColor: "#61ca81",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ width: "100%", mt: "80px" }}>
        <Typography
          sx={{
            textDecoration: "underline",
            fontSize: { xs: "2em", sm: "3em", md: "3em" },
          }}
          letterSpacing="0.1rem"
          color="white"
          fontWeight="700"
          textAlign="center"
        >
          Services
        </Typography>
      </Box>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing="20px"
        pt="50px"
      >
        <Grid item xs={10} md={2}>
          <Card>
            <CardMedia
              sx={{ width: "100%" }}
              size="10rem"
              component={AiOutlineMobile}
            />
            <CardContent>
              <Typography textAlign="center">App Aid</Typography>
              <Typography textAlign="center">
                Whether you're a seasoned developer or gearing up to submit your
                first app, everyone can use a second review and prevent a
                rejection.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} md={2}>
          <Card>
            <CardMedia
              sx={{ width: "100%" }}
              size="10rem"
              component={AiOutlineMobile}
            />
            <CardContent>
              <Typography textAlign="center">App Aid</Typography>
              <Typography textAlign="center">
                Whether you're a seasoned developer or gearing up to submit your
                first app, everyone can use a second review and prevent a
                rejection.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} md={2}>
          <Card>
            <CardMedia
              sx={{ width: "100%" }}
              size="10rem"
              component={AiOutlineMobile}
            />
            <CardContent>
              <Typography textAlign="center">App Aid</Typography>
              <Typography textAlign="center">
                Whether you're a seasoned developer or gearing up to submit your
                first app, everyone can use a second review and prevent a
                rejection.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ width: "100%", mt: "100px" }}>
        <Typography
          sx={{
            textDecoration: "underline",
            fontSize: { xs: "2em", sm: "3em", md: "3em" },
          }}
          letterSpacing="0.1rem"
          color="white"
          fontWeight="700"
          textAlign="center"
        >
          Operations
        </Typography>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing="20px"
          pt="50px"
        >
          <Grid item xs={10} md={2}>
            <Card>
              <CardMedia
                sx={{ width: "100%" }}
                size="10rem"
                component={AiOutlineMobile}
              />
              <CardContent>
                <Typography textAlign="center">App Aid</Typography>
                <Typography textAlign="center">
                  Whether you're a seasoned developer or gearing up to submit
                  your first app, everyone can use a second review and prevent a
                  rejection.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={10} md={2}>
            <Card>
              <CardMedia
                sx={{ width: "100%" }}
                size="10rem"
                component={AiOutlineMobile}
              />
              <CardContent>
                <Typography textAlign="center">App Aid</Typography>
                <Typography textAlign="center">
                  Whether you're a seasoned developer or gearing up to submit
                  your first app, everyone can use a second review and prevent a
                  rejection.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={10} md={2}>
            <Card>
              <CardMedia
                sx={{ width: "100%" }}
                size="10rem"
                component={AiOutlineMobile}
              />
              <CardContent>
                <Typography textAlign="center">App Aid</Typography>
                <Typography textAlign="center">
                  Whether you're a seasoned developer or gearing up to submit
                  your first app, everyone can use a second review and prevent a
                  rejection.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
