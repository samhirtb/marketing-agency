import React, {useState} from 'react';
import {Route, Switch, useLocation} from 'react-router-dom'

import {Consumer} from './Contexts/ThemeContext'

import Banner from './Components/Banner'
import Header from './Components/Header'
import HomeContent from './Components/HomeContent'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'
import CollapsedNavbar from './Components/Design-Components/CollapsedNavbar'
import ScrollToTop from './Components/Control-Components/ScrollToTop.js'

import './CSS/styles.css';

function App() {
  const [isNavBarToggled, setIsNavBarToggled] = useState(false)
  const {pathname} = useLocation();

  const handleMouseEnter = () => setIsNavBarToggled(true)
  const handleMouseLeave = () => setIsNavBarToggled(false)
  const toggleCollapsedNavbar = () => setIsNavBarToggled(!isNavBarToggled)

  return (
    <Consumer>
      {({theme}) => (
        <div className="grid" style={theme.background}>
          <ScrollToTop />
          <Switch>
            <Route exact path="/"> <Banner /> </Route>
            <Route path="/"> <Header /> </Route>
          </Switch>

          <button aria-label="Open navigation" 
            className={`nav-drop-down ${isNavBarToggled ? "nav-drop-down-highlighted" : ""} ${pathname !== "/" ? "sticky" : ""}`} 
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onTouchStart={toggleCollapsedNavbar}
          >&#9776;</button>
          {isNavBarToggled ? <CollapsedNavbar onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></CollapsedNavbar> : null}
          
          <Switch>
            <Route exact path="/"> <HomeContent /> </Route>
            <Route path="/about-us"> <AboutUs /> </Route>
            <Route path="/contact-us"> <ContactUs /> </Route>
          </Switch>

          <Footer />
          <button className="go-to-top-button" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>&#8249;</button>
        </div>
      )}
    </Consumer>
  );
}

export default App;