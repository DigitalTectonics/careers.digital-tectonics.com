import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/landing/Landing";
import Appbar from "../components/Appbar";
import DrawerComp from "../components/DrawerComp";

function App() {
  return (
    <BrowserRouter>
      <DrawerComp />
      <Appbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
