const express = require('express');
const app = express();

const logger = (req, res, next) => {
	const method = req.method;
	const url = req.url;
	const time = new Date().getFullYear();
	console.log(method, url, time);
	next();
};

app.get('/', logger, (req, res) => {
	res.send('Home');
});
app.get('/about', logger, (req, res) => {
	res.send('About');
});

app.listen(5500, () => {
	console.log('server listening on port 5500');
});
