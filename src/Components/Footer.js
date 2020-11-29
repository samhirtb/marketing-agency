import React from 'react'
import {ThemeContextConsumer} from '../Contexts/ThemeContext'

import logo from '../logo.svg'

const Footer = ({theme}) => {
    return (
        <div className="footer" style={theme.footer}>
            <div className="container footer-container flex">
                <div className="footer-flex-col1"> 
                    <img src={logo} alt="Jake And Elwood"/>
                    <p>Two brothers from Chicago that are just trying to pay back their debt by helping others with their SEO, SEM, and Content Marketing needs.</p>
                    <br/>
                    <br/>
                    <p>© Jake&amp;Elwood 2019</p>
                </div>
                <p><i class="fab fa-facebook-square"></i>   <i class="fab fa-twitter"></i>   <i class="fab fa-instagram"></i></p>
            </div>
        </div>
    )
}

export default ThemeContextConsumer(Footer)