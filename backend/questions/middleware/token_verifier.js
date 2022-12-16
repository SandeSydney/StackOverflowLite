const dotenv = require("dotenv").config()
const jwt = require("jsonwebtoken")
const axios = require("axios")

const token_verifier = async (req, res, next) => {
    try {
        const token = req.headers['Authorization'] || req.headers['X-Auth-Token']

        if(token){
            await axios.get("http://localhost:4040/users/verify-user")
            .then( response=>{
                if(response.data){
                    return next()
                } else{
                    return res.status(403).send("forbidden")
                }
            })
        }
    } catch (error) {
        return res.status(404).send({ error: error.message })
    }
    next()
}


module.exports = {
    token_verifier
}