// api/products.js

const express = require('express');
const app = express();

app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' }
  ];
  res.json(products);
});

module.exports = app;
