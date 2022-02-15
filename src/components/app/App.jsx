import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "../homepage/Homepage";
import { GoRovingPage } from "../go-roving/GoRovingPage";
import { Navbar } from "../navbar/Navbar";
import { GoRovingPhotoListPage } from "../go-roving/goRovingPhotos/GoRovingPhotoListPage";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/go-roving" element={<GoRovingPage />} />
        <Route
          path="/go-roving/goRovingPhotos"
          element={<GoRovingPhotoListPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
