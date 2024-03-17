const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
	memberName: { type: String, required: true }
	// memberId: {type: Number, unique: true, required: true},
});

module.exports = mongoose.model('Member', MemberSchema);
