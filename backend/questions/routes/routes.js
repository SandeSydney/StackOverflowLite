const { addUpdateQuestion, getQuestions, getQuestionById, deleteQuestion, getQuestionAnswers, addUpdateAnswer, getAnswerById, deleteAnswer } = require("../controller/index")
const router = require("express").Router()

router.get("/", getQuestions)
router.get("/:question_id", getQuestionById)
router.post("/", addUpdateQuestion)
router.delete("/:question_id", deleteQuestion)

router.get("/:question_id/answers", getQuestionAnswers)
router.get("/:question_id/answers/:answer_id", getAnswerById)
router.post("/:question_id/answers", addUpdateAnswer)
router.delete("/:question_id/answers/:answer_id", deleteAnswer)

module.exports = { router }
