 const {selectBooks} = require('../models/books.model')

exports.getBooks = (req, res, next) => {
    selectBooks().then((books) => {
        res.status(200).send({books})
    })
}