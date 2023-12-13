# Overstay Penalty API

Overstay Penalty API streamlines guest management with automated overstay fee calculations. This API seamlessly integrates with booking systems, ensuring fair and transparent penalties for guests exceeding checkout times. Enhance your hospitality operations with efficient and modern late checkout solutions.


## Setup

This section will guide you through the setup process required to get up and running with the application.


### Requirements

-   Node (Version >= 18.17.1)

-   NPM (Version >= 9.6.7)

-   TypeScript (`npm install -g typescript`)


### Get Started

1. Clone the project repository with `git clone https://github.com/Osaroigb/overstay-penalty-api.git` or GitHub Desktop

2. Run `npm install` from the root directory of the project to install dependencies

3. Create a `.env` file and copy the content of `.env.example` to it


### Database Setup

1. Create a new database in postgresql

2. Fill the `.env` file you created with the database credentials

3. Run `npm run make:migration` to generate migration files, e.g `npm run make:migration -- --name create_reservation_table`. This is OPTIONAL since the migration files have already been generated

4. Run `npm run migrate` to create the tables, You can run `npm run migrate:undo` to undo the last migration or `npm run migrate:undo:all` to undo all migrations

5. Run `npm run make:seed` to generate seeder files, e.g `npm run make:seed -- --name seed_customer_reservations`. This is OPTIONAL since the seeder files have already been generated

6. Run `npm run seed:all` to populate tables with needed data


### Development

To start the service, use the command: `npm run start`

Use `development` as your node environment `NODE_ENV` to run the application

It is important to set up environment variables for the system to function properly


### Logging

Sometimes, it's necessary to send logs to the stdout or store them, to do this, make use of the exported [logger](src/utils/logger)

You can log errors based on their levels:

-   error

-   warn

-   info

-   verbose

-   debug

-   silly

Example: `logger.error('You just committed a crime!')`

Ensure you avoid using `console.log` statements anywhere in the code.


### Environment

Ensure you have eslint and prettier set up on your development environment. Ensure you follow proper linting rules as well. [Here's](https://enlear.academy/integrating-prettier-and-eslint-with-vs-code-1d2f6fb53bc9) a guide on how to setup eslint on vs code


### Contributing

1. To contribute, checkout to the `main` branch (this is the stable branch) first and run `git pull` to sync changes on the repo with what you have locally. 

2. Checkout to your work branch. Your work branch should prefix either `feat_`, `fix_`, `refactor_`, `chore_` along with not more than 6 words description of the task. eg. `feat_update-user-login-response`. Your task should be implemented on this branch

3. Your commits should concisely and accurately state what you worked on. examples are:
- feat: Represents a new feature or enhancement added to the project
- fix: Indicates a bug fix or resolution of an issue
- chore: Refers to routine tasks, maintenance, or general housekeeping
- docs: Represents documentation changes or additions
- style: Indicates changes related to code formatting, styling, or design
- refactor: Indicates code changes that improve the structure or readability of the code
- test: Represents changes or additions related to tests or testing

**NOTE**: Push to the remote repository as frequent as possible at least before calling it a day to avoid possible issues of losing what has been worked on

4. Once done with task, raise a pull request(PR) against the main branch and add me as a reviewer. DO NOT MERGE till it's reviewed

5. After review is done and PR is approved, create another PR against the `staging` branch and merge that. The PR against the main branch should still be open at this point. The essence of merging to the staging branch is for QA before the task goes to production

6. After QA is done and task is approved as ready for production on the staging environment, go ahead and `squash merge` your branch into the `main` branch.

7. Open a PR from the `main` branch against the `production` branch. With the PR title in this format `Deployment to Production - [YYYY-MM-DD]`. eg. `Deployment to production - 2022-01-30`.

8. Inform the dev-ops team to deploy! Hurray you've deployed your task


### Code Standard and Resources

- [Node.js best practices](https://github.com/goldbergyoni/nodebestpractices)

- [Setting up Eslint & Prettier](https://enlear.academy/integrating-prettier-and-eslint-with-vs-code-1d2f6fb53bc9)