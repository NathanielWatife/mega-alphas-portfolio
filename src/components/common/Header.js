import React from "react";
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <Link to='/' className="logo">
                <img src={logo}  alt="Mega Alphs Limited" className="logo-image" />
                    Mega Alphs Limited
                </Link>

                <nav className="nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;