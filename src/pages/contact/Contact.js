import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Grid, Button } from "@mui/material";

export default function Contact() {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <form
        action={process.env.REACT_APP_API_KEY}
        class="pageclip-form"
        method="post"
      >
        <Grid container justifyContent="center" spacing="20">
          <Grid item xs="11">
            <TextField
              sx={{ width: "100%" }}
              name="email"
              type="email"
              required
              id="outlined-required"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Grid>
          <Grid item xs="11">
            <TextField
              sx={{ width: "100%" }}
              name="message"
              type="text"
              required
              id="outlined-required"
              multiline
              maxRows={5}
              label="Message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </Grid>
          <Grid item>
            <Button
              className="pageclip-form__submit"
              type="submit"
              variant="outlined"
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
