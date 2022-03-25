//userSchema
//Users :- has all the basic details like firstName, lastName, gender, dateOfBirth, type(type will be student, admin or instructor) , createdAt, updatedAt

const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    firstName:{ type : String, required : true },
    lastName:{ type:String, required : true },
    gender: {type: Number, required:true},
    dateOfBirth:{ type:Date,required:true},
    profession:{type:String, required:true,enum:["Student","Instructor","admin"]}
},

{
versionKey:false,
timestamps:true
})

const Users=mongoose.model('User',userSchema)

module.exports=Users