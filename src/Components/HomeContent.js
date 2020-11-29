import React from 'react'
import InfoCard from './Design-Components/InfoCard'


function HomeContent () {
    return (
        <>
            <InfoCard className = "home-content-info-card grid-col-1" title="About Us" ruleClass="home-content-rule">
                <p>We grew up in downtown Chicago, and we used to play in a band. <strong>Jake loves fried chicken,</strong> and <strong>Elwood loves dry white toast.</strong></p>
            </InfoCard>
            <InfoCard className = "home-content-info-card grid-col-2" title="Our skills" ruleClass="home-content-rule">
                <p>Elwood is an expert in <strong>SEO, SEM, and driving from the police</strong>. Jake is our <strong>social media specialist,</strong> and he has an amazing voice.</p>
            </InfoCard>
            <InfoCard className = "home-content-info-card grid-col-3" title="Get in touch" ruleClass="home-content-rule" >
                <p>Send us an email with some info about what help you need and <strong>we’ll drive over to your place</strong> in our Bluesmobile the following day to discuss the deal.</p>
            </InfoCard>
        </>
    )
}

export default HomeContent