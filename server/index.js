const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const book = require('./routes/book');
const member = require('./routes/member');
const event = require('./routes/event');

dotenv.config();
const PORT = process.env.PORT;
const MONGO_DB_URL = process.env.MONGO_URL;

const connect = () => {
	mongoose
		.connect(MONGO_DB_URL)
		.then(() => console.log('mongoDB connected'))
		.catch(() => console.error('mongoDB connection error'));
};

const app = express();

app.use(cors());
app.use(express.json());

app.use('/books', book);
app.use('/members', member);
app.use('/events', event);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
	connect();
});
