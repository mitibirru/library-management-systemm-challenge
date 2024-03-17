const { getBooks, pushBooks, rentBook, returnBook } = require('../controllers/books');

const router = require('express').Router();

router.get('/', getBooks);
router.post('/', pushBooks);
router.post('/:bookId/rent', rentBook);
router.post('/:bookId/return', returnBook);
router.get('/hello', (req, res) => {
	res.send('hello world');
});

module.exports = router;
