const db = require('../../db/connection')

exports.selectBooks = () => {
    return db.query(`SELECT * FROM books;`)
    .then((books) => {
        return books.rows
    })
}

//get selectbooksbyid 

exports.selectBooksById = (id) => {
    return db.query(`SELECT * FROM books WHERE book_id = $1;`, [id])
    .then((bookshop) => {
        return bookshop.rows[0]
    })
}