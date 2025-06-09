const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//middleware
app.use(express.static('./public'));
app.use(express.json());

//routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
	try {
		await connectDB(process.env.DB_CONNECT_URL);
		console.log('Connected to the database!🎉');
		app.listen(
			port,
			console.log(`Server is running on http://localhost:${port}...`)
		);
	} catch (error) {
		console.error('Error starting the server:', error);
	}
};

start();
