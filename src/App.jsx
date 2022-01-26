import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './components/homepage/Homepage';
import { InfoPage } from './components/info/InfoPage';
import { Navbar } from './components/Navbar';

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
