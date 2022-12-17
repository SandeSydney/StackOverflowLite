const dotenv = require("dotenv").config()
const jwt = require("jsonwebtoken")
const axios = require("axios")

const token_verifier = async (req, res, next) => {
    try {
        const token = req.headers['token'] || req.headers['authorization'] || req.headers['x-auth-token']

        if (token) {
            await axios.get("http://localhost:4040/users/verify-user", { headers: { token: token } })
                .then(response => {
                    if (response.data) {
                        return next()
                    } else {
                        return res.status(403).send("forbidden")
                    }
                })
        } else {
            res.status(404).send({ message: "Kindly supply token." })
        }
    } catch (error) {
        return res.status(404).send({ error: error.message })
    }
}


module.exports = {
    token_verifier
}