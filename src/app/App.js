import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/landing/Landing";
import Appbar from "../components/Appbar";
import { theme } from "./theme";
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Appbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Landing />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
