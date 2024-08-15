const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  const { title, description, status, priority, due_date } = req.body;

  try {
    const task = await Task.create({
      title,
      description,
      status,
      priority,
      due_date,
      user: req.user._id,
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getTasks = async (req, res) => {
  const { status, priority, due_date, search } = req.query;
  const query = { user: req.user._id };

  if (status) query.Status = status;
  if (priority) query.Priority = priority;
  if (due_date) query.due_date = { $lte: new Date(due_date) };
  if (search)
    query.$or = [
      { title: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ];

  try {
    console.log("Query:", query);
    const tasks = await Task.find(query);
    console.log("Tasks:", tasks);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTask = async (req, res) => {
  const { title, description, status, priority, due_date } = req.body;
  const { taskId } = req.params;

  try {
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    // Update task fields
    task.title = title || task.title;
    task.description = description || task.description;
    task.status = status || task.status;
    task.priority = priority || task.priority;
    task.due_date = due_date ? new Date(due_date) : task.due_date;

    // Save the updated task
    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    // Find task by ID from the route parameter
    const task = await Task.findById(req.params.taskId);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Check if the user owns the task
    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    // Delete the task
    await Task.findByIdAndDelete(req.params.taskId);
    res.json({ message: "Task removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
