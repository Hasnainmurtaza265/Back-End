const express = require('express');
const app = express()


// Routes
app.get('/',(req,res)=>{
res.send("Hello World")
})
// Running Server
app.listen(4000, () => {
    console.log("Server is running");

})