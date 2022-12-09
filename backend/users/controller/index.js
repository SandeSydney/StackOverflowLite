const mssql = require("mssql")
const { sqlConfig } = require("../config/config")
const { v4 } = require("uuid")
const bcrypt = require("bcrypt")

const loginUser = async (req, res) => {
    try {

    } catch (error) {

    }
}

const signupUser = async (req, res) => {
    try {
        const { user_id, username, email, profile_picture, password } = req.body
        const pool = mssql.connect(sqlConfig)
        const hashed_pass = await bcrypt.hash(password, 10)
        await pool.request()
            .input("user_id", user_id)
            .input("username", username)
            .input("email", email)
            .input("profile_picture", profile_picture)
            .input("password", hashed_pass)
            .execute("")
        res.status(201).json({message: `Successfully added ${user.username}!`})
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}

module.exports = {
    loginUser,
    signupUser
}