import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Cars from './components/Cars';
import Contact from './components/Contact';
import './App.scss';

const App = () => {
    return (
        <Router>
            <nav className="navbar">
                <Link to="/">Головна</Link>
                <Link to="/about">Про нас</Link>
                <Link to="/cars">Автомобілі</Link>
                <Link to="/contact">Контакти</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
