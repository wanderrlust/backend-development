const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt', {
	encoding: 'utf8',
	highWaterMark: 32000,
});

stream.on('data', (result) => {
	console.log('stream started')
	console.log(result);
});
stream.on('error', (err) => console.log(err));
