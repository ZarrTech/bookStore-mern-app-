const express = require('express')

const router = express.Router()

const { getAllBooks, getSingleBook, postBook, updateBook, deleteBook } =
    require('../controllers/books');
  
router.route('/').get(getAllBooks).post(postBook)
router.route('/:id').get(getSingleBook).patch(updateBook).delete(deleteBook)

module.exports = router