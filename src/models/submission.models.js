const mongoose=require('mongoose');

const submissionShema=new mongoose.Schema({
    marks:{type:Number, required:true},
             evalId:{type:mongoose.Schema.Types.ObjectId,
             ref:"evaluation",
              required:true
    },
    student_id:{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true},

    
    },
    {
        versionKey:false,
        timestamps:true
    })
    const Submission=mongoose.model('submission',submissionShema)
    module.exports=Submission