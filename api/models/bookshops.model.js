const db = require('../../db/connection')

exports.selectBookshops = () => {
    return db.query(`SELECT * FROM bookshops;`)
    .then((bookshops) => {
        return bookshops.rows
    })
}

exports.selectBookshopById = (id) => {
    return db.query(`SELECT * FROM bookshops WHERE bookshop_id = $1;`, [id])
    .then((bookshop) => {
        return bookshop.rows[0]
    })
}