const mongoose=require('mongoose');


const evaluationShema=new mongoose.Schema({
    date_of_evaluation:{type: Date, required:true},
    insructor:{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true},

},
{
    versionKey:false,
    timestamps:true
})

const Evaluation=mongoose.model('evaluation',evaluationShema)
module.exports=Evaluation