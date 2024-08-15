# Task Management System - RESTful API

This project is a RESTful API for managing tasks. It includes user registration and authentication, task CRUD operations, task assignment, and filtering and searching capabilities.

## Features

1. **User Registration and Authentication:**

   - **User Registration:** Allows users to create an account by providing a username and password. Passwords are securely hashed to ensure security.
   - **User Authentication:** Users can log in with their credentials to receive a JSON Web Token (JWT) for authenticated requests. This token is used to secure endpoints and ensure that only authorized users can access certain functionalities.

2. **Task Management:**

   - **CRUD Operations:** Users can create, read, update, and delete tasks. Each task includes fields such as title, description, status (e.g., Todo, In Progress, Done), priority, due date, and timestamps for creation and updates.
   - **Task Assignment:** Tasks can be assigned to specific users, allowing for effective task management and user-specific task tracking.

3. **Filtering and Searching:**

   - **Filtering:** Users can filter tasks based on various criteria such as status, priority, and due date.
   - **Searching:** Tasks can be searched by their title or description, making it easier to find specific tasks in a large set of data.

4. **Dockerization:**

   - The application is containerized using Docker, making it easy to deploy and run in different environments. A `Dockerfile` and `docker-compose.yml` are provided to set up the application along with any necessary services, such as a database.

5. **Database:**
   - Uses MongoDB to store user and task data.
   - Mongoose ORM for database operations.

### Endpoints

- **User Registration:** `POST /api/register`
- **User Login:** `POST /api/login`
- **Create Task:** `POST /api/tasks`
- **Get All Tasks:** `GET /api/tasks`
- **Get Task by ID:** `GET /api/tasks/{taskId}`
- **Update Task:** `PUT /api/tasks/{taskId}`
- **Delete Task:** `DELETE /api/tasks/{taskId}`

## Requirements

- Node.js (v16 or later)
- Docker and Docker Compose
- Postman or similar tool for API testing

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Mayank561/task-manager.git
   cd task-manager

   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT=8000`
`JWT_SECRET=your_jwt_secret`
`MONGO_URI=mongodb://your_mongo_uri`

## Start the Application

    npm start

## Run with Docker (Optional)

    Build and start the Docker containers:

    docker-compose up --build

    The application will be accessible at http://localhost:8000.

## API Reference

#### User Registration

#### Register a new user

```http
  POST /api/register
```

| Parameter  | Type     | Description                                 |
| :--------- | :------- | :------------------------------------------ |
| `username` | `string` | **Required**. The username for the new user |
| `password` | `string` | **Required**. The password for the new user |

#### User login

```http
  POST /api/login
```

| Parameter  | Type     | Description                            |
| :--------- | :------- | :------------------------------------- |
| `username` | `string` | **Required**. The username of the user |
| `password` | `string` | **Required**. The password of the user |

#### Task Management

#### Create a new task

```http
  POST /api/login
```

| Parameter     | Type     | Description                                                          |
| :------------ | :------- | :------------------------------------------------------------------- |
| `title`       | `string` | **Required**. The title of the task                                  |
| `description` | `string` | **Required**. The description of the task                            |
| `status`      | `string` | **Required**. The status of the task (e.g., Todo, In Progress, Done) |
| `priority`    | `string` | **Required**. The priority of the task (e.g., High, Medium, Low)     |
| `due_date`    | `string` | **Required**. The due date of the task in YYYY-MM-DD format          |

#### Get a task by ID

```http
  GET /api/tasks/${taskId}
```

| Parameter | Type     | Description                               |
| :-------- | :------- | :---------------------------------------- |
| `taskId`  | `string` | **Required**. The ID of the task to fetch |

#### Update a task

```http
    PUT /api/tasks/${taskId}
```

| Parameter | Type     | Description                                |
| :-------- | :------- | :----------------------------------------- |
| `taskId`  | `string` | **Required**. The ID of the task to update |

#### Delete a task

```http
      DELETE /api/tasks/${taskId}

```

| Parameter | Type     | Description                                |
| :-------- | :------- | :----------------------------------------- |
| `taskId`  | `string` | **Required**. The ID of the task to delete |

## Documentation

[POSTMAN](https://documenter.getpostman.com/view/27727111/2sA3s6Gq7v)
