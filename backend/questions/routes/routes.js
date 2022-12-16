const { addUpdateQuestion, getQuestions, getQuestionById, deleteQuestion, getQuestionAnswers, addUpdateAnswer, getAnswerById, deleteAnswer, getAnswerComments, addUpdateComment, deleteComment } = require("../controller/index")
const { token_verifier } = require("../middleware/token_verifier")
const router = require("express").Router()

router.get("/", token_verifier, getQuestions)
router.get("/:question_id", getQuestionById)
router.post("/", token_verifier, addUpdateQuestion)
router.delete("/:question_id", token_verifier, deleteQuestion)

router.get("/:question_id/answers", getQuestionAnswers)
router.get("/:question_id/answers/:answer_id", getAnswerById)
router.post("/:question_id/answers", token_verifier, addUpdateAnswer)
router.delete("/:question_id/answers/:answer_id", token_verifier, deleteAnswer)

router.get("/:question_id/answers/:answer_id/comments", getAnswerComments)
router.post("/:question_id/answers/:answer_id/comments", token_verifier, addUpdateComment)
router.delete("/:question_id/answers/:answer_id/comments/:comment_id", token_verifier, deleteComment)

module.exports = { router }
