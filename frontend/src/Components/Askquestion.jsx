import React from 'react'

function Askquestion() {
  return (
    <div className='form-div'>
        <p>You have a question? Type it in the form and submit is it to get responses.</p>
        <form>
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
                <textarea name="question" id="question-textarea" cols="30" rows="10" placeholder='Type your question here...'></textarea>
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