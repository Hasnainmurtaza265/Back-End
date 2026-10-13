const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;




app.get("/user", (req, res) => {
    res.send('request from get')
})
app.post("/signup", (req, res) => {
    res.send("request from signup")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

})