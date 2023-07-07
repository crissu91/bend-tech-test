# Tech Tests

Guidance for how to use your time:

You have been given this repo as part of a tech-test. Your aim is to have it running. A task will be issued by your mentor to complete, within a time-frame.

Once the time is up, you will look through this repo together and potentially work through some issues that you may have faced.

# Setting up

You will need to create a `.env.production` file to contain the `DATABASE_URL` when you first clone this repo. Ask your mentor for the URL if it has not already been provided for you.

You will also need to set up `.env.development` and `.env.test` with the associated names (check `setup_dbs.sql` for db names).

Make sure to setup:

`npm run setup-dbs`

`npm run seed`

Oh! You may have found your first error! 
1. Fix the error - why doesn't it work?

`npm run test`

