const dotenv = require("dotenv").config()
const jwt = require("jsonwebtoken")

const token_verifier = (req, res, next) => {
    try {
        const token = req.headers['Authorization'] || req.headers['X-Auth-Token']

        if(!token){
            return res.status(401).send({message:"Access Denied. Supply a token!"})
        }
        
        const dataDecoded = jwt.verify(token, process.env.SECRET)
        req.info = dataDecoded
    } catch (error) {
        return res.status(404).send({ error: error.message })
    }
}


module.exports = {
    token_verifier
}