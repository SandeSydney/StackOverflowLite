import React from 'react'
import add from '../Resources/add.png'

function AskButton() {
    return (
        <div className="ask">
            <img className='action-button' src={add} alt="add question" />
            <p>Ask</p>
        </div>
    )
}

export default AskButton