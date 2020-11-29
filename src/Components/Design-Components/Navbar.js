import React from 'react'
import {Link, useLocation} from 'react-router-dom'

import logo from '../../logo.svg'

const Navbar = ({className}) => {
    const {pathname} = useLocation();

    return (
        <div className={`flex navbar ${className}`}>
            <img src={logo} className="logo" alt="Jake And Elwood" />
            <ul className="flex nav main-nav">
                <li className={`nav-item ${pathname === "/" ? "current-page" : ""}`}>
                    <Link to="/">home</Link>
                </li>
                <li className={`nav-item ${pathname === "/about-us" ? "current-page" : ""}`}>
                    <Link to="/about-us">about us</Link>
                </li>
                <li className={`nav-item ${pathname === "/contact-us" ? "current-page" : ""}`}>
                    <Link to="/contact-us">contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar