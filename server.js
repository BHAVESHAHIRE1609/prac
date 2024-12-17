const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send("HEllo")
})

app.listen(4000,'0.0.0.0',()=>{
    console.log("Server is on")
})