const express = require("express")
const app= express()
const cors=require('cors')
require('dotenv').config()
const port=process.env.PORT || 4000;
const path=require('path')
const MONGO_URI=process.env.MONGO_URI


app.use(cors())
 

const __dirname1=path.resolve()
console.log(__dirname);
console.log(__dirname1);
const buildFile=path.join(__dirname1,"/client/build/index.html")
console.log(buildFile);
const buildFolder=path.join(__dirname1,'/client/build')
console.log(buildFolder);
const NODE_ENV=process.env.NODE_ENV || "development";

if(NODE_ENV ==="development"){
    console.log('trrr');
    app.use(express.static(path.join(__dirname1,'/client/build')))
    app.get('*',(req,res)=>{
        res.sendFile(buildFile)
    })
    
    // app.get("*",(req,res)=>{
    //     res.send("html is working")
    // })
    
} else {
    app.get("/",(req,res)=>{
        res.send("API is running successfully")
    })
    
}

app.listen(port,()=>{
    console.log("app is running");
})