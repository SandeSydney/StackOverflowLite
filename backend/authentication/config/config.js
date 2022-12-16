const mssql = require("mssql")
const dotenv = require("dotenv")
dotenv.config()

const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: "localhost",
    pool:{
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true,
        trustServerCertificate: true,
    }
}

mssql.connect(sqlConfig).then(pool=>{
    if(pool.connected){
        console.log(`Auth Service connected to ${process.env.DB_NAME}`);
    }
}).catch(err=>{
    console.log(err);
})

module.exports = {
    sqlConfig
}