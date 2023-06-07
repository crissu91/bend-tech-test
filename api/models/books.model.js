const db = require('../../db/connection')

exports.selectBooks = () => {
    return db.query(`SELECT * FROM books;`)
    .then((books) => {
        return books.rows
    })
}

//get selectbooksbyid 