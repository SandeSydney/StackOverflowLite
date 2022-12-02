import React from 'react'
import userimg from '../Resources/user.png'
import userimg2 from '../Resources/user6.jpeg'

function Questionbox() {
  return (
    <>
      <div type='button' className='question-box'>
        <div className="user-details">
          <img src={userimg} alt="user profile pic" />
          <p>John</p>
          <p>Doe</p>
        </div>
        <div className="qtnAns">
          <p className='question'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident odio, animi illum laudantium ratione sunt expedita reiciendis fugiat sint dolores tempora, deleniti atque nam repudiandae praesentium ut beatae quibusdam nesciunt.
          </p>
          <button className='answer-link'>Answers (3)</button>
        </div>
      </div>
    </>
  )
}

export default Questionbox