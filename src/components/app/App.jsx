import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "../homepage/Homepage";
import { GoRovingPage } from "../go-roving/GoRovingPage";
import { Navbar } from "../navbar/Navbar";
import "./App.scss";
import { AsteroidsPage } from "../asteroids/AsteroidsPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/go-roving" element={<GoRovingPage />} />
        <Route path="/asteroids" element={<AsteroidsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
