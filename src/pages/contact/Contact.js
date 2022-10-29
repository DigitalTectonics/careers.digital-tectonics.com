import React from "react";
import { Box } from "@mui/material";
import {
  ContactContainer,
  FormContainer,
  HeaderText,
  SubContactContainer,
} from "./styles";
import Form from "../../components/Form/Form";

export default function Contact(props) {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [newsletter, setNewsletter] = React.useState(false);
  return (
    <ContactContainer
      id="contact"
      sx={{
        backgroundColor: "primary.landing",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Box sx={{ position: "absolute", mt: "-10px", zIndex: "100" }}>
          <svg
            width="100vw"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill={props.mode === "dark" ? "#163832" : "#fff"}
              fill-opacity="1"
              d="M0,256L26.7,224C53.3,192,107,128,160,106.7C213.3,85,267,107,320,112C373.3,117,427,107,480,122.7C533.3,139,587,181,640,202.7C693.3,224,747,224,800,202.7C853.3,181,907,139,960,133.3C1013.3,128,1067,160,1120,149.3C1173.3,139,1227,85,1280,96C1333.3,107,1387,181,1413,218.7L1440,256L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
            ></path>
          </svg>
        </Box>
        <Box sx={{ position: "absolute" }}>
          <svg
            width="100vw"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#E6C574"
              fill-opacity="1"
              d="M0,256L26.7,224C53.3,192,107,128,160,106.7C213.3,85,267,107,320,112C373.3,117,427,107,480,122.7C533.3,139,587,181,640,202.7C693.3,224,747,224,800,202.7C853.3,181,907,139,960,133.3C1013.3,128,1067,160,1120,149.3C1173.3,139,1227,85,1280,96C1333.3,107,1387,181,1413,218.7L1440,256L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
            ></path>
          </svg>
        </Box>
      </Box>
      <SubContactContainer>
        <HeaderText
          letterSpacing="0.1rem"
          color="primary.text"
          fontWeight="700"
          textAlign="center"
          fontFamily="poppins"
        >
          Any Questions? Reach Out to Us!
        </HeaderText>
        <FormContainer
          sx={{
            backgroundColor: "primary.main",
          }}
          elevation={8}
        >
          <Form
            setEmail={setEmail}
            email={email}
            setMessage={setMessage}
            message={message}
            setNewsletter={setNewsletter}
            newsletter={newsletter}
          />
        </FormContainer>
      </SubContactContainer>
    </ContactContainer>
  );
}
