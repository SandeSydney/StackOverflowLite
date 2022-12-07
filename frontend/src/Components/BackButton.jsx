import React from 'react'
import back from '../Resources/back.png'

function BackButton({ handleBack }) {
    return (
        <div className="back-div" onClick={handleBack}>
            <img className='btnBack' src={back} alt="Go Back" />
        </div>
    )
}

export default BackButton