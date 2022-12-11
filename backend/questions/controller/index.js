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
        const { question_id} = req.params
        const pool = await mssql.connect(sqlConfig)
        const question = await (await pool.request()
            .input("question_id", question_id)
            .execute("usp_GetQuestionById")
        ).recordset

        if (question.length) {
            res.status(200).send(question)
        } else {
            res.status(404).send({ message: "The question does not exist!" })
        }
    } catch (error) {
        return res.status(404).send({ error: error.message })
    }
}

const addUpdateQuestion = async (req, res) => {
    try {
        const { question_id, user_id, subject, question_date, question } = req.body
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
        ).recordset

        if (question.length) {
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
        res.status(404).send({error: error.message})
    }
}


const getQuestionAnswers = async(req, res)=>{
    try {
        const {question_id} = req.params
        const pool = await mssql.connect(sqlConfig)
        const answers = await( await pool.request()
            .input("question_id", question_id)
            .execute("usp_GetQuestionAnswer")
        ).recordset

        if(answers.length){
            res.status(200).send(answers)
        } else{
            res.status(404).send({message:"No answers present."})
        }
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}


const addUpdateAnswer = async(req, res)=>{
    const { answer_id, question_id, user_id, answer_date, answer, upvotes, downvotes, IsValid} = req.body
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
    res.status(201).send({message:"Answer posted successfully!"})
}

module.exports = {
    addUpdateQuestion,
    getQuestions,
    getQuestionById,
    deleteQuestion,
    getQuestionAnswers,
    addUpdateAnswer
}