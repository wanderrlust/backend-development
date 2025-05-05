const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
	res.json(products);
});

app.listen(5500, () => {
	console.log('server listening on port 5500');
});
