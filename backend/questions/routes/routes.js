const { addUpdateQuestion, getQuestions, getQuestionById, deleteQuestion, getQuestionAnswers, addUpdateAnswer, getAnswerById, deleteAnswer, getAnswerComments, addUpdateComment, deleteComment } = require("../controller/index")
const { token_verifier } = require("../middleware/token_verifier")
const router = require("express").Router()

router.get("/", getQuestions)
router.get("/:question_id", getQuestionById)
router.post("/", addUpdateQuestion)
router.delete("/:question_id", deleteQuestion)

router.get("/:question_id/answers", getQuestionAnswers)
router.get("/:question_id/answers/:answer_id", getAnswerById)
router.post("/:question_id/answers", addUpdateAnswer)
router.delete("/:question_id/answers/:answer_id", deleteAnswer)

router.get("/:question_id/answers/:answer_id/comments", getAnswerComments)
router.post("/:question_id/answers/:answer_id/comments", addUpdateComment)
router.delete("/:question_id/answers/:answer_id/comments/:comment_id", deleteComment)

module.exports = { router }
