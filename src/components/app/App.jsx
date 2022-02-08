import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from '../homepage/Homepage';
import { InfoPage } from '../info/InfoPage';
import { Navbar } from '../navbar/Navbar';
import "./App.scss";

function App() {
    return <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/info" element={<InfoPage />} />
        </Routes>
    </BrowserRouter>;
}

export default App;
