const express=require("express")
const classModel = require("../Schema/class")

const classRoute=express.Router()

classRoute.post("/classes",async(req,res)=>{
    const {name,subject,teacherName,startDate,endDate}=req.body
    try {
         const classData=new classModel(name,subject,teacherName,startDate,endDate)
         await classData.save()
         res.status(201).json("msg:class scheduled",classData)
    } catch (error) {
        res.status(501).send("msg:error occured while posting on DB",error)
    }
})

module.exports=classRoute