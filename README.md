# Tech Tests

You will need to create a `.env.production` file to contain the `DATABASE_URL` when you first clone this repo. Ask Niamh for the URL if it has not already been provided for you.

This repo is for mentors to be able to issue timed challenges to mentees.

Below you will see a list of challenges that you can set out for your mentees based on the api. Issue the challenges based on what will benefit them the most at this point. 

Api link: https://reading-books-api.onrender.com/api/bookshops 

## set-up (for testing)

`npm run setup-dbs`
`npm run seed` (will not work until section 1 is completed, so will need to be completed by mentor if skipping)
`npm run test`

#### 1: seed.js

a: wrong column names for insertBooks (book_title = book_name // book_author = book_writer)

b: missing 'RETURNING *' on insertBookshops

#### 2: models

a: sql injection in the selectBookshopById model

#### 3: building from nothing

a: build getBookById endpoint

b: build error tests
