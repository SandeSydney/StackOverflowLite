import React from 'react'
import userimg2 from '../Resources/user6.jpeg'

function Answerbox() {
  return (
    <div className="answer-main">
      <div className='answer-box'>
        <div className='qtnAns'>
          <p className='answer'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident odio, animi illum laudantium ratione sunt expedita reiciendis fugiat sint dolores tempora, deleniti atque nam repudiandae praesentium ut beatae quibusdam nesciunt.
          </p>
          <p className='answer'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident odio, animi illum laudantium ratione sunt expedita reiciendis fugiat sint dolores tempora, deleniti atque nam repudiandae praesentium ut beatae quibusdam nesciunt.
          </p>
        </div>
        <div className="user-details">
          <img src={userimg2} alt="user profile pic" />
          <p>Jane Doe</p>
        </div>
      </div>
      <div className="answer-votes">
        <p>Upvote</p>
        <p>Downvote</p>
        <p>Comment</p>
      </div>
    </div>
  )
}

export default Answerbox