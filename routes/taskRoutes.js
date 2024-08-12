const express = require("express");
const router = express.Router();
const Task = require("../models/task.js");
const authMiddleware = require("../middleware/auth.js");

// Create Task
router.post("/tasks", authMiddleware, async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;
    const newTask = new Task({
      title,
      description,
      dueDate,
      userId: req.user.id,
    });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/tasks/:id", authMiddleware, async (req, res) => {
  try {
    // Get the task ID from the request parameters
    const taskId = req.params.id;

    // Find the task by its ID
    const task = await Task.findById(taskId);

    // Check if the task exists
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Check if the task belongs to the authenticated user
    if (task.userId.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    // Send the task data as a response
    res.status(200).json(task);
  } catch (error) {
    // Handle any errors

    res.status(500).json({ message: "Server error" });
  }
});

// Get All Tasks
router.get("/tasks", authMiddleware, async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Task
router.put("/tasks/:id", authMiddleware, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    if (task.userId.toString() !== req.user.id)
      return res.status(401).json({ message: "Not authorized" });

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Task
router.delete("/tasks/:id", authMiddleware, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    if (task.userId.toString() !== req.user.id)
      return res.status(401).json({ message: "Not authorized" });

    await task.deleteOne();

    res.status(200).json({ message: "Task removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
