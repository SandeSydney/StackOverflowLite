import React from 'react'
import { useNavigate } from 'react-router-dom'
import back from '../Resources/back.png'

function Askquestion() {
    const navigate = useNavigate()
    const handleBack = ()=>{
        navigate("/home")
    }
    return (
        <div className='form-div'>
            <div className="back-div" onClick={handleBack}>
                <img className='btnBack' src={back} alt="Go Back" />
                <p>Back</p>
            </div>
            <p>You have a question? Type it in the form and submit is it to get responses.</p>
            <form className='ask-form'>
                <div className="form-element">
                    <label htmlFor="Subject">Subject:</label>
                    <select name="subject" id="subject">
                        <option value="engineering">Engineering</option>
                        <option value="medicine">Medicine</option>
                        <option value="agriculture">Agriculture</option>
                        <option value="software dev">Software Dev.</option>
                    </select>
                </div>
                <div className="form-element">
                    <label htmlFor="question">Question:</label>
                    <textarea name="question" id="question-textarea" cols="30" rows="8" placeholder='Type your question here...'></textarea>
                </div>
                <div className="formBtns">
                    <button className='btnReset' type="reset">Reset</button>
                    <button className='btnSubmit' type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Askquestion