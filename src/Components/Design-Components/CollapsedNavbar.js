import React from 'react'
import {Link, useLocation} from 'react-router-dom'

import {Consumer} from '../../Contexts/ThemeContext'

const Navbar = ({onMouseEnter, onMouseLeave}) => {
    const {pathname} = useLocation();

    return (
        <ul className="nav collapsable-nav sticky" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <li className="nav-item collapsable-nav-item collapsable-nav-item-main" onClick={onMouseLeave}>
                <Link to="/"className={pathname === "/" ? "current-page" : ""}>home</Link>
            </li>
            <li className="nav-item collapsable-nav-item collapsable-nav-item-main" onClick={onMouseLeave}>
                <Link to="/about-us" className={pathname === "/about-us" ? "current-page" : ""}>about us</Link>
            </li>
            <li className="nav-item collapsable-nav-item collapsable-nav-item-main" onClick={onMouseLeave}>
                <Link to="/contact-us" className={pathname === "/contact-us" ? "current-page" : ""}>contact</Link>
            </li>
            <Consumer>
                {({toggleTheme}) => (
                    <li className="nav-item collapsable-nav-item" onClick={() => {toggleTheme(); onMouseLeave()}}>
                        <a href="#">switch theme</a>
                    </li>
                )}
            </Consumer>
        </ul>
    )
}

export default Navbar