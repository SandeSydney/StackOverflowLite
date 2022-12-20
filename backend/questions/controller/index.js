const { v4 } = require("uuid")
const mssql = require("mssql")
const sqlConfig = require("../config/config")

const getQuestions = async (req, res) => {
    try {
        const pool = await mssql.connect(sqlConfig)
        const questions = await (await pool.request()
            .execute("usp_GetAllQuestions")
        ).recordset

        if (questions.length) {
            res.status(200).send(questions)
        } else {
            res.status(404).send({ message: "No questions present" })
        }
    } catch (error) {
        return res.status(404).send({ error: error.message })
    }
}

const getQuestionById = async (req, res) => {
    try {
        const { question_id } = req.params
        const pool = await mssql.connect(sqlConfig)
        const question = await (await pool.request()
            .input("question_id", question_id)
            .execute("usp_GetQuestionById")
        ).recordset[0]

        if (question) {
            res.status(200).send(question)
        } else {
            res.status(404).send({ message: "The question does not exist!" })
        }
    } catch (error) {
        return res.status(404).send({ error: error.message })
    }
}

const getQuestionAuthor = async (req, res) => {
    try {
        const { question_id } = req.params
        const pool = await mssql.connect(sqlConfig)
        const author = await (await pool.request()
            .input("question_id", question_id)
            .execute("usp_GetQuestionAuthor")
        ).recordset[0]

        if (author) {
            res.status(200).send(author)
        }
    } catch (error) {
        return res.status(404).send({ error: error.message })
    }
}

const getUserQuestions = async (req, res) => {
    try {
        const user_id = req.headers['user_id']
        const pool = await mssql.connect(sqlConfig)
        const questions = await (await pool.request()
            .input("user_id", user_id)
            .execute("usp_GetQuestionsByOneUser")
        ).recordset

        if (questions.length) {
            res.status(200).send(questions)
        } else{
            res.status(404).send({"message":"You havent posted any question."})
        }
    } catch (error) {
        return res.status(404).send({error: error.message})
    }
}

const addUpdateQuestion = async (req, res) => {
    try {
        const user_id = req.headers['user_id']
        const question_id = v4()
        const question_date = new Date()
        const { subject, question } = req.body
        const pool = await mssql.connect(sqlConfig)
        await pool.request()
            .input("question_id", question_id)
            .input("user_id", user_id)
            .input("subject", subject)
            .input("question_date", question_date)
            .input("question", question)
            .execute("usp_InsertUpdateQuestion")
        res.status(201).send({ message: "Question posted successfully!" })
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}

const deleteQuestion = async (req, res) => {
    try {
        const { question_id } = req.params
        const pool = await mssql.connect(sqlConfig)
        const question = await (await pool.request()
            .input("question_id", question_id)
            .execute("usp_GetQuestionById")
        ).recordset[0]

        if (question) {
            await pool.request()
                .input("question_id", question_id)
                .execute("usp_DeleteQuestion")
            res.status(200).send({ message: "Question deleted!" })
        } else {
            {
                res.status(404).send({ message: "Question doesn't exist" })
            }
        }
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}





/* ***********************************************************************************************
**************************************************************************************************/

const getQuestionAnswers = async (req, res) => {
    try {
        const { question_id } = req.params
        const pool = await mssql.connect(sqlConfig)
        const answers = await (await pool.request()
            .input("question_id", question_id)
            .execute("usp_GetQuestionAnswer")
        ).recordset

        if (answers.length) {
            res.status(200).send(answers)
        } else {
            res.status(404).send({ message: "No answers present." })
        }
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}


const getAnswerById = async (req, res) => {
    try {
        const { answer_id } = req.params
        const pool = await mssql.connect(sqlConfig)
        const answer = await (await pool.request()
            .input("answer_id", answer_id)
            .execute("usp_GetAnswerById")
        ).recordset[0]

        if (answer) {
            res.status(200).send(answer)
        } else {
            res.status(404).send({ message: "Answer not found!" })
        }
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}


const addUpdateAnswer = async (req, res) => {
    const user_id = req.headers['user_id']
    const { question_id } = req.params
    const { answer_id, answer, upvotes, downvotes, IsValid } = req.body
    const answer_date = new Date()
    const pool = await mssql.connect(sqlConfig)
    await pool.request()
        .input("answer_id", answer_id)
        .input("question_id", question_id)
        .input("user_id", user_id)
        .input("answer_date", answer_date)
        .input("answer", answer)
        .input("upvotes", upvotes)
        .input("downvotes", downvotes)
        .input("IsValid", IsValid)
        .execute("usp_InsertUpdateAnswer")
    res.status(201).send({ message: "Answer posted successfully!" })
}

const deleteAnswer = async (req, res) => {
    try {
        const { answer_id } = req.params
        const pool = await mssql.connect(sqlConfig)
        const answer = await (await pool.request()
            .input("answer_id", answer_id)
            .execute("usp_GetAnswerById")
        ).recordset[0]

        if (answer) {
            await pool.request()
                .input("answer_id", answer_id)
                .execute("usp_DeleteAnswer")
            res.status(200).send("Answer deleted!")
        } else {
            return res.status(404).send({ message: "Answer not found!" })
        }
    } catch (error) {
        return res.status(404).send({ error: error.message })
    }
}






/* ***********************************************************************************************
**************************************************************************************************/

const getAnswerComments = async (req, res) => {
    try {
        const { answer_id } = req.params
        const pool = await mssql.connect(sqlConfig)
        const comments = await (await pool.request()
            .input("answer_id", answer_id)
            .execute("usp_GetAnswerComments")
        ).recordset

        if (comments.length) {
            res.status(200).send(comments)
        } else {
            res.status(404).send({ message: "No comments present." })
        }
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}

const addUpdateComment = async (req, res) => {
    try {
        const user_id = req.headers['user_id']
        const { question_id, answer_id } = req.params
        const { comment_id, comment } = req.body
        const comment_date = new Date()
        const pool = await mssql.connect(sqlConfig)
        await pool.request()
            .input("comment_id", comment_id)
            .input("comment", comment)
            .input("comment_date", comment_date)
            .input("answer_id", answer_id)
            .input("question_id", question_id)
            .input("user_id", user_id)
            .execute("usp_InsertUpdateComments")
        res.status(201).send({ message: "Comment added successfully!" })
    } catch (error) {
        return res.status(404).send({ error: error.message })
    }
}


const deleteComment = async (req, res) => {
    try {
        const { comment_id } = req.params
        const pool = await mssql.connect(sqlConfig)
        const comment = await (await pool.request()
            .input("comment_id", comment_id)
            .execute("usp_GetCommentById")
        ).recordset[0]

        if (comment) {
            await pool.request()
                .input("comment_id", comment_id)
                .execute("usp_DeleteComment")
            res.status(404).send({ message: "Comment Deleted" })
        } else {
            res.status(404).send({ message: "Comment Unavailable!" })
        }
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}


/* ***********************************************************************************************
**************************************************************************************************/


module.exports = {
    addUpdateQuestion,
    getQuestions,
    getQuestionById,
    getUserQuestions,
    getQuestionAuthor,
    deleteQuestion,
    getQuestionAnswers,
    addUpdateAnswer,
    deleteAnswer,
    getAnswerById,
    getAnswerComments,
    addUpdateComment,
    deleteComment
}