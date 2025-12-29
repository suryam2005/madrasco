import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdLibrary from './pages/AdLibrary';
import Manifesto from './pages/Manifesto';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ad-library" element={<AdLibrary />} />
                <Route path="/manifesto" element={<Manifesto />} />
            </Routes>
        </Router>
    )
}

export default App
