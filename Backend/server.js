const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config();

const app=express();
const PORT=process.env.PORT ||3000;

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Connected to Mongodb"))
.catch((err)=>console.log(err))

app.get('/',(req,res)=>{
    res.send("Vitatrack Backend is running")
})

// app.get('/api/status',(req,res)=>{
//     res.json({status:"API is working fine"})
// })

app.listen(PORT,()=>{
    console.log(`Server is runnning on port ${PORT}`)
})