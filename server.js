const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(express.static('.'));

let products = [];

app.get('/products', (req, res) => {
    res.json(products);
});

app.post('/add-product', (req, res) => {
    const product = {id: Date.now(), name: req.body.name};
    products.push(product);
    res.json(product);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server started on port ' + PORT));
