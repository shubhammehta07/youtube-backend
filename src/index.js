import connectDB from "./db/index.js";
import dotenv  from 'dotenv'


dotenv.config({
    path : './env'
})


connectDB()



















/*
// here connect database in mongoDB through mongoose 
( async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("ERROR:-",error)
        throw error;
       })
        app.listen(process.env.PORT,()=>{
            console.log(`server is listing on ${process.env.PORT} port.`)
        })
    } catch (error) {
        console.error("ERROR :-",error)
        throw error;
    }
})()   // ()() here is iffi method for emidiate excute functuion

*/