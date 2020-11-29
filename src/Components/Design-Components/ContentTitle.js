import React, {useRef, useEffect} from 'react'
import {ThemeContextConsumer} from '../../Contexts/ThemeContext'

const ContentTitle = ({theme, props}) => {
    const details = useRef();
    useEffect(() => {details.current.innerHTML = props.detail}, [])

    return (
        <div className="flex content-title" style={theme.text}>
            <h2 className="content-title-header">{props.title}</h2>
            <p className="content-title-detail" ref={details}></p>
            <hr className="content-title-rule"/>
        </div>
    )
}

export default ThemeContextConsumer(ContentTitle)