import React from 'react'
import bookshop from './bookshop.png';

export default function Bookshop() {
    return (
        <div>
            <div className="project-container-single bookshop">
            <h2 className="project-title">Local Bookshop Inventory</h2>
            <a href="https://mysterious-plateau-96484.herokuapp.com/"><img className="bookshop-project-image" src={bookshop} alt="" /></a>
            </div>
            <ul>
                <li>Made using MongoDB, Express, and Node.js</li>
                <li>Features user authentication and authorisation with PassportJS</li>
                <li>User passwords are hashed using bcryptjs</li>
                <li>Hosted on Heroku</li>
                <li>This project can also be thought of as a demonstration of my technical progression since creating the 'Basic Library' project.</li>
            </ul>
        </div>
    )
}
