const express=require('express');
// const app=express();
const Batch=require('../models/batch.models.js');
const router = express.Router()

router.post("",async(req,res)=>{
    try {
        const user=await Batch.create(req.body)
        return res.status(200).send(user)
    } catch (error) {
        console.log(error);
    }
});

module.exports=router;