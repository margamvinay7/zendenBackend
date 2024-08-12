const express = require("express");
const router = express.Router();
const {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} = require("../controllers/taskController.js");
const Task = require("../models/task.js");
const authMiddleware = require("../middleware/auth.js");

// Create Task
router.post("/tasks", authMiddleware, createTask);

//Get Task
router.get("/tasks/:id", authMiddleware, getTask);

// Get All Tasks
router.get("/tasks", authMiddleware, getTasks);

// Update Task
router.put("/tasks/:id", authMiddleware, updateTask);

// Delete Task
router.delete("/tasks/:id", authMiddleware, deleteTask);

module.exports = router;
