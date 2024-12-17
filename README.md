# To-Do-List-FullStack


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
Install Backend Dependencies:

bash
Copy code
npm install
Start the Backend Server:

bash
Copy code
npm start
The backend will run on: http://localhost:8081.
Set Up the MySQL Database:

Open XAMPP Control Panel and start the Apache and MySQL modules.
Create a new database in phpMyAdmin:
sql
Copy code
CREATE DATABASE todolist_db;
Import the table schema for tasks:
sql
Copy code
CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL
);
Verify the Backend:

Use Postman to test the REST API endpoints:
GET: http://localhost:8081/api/tasks - Get all tasks
POST: http://localhost:8081/api/tasks - Add a new task
DELETE: http://localhost:8081/api/tasks/:id - Delete a task
DELETE: http://localhost:8081/api/tasks/delete-all - Delete all tasks
2. Frontend Setup
Navigate to Frontend Directory:

bash
Copy code
cd Frontend
Install Frontend Dependencies:

bash
Copy code
npm install
Start the Frontend Application:

bash
Copy code
npm run dev
The frontend will run on: http://localhost:5173.
Test the Application:

Open the application in your browser at http://localhost:5173.
Screenshots
Add Tasks and Manage List:
