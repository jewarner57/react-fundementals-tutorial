// src/Project.js

import React from 'react'
import './POPOSSpace.css'

function POPOSSpace(props) {
    return (
        <div className="POPOSSpace">
            <img src={`${process.env.PUBLIC_URL}images/${props.image}`} width="300" height="300" alt="Hello" />
            <h1>{props.name}</h1>
            <div>{props.address}</div>
            <div className="hours">{props.hours}</div>
        </div>

    )
}

export default POPOSSpace