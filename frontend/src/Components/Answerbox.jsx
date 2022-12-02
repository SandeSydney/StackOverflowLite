import React from 'react'

function Answerbox() {
  return (
    <div className='answer-box'>
        <div>
          <p className='answer'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident odio, animi illum laudantium ratione sunt expedita reiciendis fugiat sint dolores tempora, deleniti atque nam repudiandae praesentium ut beatae quibusdam nesciunt.
          </p>
          <p className='answer'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident odio, animi illum laudantium ratione sunt expedita reiciendis fugiat sint dolores tempora, deleniti atque nam repudiandae praesentium ut beatae quibusdam nesciunt.
          </p>
        </div>
        <div className="user-details">
          <img src={userimg2} alt="user profile pic" />
          <p>Jane</p>
          <p>Doe</p>
        </div>
      </div>
  )
}

export default Answerbox