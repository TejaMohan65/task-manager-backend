const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const { createProject, getProjects } = require('../controllers/projectController');

router.post('/', verifyToken, createProject);
router.get('/', verifyToken, getProjects);

module.exports = router;