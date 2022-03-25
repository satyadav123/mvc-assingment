const express=require("express")
const app=express()
const userController=require("./controllers/user.controller.js")
const studentController=require("./controllers/student.controller.js")
const evaluationController=require("./controllers/evaluation.controller.js")
const submissionController=require("./controllers/submission.controller.js")
const batchController=require("./controllers/batch.controller.js")





app.use("/users",userController);

app.use("/student",studentController);
app.use("/evaluation",evaluationController);
app.use("/submission",submissionController);
app.use("/batch",batchController);

module.exports=app



