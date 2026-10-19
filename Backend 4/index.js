const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
app.use(express.json());



app.get("/user", (req, res) => {
    res.send('request from get')
})




app.post("/signup", (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const name = req.body.name;
    res.send({
        name: name,
        email: email
    });
    // res.send("request from signup")
})







app.get("/user/:id", (req, res) => {
    res.send(req.params.id);
})
app.get("/users", (req, res) => {
    res.send(req.query.id);
});


app.get("/product/:id", (req, res) => {
    const id = req.params.id
    res.send(`product ${id}`)
})





// API Practice

const products = [
    {
        id: 1,
        name: "Laptop",
        price: 20000
    }, {
        id: 2,
        name: "Mobile",
        price: 10000
    }, {
        id: 3,
        name: "Headphone",
        price: 3000
    }

]

// app.get('/products', (req, res) => {
//     res.send(products)
// })

app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = products.find((item) => {
        return item.id === id

    }
    )

    if (!product) {
        return res.status(404).json({
            message: "product nor found"
        })
    }
    res.send(product)
    // res.send(products.id)


})
app.post('/products', (req, res) => {
    const { name, price } = req.body;

    const newProduct = {
        id: products.length + 1,
        name: name,
        price: price
    }

    products.push(newProduct);
    console.log('product added!');
    res.status(201).json({
        message: 'product added successfully',
        product: newProduct
    })

})





app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

})