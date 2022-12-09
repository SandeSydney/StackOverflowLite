const { addUpdateQuestion, getQuestions, getQuestionById, deleteQuestion } = require("../controller/index")
const router = require("express").Router()

router.get("/", getQuestions)
router.get("/:id", getQuestionById)
router.post("/", addUpdateQuestion)
router.delete("/:id", deleteQuestion)

module.exports = { router }
