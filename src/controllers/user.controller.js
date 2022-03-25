const express=require('express');
// const app=express();
const User=require('../models/user.models.js');
const router = express.Router()

router.post("",async(req,res)=>{
    try {
        const user=await User.create(req.body)
        return res.status(200).send(user)
    } catch (error) {
        console.log(error);
    }
});

module.exports=router;