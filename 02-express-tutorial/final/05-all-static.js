const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'));

app.all('*', (req, res) => {
    res.status(404).send('Resource not found');
});

app.listen(5500, () => {
    console.log('server listening on port 5500');
});
