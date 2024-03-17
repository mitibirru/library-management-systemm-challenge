const Book = require('../models/book');
const Event = require('../models/event');

const getBooks = async (req, res) => {
	try {
		const books = await Book.find();
		res.status(200).json({
			success: true,
			data: {
				books
			}
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			error: 'Oops! Failed to fetch books'
		});
	}
};

const pushBooks = async (req, res) => {
	try {
		const books = await Book.create(req.body.books);
		res.status(201).json({
			success: true,
			data: {}
		});

		await books.save();
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error
		});
	}
};

const rentBook = async (req, res) => {
	try {
		const bookId = req.params.bookId;
		const { memberId, date } = req.body;

		const event = await Event.create({
			bookId,
			eventDate: date || new Date(),
			eventType: 'checkout',
			memberId
		});

		const book = await Book.findById(bookId);
		if (book.numberOfCopies > 0) await Book.findByIdAndUpdate(bookId, { numberOfCopies: book.numberOfCopies - 1 });

		await event.save();

		res.status(201).json({
			success: true,
			data: 'Book rented successfully'
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			error: error
		});
	}
};

const returnBook = async (req, res) => {
	try {
		const bookId = req.params.bookId;
		const { memberId, date } = req.body;

		const event = await Event.create({
			bookId,
			eventDate: date || new Date(),
			eventType: 'return',
			memberId
		});

		await event.save();

		res.status(201).json({
			success: true,
			data: 'Book returned successfully'
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			error: error
		});
	}
};

module.exports = { getBooks, pushBooks, rentBook, returnBook };
