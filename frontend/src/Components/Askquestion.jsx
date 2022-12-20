import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addNewQuestion } from '../Features/questionsSlice'
import BackButton from './BackButton'

function Askquestion() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const subjRef = useRef(null)
    const questionRef = useRef(null)

    const handleBack = () => {
        navigate("/home")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (subjRef.current.value.trim() && questionRef.current.value.trim()) {
            const initialQuestion = {
                subject: subjRef.current.value,
                question: questionRef.current.value
            }

            dispatch(addNewQuestion(initialQuestion))

            subjRef.current.value = 'software dev'
            questionRef.current.value = ''
            navigate("/home")
        } else {
            console.log("Can't submit empty values!");
        }
    }

    return (
        <div className='form-div'>
            <BackButton handleBack={handleBack} />
            <p>You have a question? Type it in the form and submit is it to get responses.</p>
            <form className='ask-form'>
                <div className="form-element">
                    <label htmlFor="Subject">Subject:</label>
                    <select ref={subjRef} name="subject" id="subject">
                        <option value="Engineering">Engineering</option>
                        <option value="Medicine">Medicine</option>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Software Dev">Software Dev.</option>
                    </select>
                </div>
                <div className="form-element">
                    <label htmlFor="question">Question:</label>
                    <textarea ref={questionRef} name="question" id="question-textarea" cols="30" rows="8" placeholder='Type your question here...'></textarea>
                </div>
                <div className="formBtns">
                    <button className='btnReset' type="reset">Reset</button>
                    <button className='btnSubmit' type="submit" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Askquestion