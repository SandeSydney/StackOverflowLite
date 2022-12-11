const express = require("express")
const dotenv = require("dotenv").config()
const { router } = require("./routes/routes")

const port = process.env.PORT
const app = express()
app.use(express.json())
app.use("/questions", router)

app.listen(port || 3030, ()=>{
    console.log(`Question Service running on port ${port}`);
})