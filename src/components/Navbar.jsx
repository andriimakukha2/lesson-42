// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Головна</Link>
            <Link to="/about" className="nav-link">Про нас</Link>
            <Link to="/cars" className="nav-link">Автомобілі</Link>
        </nav>
    );
};

export default Navbar;
