 const {selectBooks, selectBooksById} = require('../models/books.model')

exports.getBooks = (req, res, next) => {
    selectBooks().then((books) => {
        res.status(200).send({books})
    })
}

exports.getBookById = (req, res, next) => {
    const {id} = req.params
    selectBooksById(id)
    .then((book) => {
        res.status(200).send({book})
    })
    .catch(next)
}