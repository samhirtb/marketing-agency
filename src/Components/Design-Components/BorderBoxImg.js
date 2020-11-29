import React from 'react'

const BorderBoxImg = (props) => (
    <img src={props.url} alt={props.alt} className={`bordered-img ${props.className}`} />
)


export default BorderBoxImg