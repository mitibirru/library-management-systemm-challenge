const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
	eventType: { type: String, required: true, enum: ['checkout', 'return'] },
	bookId: { type: String, ref: 'Book', required: true },
	memberId: { type: String, ref: 'Member', required: true },
	eventDate: { type: Date, required: true }
});

module.exports = mongoose.model('Event', EventSchema);
