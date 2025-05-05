const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.status(200).send('Home page');
});
app.get('/about', (req, res) => {
	res.status(200).send('About page');
});
app.all('*', (req, res) => {
	res.status(404).send('<h1>Resource not found</h1>');
});

app.listen(5500, () => {
	console.log('server listening on port 5500');
});
