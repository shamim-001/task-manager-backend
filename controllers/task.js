import Task from "../models/Task.js";
import asyncHandler from "../middleware/asyncHandler.js";

export const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

export const createTask = asyncHandler(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

export const getTask = asyncHandler(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    return res.status(404).json({ msg: `No task on id: ${taskId}` });
  }
  res.status(200).json({ task });
});

export const deleteTask = asyncHandler(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findByIdAndDelete({ _id: taskId });
  if (!task) {
    return res.status(404).json({ msg: `No task on id: ${taskId}` });
  }
  res.status(200).json({ task });
});

export const updateTask = asyncHandler(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findByIdAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ msg: `No task on id: ${taskId}` });
  }
  res.status(200).json({ task });
});
