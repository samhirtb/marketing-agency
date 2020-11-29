import React, {useState} from 'react'
import ContentTitle from './Design-Components/ContentTitle'
import BorderBoxImg from './Design-Components/BorderBoxImg'
import InfoCard from './Design-Components/InfoCard'
import {Consumer} from '../Contexts/ThemeContext'


function ContactUs () {
    const [form, updateForm] = useState({})

    const handleChange = (event) => {
        const {name, value} = event.target;
        updateForm({...form, [name]:value})
    }

    return (
        <>
            <ContentTitle 
                title="Contact." 
                detail="Let us know how we can help you need and we’ll drive over to your place in our Bluesmobile the following day to discuss the deal." 
            />
            <div className="contact-us-side">
                <BorderBoxImg url="/Images/contact.jpg" alt="tools" className="content-img content-img-border"/>
                <InfoCard ruleClass="left-align-rule" title="Getting in touch with us" >
                    <p>You can either use the form or send us an email. I'll get back in touch with you as soon as possible!</p>
                </InfoCard>                
            </div>
            <Consumer>
                {({theme}) => (
                    <form className="content-main form-grid">
                        <label htmlFor="fname" className="form-label fname-label" style={theme.text}>First Name</label>
                        <input id="fname" name="fname" type="text" className="form-input fname-input" onChange={handleChange}/>

                        <label htmlFor="email" className="form-label email-label" style={theme.text}>Email</label>
                        <input id="email" name="email" type="email" className="form-input email-input" onChange={handleChange}/>

                        <label htmlFor="msg" className="form-label msg-label" style={theme.text}>Message</label>
                        <textarea id="msg" name="msg" type="textarea" className="form-textarea msg-textarea" onChange={handleChange}/>

                        <button className="btn form-btn">send</button>
                    </form>
                )}
            </Consumer>
        </>
    )
}

export default ContactUs