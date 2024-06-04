# EcomBridgeORM

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

E-commerce Back End

This project is a back-end application for an e-commerce website. It provides a robust API for managing products, categories, and tags. The application is built using Express.js, Sequelize ORM, and a MySQL database.

## Table of Contents

- [Screenshot](#screenshot)
- [Walkthrough Link](#walkthrough-link)
- [Installation](#installation)
- [Usage](#usage)
- [Database Model](#database-model)
- [API Routes](#api-routes)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)
- [Citations](#citations)

## Screenshot

![Screenshot](/images/screenshot.PNG)

## Walkthrough Link

- [https://www.youtube.com/watch?v=WwdCiax7zV0&t=10s/]

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:
2. Navigate to the project directory:
3. Create or ensure that a package.json and package-lock.json are present.
4. Run "npm init" if necessary.
5. Use the command "npm install".
6. Install the dependencies:

"dependencies": {
"dotenv": "^8.6.0",
"express": "^4.17.1",
"pg": "^8.11.3",
"sequelize": "^5.21.7"
}:

7. Update the .env file with any necessary credentials needed.

8. Set up the Postgres SQL database:

- Create a new database for the application
- Within the db folder there is a schema.sql file.
- Open schema.sql within an integrated terminal.
- Login to postgres via "psql -U postgres".
- Enter the passphrase: "password".
- run the schema.sql file via "\i schema.sql".
- There are files labeled seed located within the seeds folder.
- These files are: category-seeds.js, product-seeds.js, product-tag-seeds.js, and tag-seeds.js
- These files can be ran via the index.js file located within the same directory.
- This files will automatically seed the database when index.js is ran via the command ' node index.js '
- This will seed the database with mock data provided by the source code from the assignment.
- Exit out of postgres login and database connection via "\q" or "quit"

9. Run the application:

- Open an integrated terminal.
- Enter the command "npm run start" to start the server.
- Server will be accessible via insomnia using http://localhost:3001/

## Usage

1. Upon starting the server, you will be presented with the following output:

> module-13-challenge-orm@1.0.0 start
> node server.js
> App listening on port 3001!

2. Once the application is running, you can use tools like Insomnia or Postman to test the API endpoints. The available endpoints are described in the API Routes section.

## Database Model

The application includes the following database models:

- Category: Represents a category of products.
- Product: Represents a product with a name, price, stock quantity, and category.
- Tag: Represents a tag that can be associated with multiple products.
- ProductTag: Represents the association between a product and a tag.

The models are defined using Sequelize and have the following associations:

- A Category has many Product models.
- A Product belongs to a Category.
- A Product belongs to many Tag models (many-to-many relationship) through the ProductTag model.
- A Tag belongs to many Product models (many-to-many relationship) through the ProductTag model.

## API Routes

The application provides the following API routes:

/api/categories

- GET: Retrieve all categories along with their associated products.
- POST: Create a new category.

/api/categories/:id

- GET: Retrieve a single category by its ID along with its associated products.
- PUT: Update a category by its ID.
- DELETE: Delete a category by its ID.

/api/products

- GET: Retrieve all products along with their associated category and tags.
- POST: Create a new product.

/api/products/:id

- GET: Retrieve a single product by its ID along with its associated category and tags.
- PUT: Update a product by its ID.
- DELETE: Delete a product by its ID.

/api/tags

- GET: Retrieve all tags along with their associated products.
- POST: Create a new tag.

/api/tags/:id

- GET: Retrieve a single tag by its ID along with its associated products.
- PUT: Update a tag by its ID.
- DELETE: Delete a tag by its ID.

Refer to the code in the routes directory for detailed information on each route and its functionality.

## Features

Product Management:

- Create, read, update, and delete products.
- Associate products with categories and tags.
- Retrieve products with their associated category and tags.

Category Management:

- Create, read, update, and delete categories.
- Retrieve categories with their associated products.

Tag Management:

- Create, read, update, and delete tags.
- Retrieve tags with their associated products.

API Endpoints:

- RESTful API endpoints for products, categories, and tags.
- Endpoints to retrieve all items or a single item by ID.
- Endpoints to create, update, and delete items.

Database Integration:

- Integration with a MySQL database using Sequelize ORM.
- Define database models for products, categories, tags, and their associations.
- Perform database operations (CRUD) through Sequelize.

Error Handling:

- Implement proper error handling and send appropriate error responses.
- Handle invalid requests, missing data, and database errors gracefully.

Data Validation:

- Validate incoming request data to ensure data integrity.
- Implement validation for required fields, data types, and constraints.

Seed Data:

- Provide a script to seed the database with initial sample data
- Easily populate the database with test data for development and testing purposes

Logging:

- Implemented comsole logging to track important events and errors.

Testing:

- Write unit tests to verify the functionality of dotenv file and usage.

Documentation:

- Provide a comprehensive README file with installation instructions, usage guidelines, and API documentation.
- Include examples of API requests and responses.
- Document the database schema and model associations.

Security:

- Implement security measures to protect against common vulnerabilities using dotenv.

Deployment:

- Provide instructions and scripts for deploying the application along with a demonstration video and screenshot.

## Technologies Used

- Node.js
- PostgreSQL
- dotenv
- express
- pg
- sequelize

## Contributing

Contributions are not welcome. This is a graded classroom assignment that is an assesment of my skills regarding the usage of Node.js, Inquirer, and Postgres / SQL. If you have any suggestions, bug reports, or feature requests, please open an issue or leave a comment for my future knowledge base and usage.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Questions

If you have any questions about EcomBridgeORM, you can reach me at Jake_Toton@live.com. You can find more of my work at [Jtoton](https://github.com/Jtoton/).

## Citations

1. Node.js. (n.d.). Node.js. Retrieved from https://nodejs.org/
2. PostgreSQL. (n.d.). PostgreSQL: The World's Most Advanced Open Source Relational Database. Retrieved from https://www.postgresql.org/
3. Open Source Initiative. (n.d.). The MIT License. Retrieved from https://opensource.org/licenses/MIT

4. Module 13 challenge. (n.d.). https://bootcampspot.instructure.com/courses/5301/assignments/74798?module_item_id=1211399

- Canvas assignment page which housed the assignment description, requirments and acceptance criteria.
- This additionally provided the database schema to use including the tables and setup.
- Assignment contained source code that was provided.

7. Course instructors and T.A.'s provided assistance, materials and various links located within our classroom slack channels.
8. SQL Tutorial. (n.d.). https://www.w3schools.com/sql/
9. Node.js NPM. (n.d.). https://www.w3schools.com/nodejs/nodejs_npm.asp
10. Sequelize. (n.d.). Feature-rich ORM for Modern TypeScript & JavaScript. https://sequelize.org/
11. Introduction to Insomnia | Insomnia Docs. (n.d.). https://docs.insomnia.rest/insomnia/get-started
12. Documentation | Dotenv. (n.d.). https://www.dotenv.org/docs/
13. npm: dotenv. (n.d.). Npm. https://www.npmjs.com/package/dotenv
