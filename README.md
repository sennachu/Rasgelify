<h1 align="center">Hi 👋, We're Sena and Neyfer</h1>
<h3 align="center">Passionate software developers from Istanbul</h3>


<p align="center">
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> 
  <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> 
  <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> 
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> 
  <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> 
  <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> 
  <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> 
  <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a> 
</p>
# Boat Rental API

This project provides a RESTful API for managing boat rentals, including user authentication, boat listings, orders, and reservations.

## Table of Contents

- [Authentication](#authentication)
  - [Register](#register)
  - [Login](#login)
- [Boats](#boats)
  - [Add a Boat](#add-a-boat)
  - [Get All Boats](#get-all-boats)
  - [Get Boat by ID](#get-boat-by-id)
  - [Update Boat by ID](#update-boat-by-id)
  - [Delete Boat by ID](#delete-boat-by-id)
- [Orders](#orders)
  - [Create an Order](#create-an-order)
  - [Get All Orders](#get-all-orders)
  - [Get Order by ID](#get-order-by-id)
  - [Update Order by ID](#update-order-by-id)
  - [Delete Order by ID](#delete-order-by-id)
- [Reservations](#reservations)
  - [Create a Reservation](#create-a-reservation)
  - [Get All Reservations](#get-all-reservations)
  - [Get Reservation by ID](#get-reservation-by-id)
  - [Update Reservation by ID](#update-reservation-by-id)
  - [Delete Reservation by ID](#delete-reservation-by-id)
- [Users](#users)
  - [Get All Users](#get-all-users)
  - [Get User by ID](#get-user-by-id)
  - [Update User by ID](#update-user-by-id)
  - [Delete User by ID](#delete-user-by-id)

## Authentication

### Register

- **URL:** `/auth/register`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Body Parameters:**
  - `username`: string (required)
  - `password`: string (required)
  - `email`: string (optional)
- **Response:** User object.

### Login

- **URL:** `/auth/login`
- **Method:** `POST`
- **Description:** Logs in a user.
- **Body Parameters:**
  - `username`: string (required)
  - `password`: string (required)
- **Response:** JWT token.

## Boats

### Add a Boat

- **URL:** `/boats`
- **Method:** `POST`
- **Description:** Adds a new boat.
- **Body Parameters:**
  - `name`: string (required)
  - `type`: string (required)
  - `price`: number (required)
- **Response:** Boat object.

### Get All Boats

- **URL:** `/boats`
- **Method:** `GET`
- **Description:** Retrieves all boats.
- **Response:** List of Boat objects.

### Get Boat by ID

- **URL:** `/boats/{id}`
- **Method:** `GET`
- **Description:** Retrieves a boat by its ID.
- **Parameters:**
  - `id`: string (required)
- **Response:** Boat object.

### Update Boat by ID

- **URL:** `/boats/{id}`
- **Method:** `PUT`
- **Description:** Updates a boat by its ID.
- **Parameters:**
  - `id`: string (required)
- **Body Parameters:**
  - `name`: string (optional)
  - `type`: string (optional)
  - `price`: number (optional)
- **Response:** Updated Boat object.

### Delete Boat by ID

- **URL:** `/boats/{id}`
- **Method:** `DELETE`
- **Description:** Deletes a boat by its ID.
- **Parameters:**
  - `id`: string (required)
- **Response:** Message confirming deletion.

## Orders

### Create an Order

- **URL:** `/orders`
- **Method:** `POST`
- **Description:** Creates a new order.
- **Body Parameters:**
  - `boat_id`: string (required)
  - `user_id`: string (required)
  - `start_date`: string (required)
  - `end_date`: string (required)
- **Response:** Order object.

### Get All Orders

- **URL:** `/orders`
- **Method:** `GET`
- **Description:** Retrieves all orders.
- **Response:** List of Order objects.

### Get Order by ID

- **URL:** `/orders/{id}`
- **Method:** `GET`
- **Description:** Retrieves an order by its ID.
- **Parameters:**
  - `id`: string (required)
- **Response:** Order object.

### Update Order by ID

- **URL:** `/orders/{id}`
- **Method:** `PUT`
- **Description:** Updates an order by its ID.
- **Parameters:**
  - `id`: string (required)
- **Body Parameters:**
  - `boat_id`: string (optional)
  - `user_id`: string (optional)
  - `start_date`: string (optional)
  - `end_date`: string (optional)
- **Response:** Updated Order object.

### Delete Order by ID

- **URL:** `/orders/{id}`
- **Method:** `DELETE`
- **Description:** Deletes an order by its ID.
- **Parameters:**
  - `id`: string (required)
- **Response:** Message confirming deletion.

## Reservations

### Create a Reservation

- **URL:** `/reservations`
- **Method:** `POST`
- **Description:** Creates a new reservation.
- **Body Parameters:**
  - `boat_id`: string (required)
  - `user_id`: string (required)
  - `start_date`: string (required)
  - `end_date`: string (required)
- **Response:** Reservation object.

### Get All Reservations

- **URL:** `/reservations`
- **Method:** `GET`
- **Description:** Retrieves all reservations.
- **Response:** List of Reservation objects.

### Get Reservation by ID

- **URL:** `/reservations/{id}`
- **Method:** `GET`
- **Description:** Retrieves a reservation by its ID.
- **Parameters:**
  - `id`: string (required)
- **Response:** Reservation object.

### Update Reservation by ID

- **URL:** `/reservations/{id}`
- **Method:** `PUT`
- **Description:** Updates a reservation by its ID.
- **Parameters:**
  - `id`: string (required)
- **Body Parameters:**
  - `boat_id`: string (optional)
  - `user_id`: string (optional)
  - `start_date`: string (optional)
  - `end_date`: string (optional)
- **Response:** Updated Reservation object.

### Delete Reservation by ID

- **URL:** `/reservations/{id}`
- **Method:** `DELETE`
- **Description:** Deletes a reservation by its ID.
- **Parameters:**
  - `id`: string (required)
- **Response:** Message confirming deletion.

## Users

### Get All Users

- **URL:** `/users`
- **Method:** `GET`
- **Description:** Retrieves all users.
- **Response:** List of User objects.

### Get User by ID

- **URL:** `/users/{id}`
- **Method:** `GET`
- **Description:** Retrieves a user by their ID.
- **Parameters:**
  - `id`: string (required)
- **Response:** User object.

### Update User by ID

- **URL:** `/users/{id}`
- **Method:** `PUT`
- **Description:** Updates a user by their ID.
- **Parameters:**
  - `id`: string (required)
- **Body Parameters:**
  - `username`: string (optional)
  - `email`: string (optional)
- **Response:** Updated User object.

### Delete User by ID

- **URL:** `/users/{id}`
- **Method:** `DELETE`
- **Description:** Deletes a user by their ID.
- **Parameters:**
  - `id`: string (required)
- **Response:** Message confirming deletion.

## License

This project is licensed under the MIT License.
