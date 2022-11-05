import React from "react";
import { Box, Typography } from "@mui/material";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import {
  LandingContainer,
  LandingSub,
  LandingMobile,
  SubHero,
  IconsContainer,
  Icon,
  PositonsButton,
} from "./styles";

export default function Landing(props) {
  return (
    <React.Fragment>
      <LandingContainer id="landing">
        <LandingSub
          elevation={{ xs: "0", lg: "4" }}
          className="content"
          mode={props.mode}
        >
          <LandingMobile
            sx={{
              borderColor: "primary.main",
            }}
          ></LandingMobile>
          <SubHero
            sx={{ color: props.mode === "dark" ? "primary.text" : "white" }}
            elevation={{ xs: "5", lg: "0" }}
          >
            <Typography
              alignText="center"
              fontWeight="700"
              fontFamily='"DM Sans", sans-serif'
              sx={{
                fontSize: { xs: "1.5em", sm: "2.5em", md: "1.9em", lg: "2em" },
              }}
            >
              Work When & Where You Want
            </Typography>
            <Typography
              alignText="center"
              fontWeight="300"
              fontFamily='"Ubuntu", sans-serif'
              sx={{
                fontSize: { xs: "1.2em", sm: "2em", md: "1.4em", lg: "1.5em" },
              }}
            >
              Digital Tectonics, LLC offers part time development work allowing
              you to build your resume while keeping your day job.
            </Typography>
            <IconsContainer>
              <Box sx={{ display: "flex", gap: "15px", mt: "20px" }}>
                <Icon>
                  <AiFillAndroid size="2.8rem" />
                </Icon>
                <Icon>
                  <AiFillApple size="2.8rem" />
                </Icon>
                <Icon>
                  <TbWorld size="2.8rem" />
                </Icon>
              </Box>
              <Box>
                <PositonsButton variant="contained">
                  <Typography className="underline">Open Positions</Typography>
                </PositonsButton>
              </Box>
            </IconsContainer>
          </SubHero>
        </LandingSub>
      </LandingContainer>
    </React.Fragment>
  );
}
