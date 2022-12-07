const express = require('express')
const dotenv = require('dotenv').config()
require("./config/index")

const app = express()

app.use(express.json())


app.listen( process.env.PORT || 4000, ()=>{
    console.log(`Server Running on port ${process.env.PORT}`);
})