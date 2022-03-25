const mongoose=require('mongoose');

const connect=()=>{
    try{
    return mongoose.connect("mongodb://127.0.0.1:27017/evaluations")
    }
    catch(err){
        console.log(err)
    }
    }
    module.exports=connect