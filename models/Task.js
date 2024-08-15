const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    Status: {
      type: String,
      enum: ["Todo", "In progress", "Done"],
      default: "Todo",
    },
    Priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },
    due_date: {
      type: Date,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
