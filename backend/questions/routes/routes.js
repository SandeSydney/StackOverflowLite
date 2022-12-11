const { addUpdateQuestion, getQuestions, getQuestionById, deleteQuestion, getQuestionAnswers, addUpdateAnswer } = require("../controller/index")
const router = require("express").Router()

router.get("/", getQuestions)
router.get("/:question_id", getQuestionById)
router.post("/", addUpdateQuestion)
router.delete("/:question_id", deleteQuestion)

router.get("/:question_id/answers", getQuestionAnswers)
router.post("/:question_id/answers", addUpdateAnswer)

module.exports = { router }
