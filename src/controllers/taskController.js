const Task = require('../models/task');

exports.createTask = async (req, res) => {
  try {
    const { title, description, status, completed_at, project_id } = req.body;
    await Task.create({ title, description, status, completed_at, project_id });
    res.status(201).json({ msg: 'Task created' });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { project_id: req.params.projectId } });
    res.json(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { title, description, status, completed_at } = req.body;
    await Task.update({ title, description, status, completed_at }, { where: { id: taskId } });
    res.json({ msg: 'Task updated' });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await Task.destroy({ where: { id: req.params.taskId } });
    res.json({ msg: 'Task deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
};