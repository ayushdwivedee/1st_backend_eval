const mongoose=require("mongoose")
const classSchema=mongoose.Schema({
    name:String,
    subject:String,
    teacherName:String,
    startDate:String,
    endDate:String

})

const classModel=mongoose.model("Class",classSchema)

module.exports=classModel