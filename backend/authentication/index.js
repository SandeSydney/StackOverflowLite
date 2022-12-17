const dotenv = require("dotenv").config()
const express = require("express")
const { router } = require("./routes/index")
const cors = require("cors")

const port = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.use("/users", router)

app.listen(port || 4040, () => {
    console.log(`Users service running on port: ${port}`);
})