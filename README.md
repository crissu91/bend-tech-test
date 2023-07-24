# Tech Tests

Guidance for how to use your time:

You have been given this repo as part of a tech-test. Your aim is to have a running api.

Once the time is up, you will look through this repo together and potentially work through some issues that you may have faced.

# Setting up

You will need to create a `.env.production` file to contain the `DATABASE_URL` when you first clone this repo. Ask your mentor for the URL if it has not already been provided for you.

You will also need to set up `.env.development` and `.env.test` with the associated names (check `setup_dbs.sql` for db names).

Make sure to setup:

1. `npm run setup-dbs`

2. `npm run seed`

Oh! You may have found your first error! 
You must: Fix the error - why doesn't it work?

3. `npm run test`

