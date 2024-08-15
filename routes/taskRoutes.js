const express = require("express");
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../Controllers/taskController.js");
const { protect } = require("../Middleware/authMiddleware.js");
const router = express.Router();

router.post("/tasks", protect, createTask);
router.get("/tasks", protect, getTasks);
router.put("/tasks/:taskId", protect, updateTask);
router.delete("/tasks/:taskId", protect, deleteTask);

module.exports = router;
