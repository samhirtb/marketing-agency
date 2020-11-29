import React from 'react'
import Navbar from './Design-Components/Navbar'
import {Link} from 'react-router-dom'

function BannerDescription () {
    return (
        <div className="banner-description">
            <h2 className="banner-main">The only marketing agency on a <span className="themed">mission from God</span>, fully dedicated to increase your web traffic.</h2>
            <p className="banner-sub">We’re two brothers from Chicago that are trying to pay back our debt. We can help you with <strong>SEO, SEM content marketing</strong> and whatever else.</p>
            <Link to="/contact-us"><button className="btn">contact us</button></Link>
        </div>
    )
}

const Banner = () => {
    return (
        <React.Fragment>
            <img className="banner" src="/Images/hero-bg.jpg" alt="HandlebarMoustacheMan" />
            <Navbar />
            <BannerDescription />
        </React.Fragment>
    )
}

export default Banner