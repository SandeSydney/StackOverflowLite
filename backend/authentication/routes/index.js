const { loginUser, signupUser, verifyUser, getUserById } = require("../controller/index")
const { Router } = require("express")

const router = Router()
router.post("/login", loginUser)
router.post("/signup", signupUser)
router.get("/verify-user", verifyUser)
router.get("/:user_id", getUserById)

module.exports = {
    router
}