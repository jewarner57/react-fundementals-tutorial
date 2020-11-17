// src/Project.js

import React from 'react'

function POPOSSpace(props) {
    return (
        <div>
            <img src={`${process.env.PUBLIC_URL}images/${props.image}`} width="300" height="300" alt="Hello" />
            <h1>{props.name}</h1>
            <div>{props.saddress}</div>
        </div>

    )
}

export default POPOSSpace