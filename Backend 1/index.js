const express = require('express');
const app = express();

app.get("/",(req,res)=>{
res.send("Hello From Server")
})

app.get("/login",(req,res)=>{
res.send("Login successful")
})


app.listen(4000, () => {
    console.log("server is running");
})