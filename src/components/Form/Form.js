import React from "react";
import {
  TextField,
  Grid,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

export default function Form({
  setEmail,
  email,
  setMessage,
  message,
  setNewsletter,
  newsletter,
}) {
  return (
    <form
      action={process.env.REACT_APP_API_KEY}
      class="pageclip-form"
      method="post"
    >
      <Grid container justifyContent="center" spacing="20">
        <Grid item xs="12">
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
        <Grid item xs="12">
          <TextField
            sx={{ width: "100%" }}
            name="message"
            type="text"
            required
            id="outlined-required"
            multiline
            rows={5}
            label="Message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </Grid>
        <Grid item xs="12">
          <FormControlLabel
            control={
              <Checkbox
                name="newsletter"
                value={newsletter}
                onChange={(e) => setNewsletter(!newsletter)}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 28,
                    color: "primary.text",
                  },
                }}
              />
            }
            label="Would you like to sign up for our Newsletter?"
          />
        </Grid>
        <Grid item xs="12">
          <Button
            sx={{ width: "100%" }}
            className="pageclip-form__submit"
            type="submit"
            color="success"
            variant="outlined"
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
