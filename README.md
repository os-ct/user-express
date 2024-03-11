# User Management API

This project is a RESTful API for managing user data, including creating, reading, updating, and deleting user information. The application is containerized using Docker and utilizes PostgreSQL as the database backend.

## Setup and Installation

1. Clone the repository:
```bash
git clone https://github.com/os-ct/user-express.git
```
2. Change to the project directory:
```bash
cd user-express
```
3. Build the Docker images:
```bash
docker-compose build
```

## Running the Application

To run the application with Docker and docker-compose, follow these steps:

1. Start the services:
```bash
docker-compose up -d
```
This command will start the application and database services.

2. Access the API endpoints:

The API will be available at `http://localhost:3000`. Use a tool like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to interact with the API endpoints.

Postman collection to import: [user-express.postman_collection.json](postman-collection/user-express.postman_collection.json)

## API Endpoints

The following API endpoints are available:

### Create User

- **Endpoint:** `POST /api/users`
- **Request Body:**
  ```json
  {
    "first_name": "string",
    "last_name": "string",
    "phone": "string"
  }
  ```
- **Response:**
  - Status Code: `201 Created`
  - Body: The newly created user object

### Read User

- **Endpoint:** `GET /api/users/:id`
- **Path Parameters:**
  - `id`: The user's ID
- **Response:**
  - Status Code: `200 OK`
  - Body: The user object with the specified ID

### Read User List

- **Endpoint:** `GET /api/users`
- **Response:**
  - Status Code: `200 OK`
  - Body: The users object list with the specified IDs


### Update User

- **Endpoint:** `PUT /api/users/:id`
- **Request Body:**
  ```json
  {
    "first_name": "string",
    "last_name": "string",
    "phone": "string"
  }
  ```
- **Response:**
  - Status Code: `200 OK`
  - Body: The newly updated user object

  ### Delete User

- **Endpoint:** `DELETE /api/users/:id`
- **Path Parameters:**
  - `id`: The user's ID
- **Response:**
  - Status Code: `200 OK`
  - Body: `User deleted successfully` message

3. Stop the services:
```bash
docker-compose down
```
This command will stop and remove containers, networks