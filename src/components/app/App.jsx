import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "../homepage/Homepage";
import { GoRovingPage } from "../go-roving/GoRovingPage";
import { Navbar } from "../navbar/Navbar";
import "./App.scss";
import { GoRovingPhotosPage } from "../go-roving/goRovingPhotos/GoRovingPhotosPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/go-roving" element={<GoRovingPage />} />
        <Route path="/go-roving/:roverName" element={<GoRovingPhotosPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
