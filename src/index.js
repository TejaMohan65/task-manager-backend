require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const sequelize = require('./models');
const User = require('./models/user');
const Project = require('./models/project');
const Task = require('./models/task');

const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  console.log('✅ All tables synced');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});