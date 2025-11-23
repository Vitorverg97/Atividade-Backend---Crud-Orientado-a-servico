# Welcome to the exercise's resolution!

# User CRUD API

A simple RESTful API for managing users, built with Node.js and Express.js.

## Features

- List all users
- Get a user by ID
- Create a new user
- Update an existing user
- Delete a user

## Requirements

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone this repository or download the source code.
2. Install dependencies:

   ```bash
   npm install
   ```

## Running the Project

Start the server with:

```bash
node index.js
```

The API will be available at: [http://localhost:3000](http://localhost:3000)

## API Endpoints

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| GET    | /usuarios        | List all the users      |
| GET    | /usuarios/:id    | Get a user by ID        |
| POST   | /usuarios        | Create a new user       |
| PUT    | /usuarios/:id    | Update a user           |
| DELETE | /usuarios/:id    | Delete a user           |

## Example JSON for POST/PUT

```json
{
  "nome": "Jerônimo Santana",
  "email": "Jersant@email.com",
  "nivel_fidelidade": "10"
}
```

## Testing

You can use tools like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to test the API endpoints.

---
