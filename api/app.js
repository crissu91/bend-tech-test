const express = require('express')
const app = express();
const cors = require('cors')

const {getBooks} = require('./controllers/books.controller')
const {getBookshops, getBookshopById} = require('./controllers/bookshops.controller')
const {allPathErrors, handleCustomErrors, handleInternalServerErrors} = require('./controllers/errors.controller')


app.use(cors());

app.get('/api/books', getBooks)

app.get('/api/bookshops', getBookshops)
app.get('/api/bookshops/:id', getBookshopById)


app.all('*', allPathErrors)
app.use(handleCustomErrors)
app.use(handleInternalServerErrors)

module.exports = app;