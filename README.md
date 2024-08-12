# Task Management API

## Overview

This is a RESTful API built with Node.js and Express for managing tasks. It includes CRUD operations, basic validation, and user authentication with JWT tokens. The API uses MongoDB for data storage.

## Features

- **Create a Task**: POST `/tasks`
- **Retrieve All Tasks**: GET `/tasks`
- **Update a Task**: PUT `/tasks/:id`
- **Delete a Task**: DELETE `/tasks/:id`
- **User Authentication**: Secure task management with JWT tokens.

## Tech Stack

- **Node.js**: JavaScript runtime for server-side code.
- **Express**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing tasks.
- **JWT**: JSON Web Tokens for authentication and authorization.
- **Mongoose**: MongoDB object modeling tool for Node.js.

## Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/task-management-api.git
    ```

2. **Navigate to the Project Directory**

    ```bash
    cd task-management-api
    ```

3. **Install Dependencies**

    ```bash
    npm install
    ```

4. **Set Up Environment Variables**

    Create a `.env` file in the root directory and add the following environment variables:

    ```plaintext
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    PORT=your_preferred_port
    ```

5. **Run the Development Server**

    ```bash
    npm run dev
    ```

    The server will start and listen on the port specified in the `.env` file.

## API Endpoints

### Tasks

- **Create a New Task**

    - **Endpoint**: `POST /tasks`
    - **Request Body**:
        ```json
        {
            "title": "Task Title",
            "description": "Task Description",
            "dueDate": "YYYY-MM-DD"
        }
        ```
    - **Response**: 
        ```json
        {
            "id": "task_id",
            "title": "Task Title",
            "description": "Task Description",
            "dueDate": "YYYY-MM-DD",
            "completed": false
        }
        ```

- **Retrieve All Tasks**

    - **Endpoint**: `GET /tasks`
    - **Response**:
        ```json
        [
            {
                "id": "task_id",
                "title": "Task Title",
                "description": "Task Description",
                "dueDate": "YYYY-MM-DD",
                "completed": false
            },
            ...
        ]
        ```

- **Update a Task**

    - **Endpoint**: `PUT /tasks/:id`
    - **Request Body**:
        ```json
        {
            "title": "Updated Task Title",
            "description": "Updated Task Description",
            "dueDate": "YYYY-MM-DD",
            "completed": true
        }
        ```
    - **Response**:
        ```json
        {
            "id": "task_id",
            "title": "Updated Task Title",
            "description": "Updated Task Description",
            "dueDate": "YYYY-MM-DD",
            "completed": true
        }
        ```

- **Delete a Task**

    - **Endpoint**: `DELETE /tasks/:id`
    - **Response**:
        ```json
        {
            "message": "Task deleted successfully"
        }
        ```

### Authentication

- **Register a New User**

    - **Endpoint**: `POST /auth/register`
    - **Request Body**:
        ```json
        {
            "username": "user",
            "password": "password"
        }
        ```
    - **Response**:
        ```json
        {
            "message": "User registered successfully"
        }
        ```

- **Authenticate a User**

    - **Endpoint**: `POST /auth/login`
    - **Request Body**:
        ```json
        {
            "username": "user",
            "password": "password"
        }
        ```
    - **Response**:
        ```json
        {
            "token": "jwt_token"
        }
        ```

## Code Structure

- **`/models`**: Contains Mongoose schemas and models.
- **`/routes`**: Contains route handlers for tasks and authentication.
- **`/controllers`**: Contains business logic for handling requests.
- **`/middleware`**: Contains middleware for authentication and validation.
- **`/config`**: Contains configuration files and setup.

## Validation

Input validation is performed using Joi to ensure data integrity. Validation rules are defined in the controllers and middleware.

## Contributing

1. **Fork the Repository**: Click the "Fork" button at the top right of this page.
2. **Create a Branch**: 

    ```bash
    git checkout -b feature/your-feature
    ```

3. **Commit Your Changes**:

    ```bash
    git add .
    git commit -m "Add your commit message"
    ```

4. **Push to the Branch**:

    ```bash
    git push origin feature/your-feature
    ```

5. **Create a Pull Request**: Go to the repository on GitHub and click "New Pull Request".

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, contact [your-email@example.com](mailto:your-email@example.com).
