# MERN-TaskMaster

This is a simple To-Do List application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Manage your tasks efficiently with this full-stack web application.

## Features

- **Create Tasks:** Add new tasks with details such as title, description, and due date.
- **Update Tasks:** Edit task details or mark tasks as completed.
- **Delete Tasks:** Remove tasks that are no longer needed.
- **Responsive Design:** Access and manage your to-do list on various devices.

## Technologies Used

- **MongoDB:** NoSQL database for storing task data.
- **Express.js:** Web application framework for Node.js, handling server-side logic.
- **React.js:** Frontend library for building user interfaces.
- **Node.js:** JavaScript runtime for server-side development.
- **Mongoose:** MongoDB object modeling for Node.js.


## Getting Started

Follow these steps to set up and run the application locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/rajkumaralagappan2/MERN-Todo.git
   cd MERN-Todo
   ```

2. **Install Dependencies:**
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Configure Environment Variables:**
   - Create a `.env` file in the `server` directory and set the following variables:
     ```env
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

4. **Run the Application:**
   ```bash
   # Run the server (from the 'server' directory)
   npm start

   # Run the client (from the 'client' directory)
   npm start
   ```

   Open your browser and navigate to `http://localhost:3000` to access the application.



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
