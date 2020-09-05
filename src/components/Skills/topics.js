import React from 'react'

import './style.css'

function topics(props) {
    return (
        <div className="topics">
            <p className="topics__body">{props.text}</p>
            <p className="topics__values">{props.values}</p>
        </div>
    )
}

export default topics
