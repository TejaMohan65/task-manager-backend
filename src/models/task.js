const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Project = require('./project');

const Task = sequelize.define('Task', {
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  status: DataTypes.STRING,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  completed_at: DataTypes.DATE
}, {
  tableName: 'tasks',
  timestamps: false
});

Project.hasMany(Task, { foreignKey: 'project_id' });
Task.belongsTo(Project, { foreignKey: 'project_id' });

module.exports = Task;