import React from 'react'
import {ThemeContextConsumer} from '../../Contexts/ThemeContext'

/* Following the children pattern */
const InfoCard = ({theme, props}) => {
    return (
        <div className={`${props.className}`} style={theme.text}>
            <h3 className="info-card-title">{props.title}</h3>
            <hr className={`themed-rule ${props.ruleClass}`}/>
            {props.children}
        </div>
    )
}

export default ThemeContextConsumer(InfoCard)