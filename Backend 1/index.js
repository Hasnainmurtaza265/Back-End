const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Hello From Server")
})

app.get("/login", (req, res) => {
    res.send("Login successful")
})

// app.get("/user", (req, res) => {
//     res.json(
//         {
//             name: "Hasnain",
//             age: 18,
//             role: "Developer"

//         }
//     )
// })
const products=[
        {
            id: 1,
            name: "iPhone 15",
            category: "mobile",
            price: 180000
        },
        {
            id: 2,
            name: "AirPods",
            category: "accessories",
            price: 45000
        },
        {
            id: 3,
            name: "Samsung S24",
            category: "mobile",
            price: 200000
        }
    ]

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



app.get("/user", (req, res) => {
    res.json({
        id: req.query.id
    })
})


// test API
app.get('/products', (req, res) => {
    res.send(products)
})

    app.get('/products/:id', (req, res) => {
        const product = products.find(
            (item) => item.id == req.params.id
        )
        res.send(product)

    })








app.listen(4000, () => {
    console.log("server is running");
})




