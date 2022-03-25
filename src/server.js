
const app=require("./index")
const connect=require("./configs/db")
app.listen(4450,async function(){
  try{
      await connect()
  }
  catch(err){
      console.log(err)
  }
    console.log("listening at 4400")
    
    })
    