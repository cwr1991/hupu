const path = require("path")
const express = require("express")
const app = express()

app.use(express.static(__dirname))

app.get("/api/index",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.json(require("./data/index"))
})
app.get("/api/community",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.json(require("./data/community"))
})

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../index.html"))
})




app.listen(8080,(err)=>{
    console.log("hupu-index-server is starting on port 8080")
})
