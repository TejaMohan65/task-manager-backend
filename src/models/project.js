const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const User = require('./user');

const Project = sequelize.define('Project', {
  name: DataTypes.STRING
}, {
  tableName: 'projects'
});

User.hasMany(Project, { foreignKey: 'user_id' });
Project.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Project;