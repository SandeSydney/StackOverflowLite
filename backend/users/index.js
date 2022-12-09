const dotenv = require("dotenv").config()
const express = require("express")
const { router } = require("./routes/index")

const port = process.env.PORT
const app = express()
app.use(express.json())
app.use("/users", router)

app.listen(port || 4040, () => {
    console.log(`Server running on port: ${port}`);
})