import React from 'react'

function Title(props) {
    return (
        <div className="titleBackground">
            <h1 className="title">{props.title}</h1>
        </div>
    )
}

export default Title