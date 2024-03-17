const router = require('express').Router();

const { pushEvents, getEvents } = require('../controllers/events');

router.post('/', pushEvents);
router.get('/', getEvents);

module.exports = router;
