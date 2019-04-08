# inventory-demo (Created/Updated in April 2019)

## Intro

After reading through the requirements, what immediately came to my mind was building a RESTful API in Node.js using express and mongoose. Since I didn't have much previous experience with server-side development specifically in JavaScript or NoSQL databases like MongoDB, it would be a rewarding learning journey for me as well. After I built up all the required API endpoints, added integration testing against a real database, also tested in [Postman](https://www.getpostman.com/) and it all worked, I started extending it to a MERN stack CRUD app example because I've enjoyed developing React/Redux app. I know that app development can be never-ending, but since it's a coding exercise with time constraints, I've made trade-offs along the way. Though what I present here is not a perfect and production-ready app, I do appreciate your understanding and hope you can see the abilities and potential in me that you're looking for in a team member. 

## Overview

* Used [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cloud service to persist all development and test data in the demo. The database has 3 models/collections, namely, Mall(Shopping Center), Asset and User. Malls and assets are in one-to-many relationship: each mall can have zero to many assets, and each asset can only belong to one mall. Below is an ERD diagram demonstrating all the properties in each model and their relationship.
  
  ![inventory-demo-erd](https://i.imgur.com/5B3gVGO.png)

* Integrated Google OAuth using Passport strategy for Google OAuth 2.0, and `cookie-session` for keeping track of login information. So no fuss about hashing passwords and setting up an admin user. I also tried JWT token-based authentication during the process but finally settled for OAuth due to its convenience.

## Screenshots

* Listing all assets, you can search assets by name, its associated mall name and location.

 ![List of assets](https://github.com/unicar9/inventory-demo/blob/master/screenshots/2.png)

* Listing all malls, you can edit and delete each mall by clicking the button, and you can enter the detail page by clicking the mall card itself.
  
 ![List of malls](https://github.com/unicar9/inventory-demo/blob/master/screenshots/3.png)

* When you click into the detail page of one mall, you can also check all the assets under this mall, or you can add a new asset belongs to this mall.
  
 ![List of assets under one mall](https://github.com/unicar9/inventory-demo/blob/master/screenshots/1.png)

## Installation and Run on Local Machine

```sh
# clone it
git clone https://github.com/unicar9/inventory-demo.git
cd inventory-demo

# Install dependencies for back-end
npm install

# Run integration tests for back-end
# from the root directory 
npm run test

# Start back-end dev server and test the API on http://localhost:5000/api
# from root directory
npm run server

# Install dependencies for front-end
# go to client folder
cd client && npm install

# Start both back-end and front-end dev server and test the app on http://localhost:3000
# from root directory
cd ..
npm run dev

```
**Please make sure your localhost port 3000, 4000, 5000 are not in use.**

## Back-end Usage(API Endpoints)

HTTP Requests | URL | Method | 
------------- | --- | ------ | 
Initial entry point | /api | `GET` 
Google authentication | /auth/google | `GET` 
Logout | /api/logout | `GET` 
Check current user | api/current_user | `GET` 
Get all malls | /api/malls |  `GET`  
Create one mall | /api/malls |  `POST`  
Get one mall by id | /api/malls/:mallId |  `GET` 
Update one mall by id | /api/malls/:mallId |  `PUT` 
Delete one mall by id | /api/malls/:mallId |  `DELETE` 
Get all assets | /api/assets |  `GET` 
Create one asset | /api/assets |  `POST`  
Get one asset by id | /api/assets/:assetId |  `GET` 
Update one asset by id | /api/assets/:assetId |  `PUT`  
Delete one asset by id | /api/assets/:assetId |  `DELETE`  
Search assets by name, mall or location | /api/assets/search |  `POST` 

* **Sample Request Body for `POST` to `/api/malls`**

Create one mall

```javascript
{
  "name": "westfield",
  "address": "somewhere"
}
```

* **Sample Request Body for `POST` to `/api/assets`**

Create one asset

```javascript
{
  "name": "asset1", // required
  "location": "L3-10",
  "dimension": "10(w)x20(h)",
  "status": true // default to true
  "mall": "ndj2339d82dd"
}
```

* **Sample Request Body for `POST` to `/api/assets/search`**

Search assets by name, mall name or location

```javascript
{
  "q": "westfield", // any query string
  "cat": "name" // categories can be "name", "mall" or "location"
}
```

## Dependencies(Tech-stacks)

Client-side | Server-side
--- | ---
axios: ^0.18.0 | body-parser: ^1.18.3
http-proxy-middleware: ^0.19.1| passport-google-oauth20: ^2.0.0
react: ^16.8.6 | express: ^4.16.4
react-dom: ^16.8.6 | cookie-session: ^1.3.3
react-redux: ^6.0.1 | mongoose: ^5.4.21
react-router-dom: ^5.0.0 | passport: ^0.4.0
redux: ^4.0.1 | 
redux-form: ^8.1.0 | 
redux-thunk: ^2.3.0 |

## Other Acknowledgements

* I used [Semantic UI React](https://react.semantic-ui.com/) library to build a neat and presentable layout on the front-end.
