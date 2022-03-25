const express=require('express');
// const app=express();
const Student=require('../models/student.models.js');
const router = express.Router()

router.post("",async(req,res)=>{
    try {
        const user=await Student.create(req.body)
        return res.status(200).send(user)
    } catch (error) {
        console.log(error);
    }
});


// all data of stdudent who secured max marks

app.get("/:id",async(req,res)=>{
    try {
        const evaluation=await evaluation.find().sort({age:-1}).limit(1).lean()
        return res.status(200).send(evaluation)
    } catch (error) {
        console.log(error);
    }
});


module.exports=router;