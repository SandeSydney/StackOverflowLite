import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addAnswer } from '../Features/answersSlice'

function Answerform() {

  const dispatch = useDispatch()

  const answerRef = useRef(null)

  const { question_id } = useParams()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (answerRef.current.value.trim()) {
      const answer_details = {
        answer: answerRef.current.value,
        upvotes: 0,
        downvotes: 0,
        IsValid: 0
      }

      dispatch(addAnswer(answer_details, question_id))

      answerRef.current.value = ''
    } else {
      console.log("Supply an answer first!");
    }

  }
  return (
    <form className='answer-form'>
      <div className="form-element">
        <textarea ref={answerRef} name="answer" id="answer-textarea" cols="" rows="2" placeholder='Type your answer here...'></textarea>
      </div>
      <div className="formBtns">
        <button className='btnReset' type="reset">Reset</button>
        <button className='btnSubmit' type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </form >
  )
}

export default Answerform