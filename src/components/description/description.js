import React from 'react'

function Description(props) {
    return (
        <div className="descDiv">
            <p className="description">{props.description}</p>
        </div>
    )
}

export default Description