const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
	bookName: { type: String, required: true },
	numberOfCopies: { type: Number, required: true, default: 1 }
});

module.exports = mongoose.model('Book', BookSchema);
