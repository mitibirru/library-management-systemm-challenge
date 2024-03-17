const Event = require('../models/event');

const pushEvents = async (req, res) => {
	try {
		const events = await Event.create(req.body.events);
		await events.save();
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

const getEvents = async (req, res) => {
	try {
		const events = await Event.find();
		res.status(200).json({
			success: true,
			data: {
				events
			}
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			error: 'Oops! Failed to fetch events'
		});
	}
};

module.exports = { pushEvents, getEvents };
