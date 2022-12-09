const { loginUser, signupUser } = require("../controller/index")
const {Router} = require("express")

const router = Router()
router.get("/login", loginUser)
router.post("/signup", signupUser)

module.exports = {
    router
}