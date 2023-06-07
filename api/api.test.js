const app = require('./app');
const {seed} = require('../db/seed')
const request = require('supertest')
const db = require('../db/connection')
const testData = require('../db/data/test.data/index');

beforeEach(() => {
    return seed(testData)
});

afterAll(() => {
    return db.end()
});

describe('GET /api/books', () => {
    test('200: responds with an array of book objects', () => {
        return request(app)
        .get('/api/books')
        .expect(200)
        .then(({ body }) => {
            expect(Array.isArray(body.books)).toBe(true);
            expect(body.books.length === 5).toBe(true);
            body.books.forEach((book) => {
                expect(book).toMatchObject({
                    book_name: expect.any(String),
                    book_writer: expect.any(String)
                })
            })
        })
    })
    test('404: /api/bookz: client error of wrong URL responds with 404 not found', () => {
        return request(app)
        .get('/api/tsjhsgfg')
        .expect(404)
        .then(({body}) => {
            expect(body.msg).toBe('Not Found')
        })
    })
})


describe('GET /api/bookshops', () => {
    test('200: responds with an array of bookshop objects', () => {
        return request(app)
        .get('/api/bookshops')
        .expect(200)
        .then(({ body }) =>{
            expect(Array.isArray(body.bookshops)).toBe(true);
            expect(body.bookshops.length === 3).toBe(true);
            body.bookshops.forEach((bookshop) => {
                expect(bookshop).toMatchObject({
                    bookshop_name: expect.any(String),
                    phone_number: expect.any(String)
                })
            })
        })
    })
    test('404: /api/bookshopz: client error of wrong URL responds with 404 not found', () => {
        return request(app)
        .get('/api/bookshopz')
        .expect(404)
        .then(({body}) => {
            expect(body.msg).toBe('Not Found')
        })
    })
})

describe('GET /api/bookshops/1', () => {
    test('200: responds with an object of a bookshop that matches the id sent', () => {
        return request(app)
        .get('/api/bookshops/1')
        .expect(200)
        .then(({ body }) => {
            expect(body.bookshop.length === 1);
            expect(body.bookshop).toMatchObject({
                bookshop_id: 1,
                bookshop_name: "Broadhursts of Southport",
                phone_number: "01704532064"
            })
        })
    })
})