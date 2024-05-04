const CustomApiError = require("../errors/customError");
const Books = require("../models/books");
const asyncWrapper = require("../middleware/async");

const getAllBooks = asyncWrapper(async (req, res, next) => {
  const books = await Books.find({});
  res.status(200).json({books:books, count:books.length});
});

const getSingleBook = asyncWrapper(async (req, res) => {
  const { id: bookId } = req.params;
  const book = await Books.findOne({ _id: bookId });
  if (!book) {
    return next(CustomApiError(`no book by with Id of ${bookId}`, 404));
  }
  res.status(201).json({ book });
});

const postBook = asyncWrapper(async (req, res) => {
  const book = await Books.create(req.body);
  res.status(201).json({ book });
});

const updateBook = asyncWrapper(async (req, res) => {
  const { id: bookId } = req.params;
  const book = await Books.findOneAndUpdate({ _id: bookId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!book) {
    return next(CustomApiError(`no book by with Id of ${bookId}`, 404));
  }
    res.status(200).json({ book });
});

const deleteBook = asyncWrapper(async (req, res) => {
  const { id: bookId } = req.params;
  const book = Books.findOneAndDelete({ _id: bookId });
  if (!book) {
    return next(CustomApiError(`no book by with Id of ${bookId}`, 404));
  }
  res.status(200).json({});
});

module.exports = {getAllBooks, getSingleBook, postBook, updateBook, deleteBook};
