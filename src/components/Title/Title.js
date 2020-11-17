import './Title.css';
import { NavLink } from 'react-router-dom'

import React from 'react'

function Title() {
    return (
        <div className="Title">
            <header>
                <h1>SFPOPOS</h1>
                <div className="Title-Subtitle">San Francisco Privately Owned Public Open Spaces</div>

                <div>
                    <NavLink activeClassName="nav-link-active"
                        className="nav-link" exact to="/">List</NavLink>
                    <NavLink activeClassName="nav-link-active"
                        className="nav-link" exact to="/about">About</NavLink>
                </div>

            </header>
        </div>
    )
}

export default Title