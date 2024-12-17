import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [tasks, setTasks] = useState([]); // List of tasks
  const [newTask, setNewTask] = useState({ title: "", description: "" }); // New task input
  const [selectedTasks, setSelectedTasks] = useState(new Set()); // Selected tasks for bulk deletion

  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch tasks from the backend
  const fetchTasks = () => {
    setLoading(true);
    setError(null);
    axios
      .get("http://localhost:8081/api/tasks")
      .then((res) => setTasks(res.data))
      .catch(() => setError("Failed to load tasks. Please try again."))
      .finally(() => setLoading(false));
  };

  // Add a new task
  const addTask = () => {
    if (!newTask.title.trim() || !newTask.description.trim()) return;

    setLoading(true);
    setError(null);
    axios
      .post("http://localhost:8081/api/tasks", newTask)
      .then((res) => setTasks([...tasks, res.data]))
      .catch(() => setError("Failed to add task. Please try again."))
      .finally(() => {
        setLoading(false);
        setNewTask({ title: "", description: "" });
      });
  };

  // Delete a single task
  const deleteTask = (id) => {
    setLoading(true);
    setError(null);
    axios
      .delete(`http://localhost:8081/api/tasks/${id}`)
      .then(() => setTasks(tasks.filter((task) => task.id !== id)))
      .catch(() => setError("Failed to delete task. Please try again."))
      .finally(() => setLoading(false));
  };

  // Delete selected tasks
  const deleteSelectedTasks = () => {
    setLoading(true);
    setError(null);
    const taskIds = Array.from(selectedTasks);

    axios
      .all(taskIds.map((id) => axios.delete(`http://localhost:8081/api/tasks/${id}`)))
      .then(() => setTasks(tasks.filter((task) => !selectedTasks.has(task.id))))
      .catch(() => setError("Failed to delete selected tasks. Please try again."))
      .finally(() => {
        setLoading(false);
        setSelectedTasks(new Set());
      });
  };

  // Delete all tasks
  const deleteAllTasks = () => {
    setLoading(true);
    setError(null);
    axios
      .delete("http://localhost:8081/api/tasks/delete-all")
      .then(() => setTasks([]))
      .catch(() => setError("Failed to delete all tasks. Please try again."))
      .finally(() => setLoading(false));
  };

  // Handle task selection for bulk actions
  const handleTaskSelection = (id) => {
    const newSelectedTasks = new Set(selectedTasks);
    if (newSelectedTasks.has(id)) {
      newSelectedTasks.delete(id);
    } else {
      newSelectedTasks.add(id);
    }
    setSelectedTasks(newSelectedTasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container py-5">
      <div className="back">
        <h1 className="text-center mb-4" style={{ color: "#0d6efd" }}>
          My To-Do List
        </h1>

        {/* Error State */}
        {error && <div className="alert alert-danger">{error}</div>}

        {/* Loading State */}
        {loading && (
          <div className="text-center mb-3">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {/* Add Task Form */}
        <div className="row mb-4">
          <div className="col-md-4 mb-2">
            <input
              type="text"
              placeholder="Task Title"
              className="form-control"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            />
          </div>
          <div className="col-md-4 mb-2">
            <input
              type="text"
              placeholder="Task Description"
              className="form-control"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            />
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary w-100" onClick={addTask}>
              Add Task
            </button>
          </div>
        </div>

        {/* Bulk Actions */}
        <div className="mb-3">
          <button
            className="btn btn-danger me-2 m-2"
            onClick={deleteSelectedTasks}
            disabled={selectedTasks.size === 0}
          >
            Delete Selected
          </button>
          <button
            className="btn btn-warning"
            onClick={deleteAllTasks}
            disabled={tasks.length === 0}
          >
            Delete All
          </button>
        </div>

        {/* Task List */}
        <div className="row">
          {tasks.map((task) => (
            <div key={task.id} className="col-12 col-md-6 col-lg-4 mb-3">
              <div
                className="card shadow h-100"
                style={{
                  borderLeft: "5px solid #0d6efd",
                  backgroundColor: "#f8f9fa",
                }}
              >
                <div className="card-body">
                  <input
                    type="checkbox"
                    className="form-check-input me-2"
                    onChange={() => handleTaskSelection(task.id)}
                    checked={selectedTasks.has(task.id)}
                  />
                  <h5 className="card-title text-primary d-inline">
                    {task.title}
                  </h5>
                  <p className="card-text">{task.description}</p>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
