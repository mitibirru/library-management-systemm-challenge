const router = require('express').Router();

const { pushMembers, getMembers } = require('../controllers/members');

router.get('/', getMembers);
router.post('/', pushMembers);

module.exports = router;
