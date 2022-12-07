import React from 'react'

function Answerform() {
  const handleSubmit = (event)=>{
    event.preventDefault()
  }
  return (
    <form className='answer-form'>
      <div className="form-element">
        <textarea name="answer" id="answer-textarea" cols="" rows="2" placeholder='Type your answer here...'></textarea>
      </div>
      <div className="formBtns">
        <button className='btnReset' type="reset">Reset</button>
        <button className='btnSubmit' type="submit" onSubmit={handleSubmit}>Submit</button>
      </div>
    </form>
  )
}

export default Answerform