import React from 'react'
import ContentTitle from './Design-Components/ContentTitle'
import BorderBoxImg from './Design-Components/BorderBoxImg'
import InfoCard from './Design-Components/InfoCard'


function AboutUs () {
    return (
        <>
            <ContentTitle 
                title="About us." 
                detail="We’re two brothers from Chicago. We can help you with SEO, SEM, content marketing and whatever else." 
            />
            <BorderBoxImg url="/Images/about-me.jpg" alt="goggleMan" className="content-img content-img-border"/>
            <div className="content-main">
                <InfoCard className="about-us-info-card" ruleClass="left-align-rule" title="We're really great guys" >
                    <p>We grew up in downtown Chicago, and we used to play in a band. Jake loves fried chicken, and Elwood loves dry white toast.</p>
                    <p>While the band didn't make it, the hard work we put in trying to promote it sure did. Like a lot of people, we needed a website, and we needed to rank. The "experts" didn't seem to know what they were talking about, so we figured it out on our own.</p>
                </InfoCard> 
                <InfoCard className="about-us-info-card" ruleClass="left-align-rule" title="Getting in touch with us" >
                    <p>Honestly most people in this industry seem to be full of crap. We don't care what you've heard, or what others have told you, we get results and at the end of the day, what else matters?</p>
                    <p>So sure, maybe we're a bit different from what you'd expect, but if you want to rank, market, and build your way to the top, we're the brothers for you.</p>
                </InfoCard> 
            </div>
        </>
    )
}

export default AboutUs