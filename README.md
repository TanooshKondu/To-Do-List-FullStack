<img width="960" alt="Screenshot 2024-12-18 021928" src="https://github.com/user-attachments/assets/30866c12-d6e9-418a-81c0-1232bf7fc949" />


<img width="960" alt="Screenshot 2024-12-18 022046" src="https://github.com/user-attachments/assets/5aa52c6c-a4cd-4817-8398-590f458000e3" />





# Need to install nodejs and reactjs modules to run this application, please read the readme carefully for execution.


# To-Do List Application 📋

This is a responsive **To-Do List Application** built with modern technologies. It allows users to manage tasks with features like **adding, deleting, selecting, and bulk operations**. The app has a frontend (React with Vite and Bootstrap), a backend (Node.js with Express), and a MySQL database for persistent storage.

---

## **Tech Stack 🛠**

### **Frontend**
- React (Vite)
- Bootstrap 5 (Responsive UI)
- Axios (HTTP Requests)

### **Backend**
- Node.js
- Express.js
- MySQL Database (via XAMPP)

### **Development Tools**
- Postman (Testing REST APIs)
- XAMPP (Database Management)
- npm (Node Package Manager)

---

## **Features ✅**

1. **Task Management**:
   - Add tasks with a title and description.
   - Delete single or multiple selected tasks.
   - Delete all tasks at once.

2. **State Management**:
   - Loading states: Show a spinner while tasks load or API calls are in progress.
   - Error states: Display an error message if API operations fail.

3. **Responsive Design**:
   - Built with Bootstrap grid system for **mobile, tablet, and PC** responsiveness.

4. **Persistent Storage**:
   - Data is stored in a MySQL database.

5. **REST API**:
   - Backend serves as a REST API to connect with the frontend.

---

## **Setup Instructions 🚀**

Follow these steps to set up the project locally.

### **Prerequisites**
Make sure you have the following installed:
- Node.js (v18+ recommended)
- XAMPP (MySQL and Apache services)
- npm (comes with Node.js)
- Postman (optional, for API testing)

---

### **1. Backend Setup**

1. **Navigate to Backend Directory**:
   ```bash
   cd Backend
   
###Install Backend Dependencies:

npm install

###Start the Backend Server:

npm start

-> The backend will run on: http://localhost:8081.

Set Up the MySQL Database:
 -Open XAMPP Control Panel and start the Apache and MySQL modules.
 -Create a new database in phpMyAdmin:
 -sql
     -> CREATE DATABASE todolist_db;
##Import the table schema for tasks:
 -sql

->CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL
);


####Verify the Backend:

Use Postman to test the REST API endpoints:
***GET: http://localhost:8081/api/tasks - Get all tasks
***POST: http://localhost:8081/api/tasks - Add a new task
***PUT: http://localhost:8081/api/tasks/:id - Delete a task
***DELETE: http://localhost:8081/api/tasks/delete-all - Delete all tasks



2. Frontend Setup

##Navigate to Frontend Directory:
->cd Frontend


##Install Frontend Dependencies:
->npm install

##Start the Frontend Application:

->npm run dev

**The frontend will run on: http://localhost:5173.

Test the Application:

Open the application in your browser at http://localhost:5173.




########ER Diagram 📊
The Entity-Relationship (ER) Diagram for the To-Do List Application is as follows:

plaintext
Copy code
+------------------+
|      tasks       |
+------------------+
| id (PK)          |
| title            |
| description      |
+------------------+
Explanation:

tasks: Represents a task in the To-Do list.
id: Primary key (auto-incremented).
title: The title of the task (VARCHAR).
description: Details about the task (TEXT).


########Project Structure 📂
plaintext
Copy code
ToDo/
│
├── Backend/
│   ├── server.js          # Backend entry point
│   ├── package.json       # Backend dependencies and scripts
│   └── ...                # Other backend files
│
├── Frontend/
│   ├── src/
│   │   ├── App.jsx        # Main React component
│   │   ├── main.jsx       # React app entry point
│   │   ├── assets/        # Static files
│   │   ├── App.css        # Custom CSS
│   │   └── index.css      # Global styles
│   ├── package.json       # Frontend dependencies and scripts
│   └── ...                # Other frontend files
│
├── README.md              # Project documentation
└── SQL/                   # SQL database schema
    └── tasks_table.sql

    ************************
How to Use 🖥️
Run the backend and frontend servers.
Open http://localhost:5173 in your browser.
Perform the following operations:
Add a new task.
Delete tasks (single, multiple, or all).
Observe loading states (spinner) and error messages if backend fails.

********************************
Known Issues & Future Enhancements 🚧
Known Issues:

Error states can be enhanced to show specific error codes.
Future Enhancements:

Add task status (e.g., Completed/Pending).
Integrate user authentication.
Implement due dates and task prioritization.


##################Contributing 🤝
Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request.

####################License 📜
This project is licensed under the MIT License.


