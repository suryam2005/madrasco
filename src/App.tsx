import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdLibrary from './pages/AdLibrary';
import Manifesto from './pages/Manifesto';
import Admin from './pages/Admin';
import ServiceDetail from './pages/ServiceDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ad-library" element={<AdLibrary />} />
                <Route path="/services/:id" element={<ServiceDetail />} />
                <Route path="/manifesto" element={<Manifesto />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </Router>
    )
}

export default App
