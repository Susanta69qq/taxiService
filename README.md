# Backend API Documentation

## Register Endpoint

## Overview

The /users/register endpoint is a crucial part of the user management system. It allows new users to create an account by providing their details, and in return, it generates a unique authentication token that can be used to access protected resources.

### Description

When a new user wants to create an account, they need to send a POST request to the `/users/register` endpoint with a JSON payload containing their details. The request body should include the following properties:

### Request Body

The request body should contain the following properties:

- `fullName`: an object with `firstName` and `lastName` properties (both strings)
- `email`: a string representing the user's email address
- `password`: a string representing the user's password

Example request body:

```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "password123"
}

Status Codes
201 Created: The user account was created successfully.
400 Bad Request: The request body is invalid or missing required fields.
500 Internal Server Error: An error occurred while creating the user account.

Response
The response will contain the newly created user's data and an authentication token.

Example response:
{
  "user": {
    "_id": "1234567890",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "johndoe@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```
