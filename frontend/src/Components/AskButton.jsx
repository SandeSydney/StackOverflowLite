import React from 'react'
import { useNavigate } from 'react-router-dom'
import add from '../Resources/add.png'

function AskButton() {
    const navigate = useNavigate()
    const ask = ()=>{
        navigate('/home/ask-question')
    }
    return (
        <div className="ask" onClick={ask}>
            <img className='action-button' src={add} alt="add question" />
            {/* <p>Ask</p> */}
        </div>
    )
}

export default AskButton