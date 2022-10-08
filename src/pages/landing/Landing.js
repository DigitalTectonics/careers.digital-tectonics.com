import React from "react";
import { Box, Typography } from "@mui/material";

export default function Landing() {
  return (
    <Box sx={{ height: "100vh", position: "relative", width: "100vw" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "40vh",
          textAlign: "center",
        }}
      >
        <Typography alignText="center" fontWeight="700" fontSize="3em">
          Smart, Secure, Scalable Solutions.
        </Typography>
        <Typography alignText="center" fontWeight="700" fontSize="3em">
          We design and develop mobile apps that delight your users and grow
          your business. Enterprise-grade development combined with outstanding
          design.
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "0px",
          zIndex: "10",
        }}
      >
        <Box sx={{ marginBottom: "-5px" }}>
          <svg
            width="100vw"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#61ca81"
              fill-opacity="1"
              d="M0,64L26.7,64C53.3,64,107,64,160,80C213.3,96,267,128,320,122.7C373.3,117,427,75,480,101.3C533.3,128,587,224,640,224C693.3,224,747,128,800,90.7C853.3,53,907,75,960,112C1013.3,149,1067,203,1120,224C1173.3,245,1227,235,1280,234.7C1333.3,235,1387,245,1413,250.7L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
            ></path>
          </svg>
        </Box>
        <Box sx={{ background: "#61CA81", height: "1vh" }}></Box>
      </Box>
    </Box>
  );
}
