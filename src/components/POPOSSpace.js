// src/Project.js

import React from 'react'
import './POPOSSpace.css'
import { Link } from 'react-router-dom'


function POPOSSpace(props) {
    return (
        <div className="POPOSSpace">
            <Link to={`/details/${props.id}`}>
                <img src={`${process.env.PUBLIC_URL}images/${props.image}`} width="300" height="300" alt="Hello" />
            </Link>
            <h1>{props.name}</h1>
            <div>{props.address}</div>
            <div className="hours">{props.hours}</div>
        </div>

    )
}

export default POPOSSpace