const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => {
	res.status(200).sendFile(
		path.resolve(__dirname, './navbar-app/index.html')
	);
});

app.all('*', (req, res) => {
	res.status(404).send('Resource not found');
});

app.listen(5500, () => {
	console.log('server listening on port 5500');
});
