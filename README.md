# Welcome to your AI Restaurant API 👋

This is an express api server

## Get started

1. Install dependencies

   ```bash
   yarn install
   ```

2. Start the server

   ```bash
    yarn start
   ```



## Dependencies

- Express
- node-ts
- Prisma
- Class Validator
- Simple SQLite DB

## Features

- This application helps manage the functions of various restaurants. At the moment, you can create restaurants, create menu items for a particular restaurants, make an order to a particular restaurant.


## Areas for improvement

- Authentication, a simple user prisma model has been setup but the api routes, services and controllers are not in place. Add authentication is a simple improvement for this app
- Add more CRUD functionalities. ATM, we are only able to create orders, create and retrieve menus and restaurants. An improvement would be fetching an authenticated individual's order or fetching all the orders for a restaurant admin, creating different types of users like customer, restaurant admin and overall admin. Adding role based funtionalities for these users.
- This application is built with express for speed, but one of the major pitfalls with using express is how easy it is to get lost in architectural design and writing spaghetti code. This application uses a code architectural design similar to nestjs. An improvement would be to convert the entire application to nestjs for better or more standard code architectural design. 


