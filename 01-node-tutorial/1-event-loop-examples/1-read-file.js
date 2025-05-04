const { readFile } = require('fs');

console.log('Started a first task');

readFile('./content/first.txt', 'utf-8', (err, result) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(result);
	console.log('Competed first task!');
});
console.log('Starting next task');
