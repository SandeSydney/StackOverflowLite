const { loginUser, signupUser, verifyUser } = require("../controller/index")
const {Router} = require("express")

const router = Router()
router.post("/login", loginUser)
router.post("/signup", signupUser)
router.get("/verify-user", verifyUser)

module.exports = {
    router
}