const mssql = require("mssql")
const { sqlConfig } = require("../config/config")
const { v4 } = require("uuid")
const bcrypt = require("bcrypt")
const dotenv = require("dotenv").config()
const jwt = require("jsonwebtoken")

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const pool = await mssql.connect(sqlConfig)
        const user = await (await pool.request()
            .input("email", email)
            .execute("usp_GetUser")
        ).recordset[0]

        if (user) {
            const comparePass = await bcrypt.compare(password, user.password)
            if (comparePass) {
                const { user_id, password, profile_picture, IsDeleted, ...payload } = user
                const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1 day" })
                return res.status(200).json({ message: "Login Successful", token, user_id: user_id })
            } else {
                return res.status(400).send({ message: "Password Incorrect!" })
            }
        } else {
            return res.status(404).send({ message: "User unavailable. Kindly sign up!" })
        }
    } catch (error) {
        return res.status(404).send({ error: error.message })
    }
}

const signupUser = async (req, res) => {
    try {
        const { user_id, username, email, password } = req.body
        const pool = await mssql.connect(sqlConfig)
        const hashed_pass = await bcrypt.hash(password, 10)
        await pool.request()
            .input("user_id", user_id)
            .input("username", username)
            .input("email", email)
            .input("password", hashed_pass)
            .execute("usp_SignupUpdateUser")
        res.status(201).json({
            message: `Successfully added ${username}!`
        })
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}


const verifyUser = async (req, res) => {
    try {
        const token = req.headers['token']
        if (!token) {
            return res.status(401).send({ message: "Access Denied. Supply a token!" })
        }

        const user = jwt.verify(token, process.env.SECRET)
        if (user) {
            return res.status(200).send(true)
        }
    } catch (error) {
        res.status(401).send(false)
    }
}

module.exports = {
    loginUser,
    signupUser,
    verifyUser
}