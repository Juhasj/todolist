const express = require('express');

const router = express.Router();

const taskController  = require ('./controllers/taskController');
const tasksMiddleware  = require ('./middlewares/tasksMiddleware');


router.get('/tasks', taskController.getAll);
router.post('/tasks', tasksMiddleware.validateBody, taskController.createTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.put('/tasks/:id', tasksMiddleware.validateBody, tasksMiddleware.validateFieldStatus, taskController.updateTask);

module.exports = router;