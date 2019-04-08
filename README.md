# inventory-demo (Created/Updated in April 2019)

## Intro

After reading through the requirements, what immediately came to my mind was building a RESTful API in Node.js using express and mongoose. Since I didn't have much previous experience with server-side development specifically in JavaScript or NoSQL databases like MongoDB, it would be a rewarding learning journey for me as well. After I built up all the required API endpoints, added integration testing against a real database, also tested in [Postman](https://www.getpostman.com/) and it all worked, I started extending it to a MERN stack CRUD app example because I've enjoyed developing React/Redux app. I know that app development can be never-ending, but since it's a coding exercise with time constraints, I've made trade-offs along the way. Though what I present here is not a perfect and production-ready app, I do appreciate your understanding and hope you can see the abilities and potential in me that you're looking for in a team member. 

## Overview

* 

## Installation and Run on Local Machine



## Back-end Usage(API Endpoints)

HTTP Requests | URL | Method | 
------------- | --- | ------ | 
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

Create one assets

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
