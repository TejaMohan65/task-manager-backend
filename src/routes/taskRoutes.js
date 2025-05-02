const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');

router.post('/', verifyToken, createTask);
router.get('/:projectId', verifyToken, getTasks);
router.put('/:taskId', verifyToken, updateTask);
router.delete('/:taskId', verifyToken, deleteTask);

module.exports = router;