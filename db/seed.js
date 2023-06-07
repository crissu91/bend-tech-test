const {arrangeData} = require('../utils/utils.js')
const db = require('./connection.js')
const format = require('pg-format')

function seed({books, bookshops}) {
    return db
    .query('DROP TABLE IF EXISTS books;')
    .then(() => {
        return db.query('DROP TABLE IF EXISTS bookshops;');
    })
    .then(() => {
        return createBooks();
    })
    .then(() => {
        return createBookshops();
    })
    .then(() => {
        return insertBooks(books)
    })
    .then(() => {
        return insertBookshops(bookshops)
    })
}

function createBooks() {
    return db.query('CREATE TABLE books (book_id SERIAL PRIMARY KEY, book_name VARCHAR(100) NOT NULL, book_writer VARCHAR(100) NOT NULL)')
};

function createBookshops() {
    return db.query('CREATE TABLE bookshops (bookshop_id SERIAL PRIMARY KEY, bookshop_name VARCHAR(100) NOT NULL, phone_number VARCHAR(11) NOT NULL)')
}

function insertBooks(books) {
    const sortedBooks = arrangeData(books)
    const insertValues = format('INSERT INTO books (book_title, book_author) VALUES %L RETURNING *;', sortedBooks)
    return db.query(insertValues)
}

function insertBookshops(bookshops) {
    const sortedBookshops = arrangeData(bookshops)
    const insertValues = format('INSERT INTO bookshops (bookshop_name, phone_number) VALUES %L;', sortedBookshops)
    return db.query(insertValues)
}

module.exports = { seed }