import React from 'react'
import Bookshop from './Bookshop/Bookshop.js';
import Google from './Google/Google.js';
import OldLibrary from './OldLibrary/OldLibrary.js';
import Weather from './Weather/Weather.js';

export default function Projects() {
    return (
        <div className="projects-container">
            <h1 className="projects-container-title">Projects</h1>
            <Bookshop />
            <Weather />
            <Google />
            <OldLibrary />
        </div>
    )
}
