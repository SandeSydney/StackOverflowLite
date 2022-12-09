const { loginUser, signupUser } = require("../controller/index")
const router = require("express").Router()

router.get("/login", loginUser)
router.post("/signup", signupUser)

module.exports = {
    router
}