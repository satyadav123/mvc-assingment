//studentShema
//Student :- has fields like roll id, current batch, createdAt, updatedAt
const mongoose=require('mongoose');

const studentSchema=new mongoose.Schema({
    roll_no:{ type: Number,required:true},

    current_batch:{ type:String, requird:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true},
},
{
versionKey:false,
timestamps:true
})

const Students=mongoose.model('student',studentSchema)
module.exports=Students