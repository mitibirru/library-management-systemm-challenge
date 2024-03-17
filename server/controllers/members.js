const Member = require('../models/member');

const pushMembers = async (req, res) => {
	try {
		const members = await Member.create(req.body.members);
		await members.save();
		res.status(201).json({
			success: true,
			data: {}
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error
		});
	}
};

const getMembers = async (req, res) => {
	try {
		const members = await Member.find();
		res.status(200).json({
			success: true,
			data: {
				members
			}
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			error: 'Oops! Failed to fetch members'
		});
	}
};

module.exports = { pushMembers, getMembers };
