const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Hello From Server")
})

app.get("/login", (req, res) => {
    res.send("Login successful")
})

app.get("/user", (req, res) => {
    res.json(
        {
            name: "Hasnain",
            age: 18,
            role: "Developer"

        }
    )
})


app.get("/user/:id", (req, res) => {
    res.json(
        {
            name: "Hasnain",
            age: 18,
            role: "Developer",
            userId: req.params.id,

        }
    )
})

app.listen(4000, () => {
    console.log("server is running");
})