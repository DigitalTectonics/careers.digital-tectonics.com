import React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { AiFillAndroid, AiFillApple, AiOutlineDown } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";

export default function Landing(props) {
  return (
    <Box
      id="landing"
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.landing",
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: { xs: "90vw", md: "60vw" },
          height: "75vh",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <Typography
          alignText="center"
          fontWeight="700"
          fontFamily='"DM Sans", sans-serif'
          color="white"
          sx={{ fontSize: { xs: "2em", sm: "2em", md: "3em", lg: "3em" } }}
        >
          Smart, Secure, Scalable Solutions.
        </Typography>
        <Typography
          alignText="center"
          color="white"
          fontWeight="400"
          fontFamily='"Ubuntu", sans-serif'
          sx={{ fontSize: { xs: "25px", sm: "2em", md: "2em", lg: "3em" } }}
        >
          We design and develop mobile apps that delight your users and grow
          your business. Enterprise-grade development combined with outstanding
          design.
        </Typography>
        <Box sx={{ display: "flex", gap: "15px", mt: "20px" }}>
          <Box
            sx={{
              borderRadius: "100%",
              backgroundColor: "primary.landing",
              padding: "10px",
            }}
          >
            <AiFillAndroid size="2rem" color="white" />
          </Box>
          <Box
            sx={{
              borderRadius: "100%",
              backgroundColor: "primary.landing",
              padding: "10px",
            }}
          >
            <AiFillApple size="2rem" color="white" />
          </Box>
          <Box
            sx={{
              borderRadius: "100%",
              backgroundColor: "primary.landing",
              padding: "10px",
            }}
          >
            <TbWorld size="2rem" color="white" />
          </Box>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#E6C574",
              borderRadius: "50px",
              p: "20px",
              width: "12rem",
              mt: "10px",
            }}
          >
            Open Positions
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "calc(10px + (100vh - 100%))",
          zIndex: "10",
        }}
      >
        <Box sx={{ marginBottom: "-5px", position: "relative" }}>
          <Box sx={{ position: "absolute" }}>
            <svg
              width="100vw"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill={props.mode === "dark" ? "#0A1929" : "#fff"}
                fill-opacity="1"
                d="M0,64L26.7,64C53.3,64,107,64,160,80C213.3,96,267,128,320,122.7C373.3,117,427,75,480,101.3C533.3,128,587,224,640,224C693.3,224,747,128,800,90.7C853.3,53,907,75,960,112C1013.3,149,1067,203,1120,224C1173.3,245,1227,235,1280,234.7C1333.3,235,1387,245,1413,250.7L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
              ></path>
            </svg>
          </Box>
          <Box>
            <svg
              style={{ marginTop: "-10px" }}
              width="100vw"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#E6C574"
                fill-opacity="1"
                d="M0,64L26.7,64C53.3,64,107,64,160,80C213.3,96,267,128,320,122.7C373.3,117,427,75,480,101.3C533.3,128,587,224,640,224C693.3,224,747,128,800,90.7C853.3,53,907,75,960,112C1013.3,149,1067,203,1120,224C1173.3,245,1227,235,1280,234.7C1333.3,235,1387,245,1413,250.7L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
              ></path>
            </svg>
          </Box>
        </Box>
      </Box>
      <Avatar
        sx={{
          position: "absolute",
          bottom: { xs: "5rem", sm: "10rem", md: "15px", lg: "25px" },
          zIndex: "10",
          background: {
            xs: `${props.mode === "light" ? "white" : "#0A1929"}`,
            md: `${props.mode === "light" ? "#61ca81" : "#2E2E57"}`,
          },
          borderRadius: "100%",
          padding: { xs: "5px", md: "10px", lg: "15px" },
          border: `3px solid ${props.mode === "light" ? "#216C38" : "#E6C574"}`,
        }}
      >
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <AiOutlineDown
            color={props.mode === "light" ? "white" : "white"}
            size="20px"
          />
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <AiOutlineDown
            color={props.mode === "light" ? "#61ca81" : "white"}
            size="20px"
          />
        </Box>
      </Avatar>
    </Box>
  );
}
