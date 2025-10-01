import express from "express";
import cors from "cors";
import dotenv from "dotenv";


const app=express();
const PORT=process.env.PORT || 5000;

app.get("/",(req,res)=>{
    console.log("hello wold")
})

app.listen(PORT,()=>{
    console.log(`server started @ port ${PORT}`)
})

app.use(cors())

app.use(express.json())