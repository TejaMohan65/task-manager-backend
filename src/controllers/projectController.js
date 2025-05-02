const Project = require('../models/project');

exports.createProject = async (req, res) => {
  try {
    const { name } = req.body;
    const count = await Project.count({ where: { user_id: req.user.id } });
    if (count >= 4) return res.status(403).json({ msg: 'Project limit reached' });

    await Project.create({ name, user_id: req.user.id });
    res.status(201).json({ msg: 'Project created' });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll({ where: { user_id: req.user.id } });
    res.json(projects);
  } catch (err) {
    res.status(500).json(err);
  }
};