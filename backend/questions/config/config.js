const mssql = require("mssql")
const dotenv = require("dotenv").config()

const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: "localhost",
    pool:{
        max:10,
        min:0,
        idleTimeoutMillis: 30000
    },
    options:{
        encrypt: true,
        trustServerCertificate: true
    }
}

mssql.connect(sqlConfig).then(pool=>{
    if(pool.connected){
        console.log(`Question service connected to ${process.env.DB_NAME}`);
    }
}).catch(error=>{
    console.log(error);
})

module.exports = {
    sqlConfig
}