# Task Manager Backend

A backend application for managing personal tasks, built with **Node.js**, **Express**, and **MongoDB**. This project provides API endpoints for creating, reading, updating, and deleting tasks, with features like user authentication and data validation.

## Features
testing 
- **Task Management**: CRUD operations for tasks.
- **User Authentication**: JWT-based authentication for secure access.
- **Data Validation**: Input validation using `Joi`.
- **Database**: MongoDB integration for task and user data persistence.
- **Error Handling**: Robust error handling for API endpoints.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JSON Web Tokens (JWT)
- **Validation**: Joi
- **Environment Management**: dotenv

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/task-manager-backend.git
   cd task-manager-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=8080
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:5000`.

## API Endpoints

### Authentication

- **POST** `/api/auth/register`: Register a new user.
- **POST** `/api/auth/login`: Log in a user and get a JWT token.

### Tasks

- **GET** `/api/tasks`: Get all tasks for the authenticated user.
- **POST** `/api/tasks`: Create a new task.
- **GET** `/api/tasks/:id`: Get a specific task by ID.
- **PUT** `/api/tasks/:id`: Update a task by ID.
- **DELETE** `/api/tasks/:id`: Delete a task by ID.

## Folder Structure

```
├── controllers     # Logic for API endpoints
├── middleware      # Authentication and validation middleware
├── models          # Mongoose schemas
├── routes          # Express routes
├── config          # Configuration files
├── utils           # Utility functions
├── .env            # Environment variables
├── server.js       # Entry point of the application
└── package.json    # Project metadata and dependencies
```

## Scripts

- `npm start`: Start the production server.
- `npm run dev`: Start the development server with hot reload.
- `npm test`: Run tests (if implemented).

## Dependencies

- express
- mongoose
- dotenv
- jsonwebtoken
- joi
- bcryptjs

## Dev Dependencies

- nodemon

## Future Enhancements

- Add unit and integration tests.
- Implement task categorization and prioritization.
- Add a frontend for user interaction.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

### Connect with Me

- **GitHub**: [Link](https://github.com/MadhurChaturvedi)
- **LinkedIn**: [Link](https://linkedin.com/in/madhur-chaturvedi-183a16196)


### Try to add GoogleAuth 
