const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8081;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/tasks', taskRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Delete All Tasks
app.delete("/api/tasks/delete-all", (req, res) => {
  db.query("DELETE FROM tasks", (err, result) => {
    if (err) {
      res.status(500).json({ error: "Failed to delete all tasks" });
    } else {
      res.status(200).json({ message: "All tasks deleted successfully" });
    }
  });
});

//Error Handling
app.get("/api/tasks", (req, res) => {
  db.query("SELECT * FROM tasks", (err, results) => {
    if (err) return res.status(500).json({ error: "Failed to fetch tasks" });
    res.json(results);
  });
});

