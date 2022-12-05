import React from 'react'
import { useNavigate } from 'react-router-dom'
import Answerbox from './Answerbox'
import Answerform from './Answerform'
import BackButton from './BackButton'
import Questionbox from './Questionbox'

function Answerholder() {
  const navigate = useNavigate()
  const handleBack = ()=>{
    navigate("/home")
  }
  return (
    <>
      <BackButton handleBack={handleBack} />
      <Questionbox />
      <Answerform />
      <Answerbox />
      <Answerbox />
      <Answerbox />
    </>
  )
}

export default Answerholder