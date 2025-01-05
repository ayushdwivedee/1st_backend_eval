const mongoose=require("mongoose")

const url="mongodb://127.0.0.1:27017/classroom"

const connectToDB=async()=>{
    try {
        await mongoose.connect(url)
    } catch (error) {
        console.log("error occured while connecting to DB",error)
    }
}

module.exports=connectToDB