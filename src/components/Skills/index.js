import React from 'react'

import Topics from './topics.js'

import './style.css'

function skills() {
    return (
        <div className="skills">
            <div className="skills__header">SK<span>I</span>LLS</div>
            <div className="skills__body">
                <div className="skills__topics">
                    <Topics text="Databases" values="MySQL" />
                    <Topics text="Front-end framework and Library" values="React.js, Bootstrap 4"/>
                    <Topics text="Languages" values="HTML/CSS , JavaScript"/>
                    <Topics text="Version control" values="Git, GitLab, Github"/>
                    <Topics text="Project Management" values="Trello"/>
                    <Topics text="State Management" values="React + Redux"/>
                    <Topics text="Cloud Services" values="Firebase"/>
                </div>
            </div>
        </div>
        
    )
}

export default skills
