const db = require('../config/db');

// Get All Tasks
exports.getTasks = (req, res) => {
  const sql = 'SELECT * FROM tasks';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

// Add a New Task
exports.addTask = (req, res) => {
  const { title, description } = req.body;
  const sql = 'INSERT INTO tasks (title, description) VALUES (?, ?)';
  db.query(sql, [title, description], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, title, description, status: 'pending' });
  });
};

// Update Task Status
exports.updateTask = (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  const sql = 'UPDATE tasks SET status = ? WHERE id = ?';
  db.query(sql, [status, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Task updated successfully' });
  });
};

// Delete Task
exports.deleteTask = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM tasks WHERE id = ?';
  db.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Task deleted successfully' });
  });
};
