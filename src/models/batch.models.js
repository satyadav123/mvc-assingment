//BatchName
const mongoose=require('mongoose');

const BatchSchema=new mongoose.Schema({
    batch_name:{ type :String, required: true }
},
{

versionKey:false,
timestamps:true,

})
const BatchName=mongoose.model('batchname',BatchSchema)
module.exports=BatchName