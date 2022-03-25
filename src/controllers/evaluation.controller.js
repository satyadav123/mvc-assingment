const express=require('express');
// const app=express();
const Evaluation=require('../models/evaluation.models.js');
const router = express.Router()

router.post("",async(req,res)=>{
    try {
        const user=await Evaluation.create(req.body)
        return res.status(200).send(user)
    } catch (error) {
        console.log(error);
    }
});


app.get("/",async(req,res)=>{
    try {
        const evaluation=await evaluation.find({}).lean().exec();
        return res.status(200).send(evaluation)
    } catch (error) {
        console.log(error);
    }
});

app.get("/:id",async(req,res)=>{
    try {
        const evaluation=await evaluation.findById(req.params.id)
        return res.status(200).send(evaluation)
    } catch (error) {
        console.log(error);
    }
});
module.exports=router;

