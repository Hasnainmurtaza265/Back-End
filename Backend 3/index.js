const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
app.use(express.json())



app.get("/user", (req, res) => {
    res.send('request from get')
})




app.post("/signup", (req, res) => {
    console.log(req.body);
    res.send(req.body.email);
    // res.send("request from signup")
})







app.get("/user/:id", (req, res) => {
    res.send(req.params.id);
})
app.get("/users", (req, res) => {
    res.send(req.query.id);
});


app.get("/product/:id", (req, res) => {
    const id=req.params.id
    res.send(`product ${id}`)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

})