const express=require("express")
const connectToDB = require("./config")
const server=express()

server.use(express.json())

const PORT=8080
server.listen(PORT,()=>{
    try {
        connectToDB()
         
        console.log(`server is running on port ${PORT} and connected to db`)
    } catch (error) {
        console.log("error occured while starting the server",error)
    }
})