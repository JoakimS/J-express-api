const express=require('express')()

express.get('/',(req,res)=>{
    res.send("hello from outside")
})

express.listen(9000,()=>{
    console.log("run baby")
})