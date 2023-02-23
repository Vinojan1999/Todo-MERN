const express = require('express');
const router = express.Router();

const controller = require('../controller/todo.controller')
router.get('/', controller.getTodo),
router.post('/add',controller.addTodo ),
router.delete('/delete/:id', controller.deleteTodo),
router.get('/complete/:id', controller.putTodo)     // the put method was changed as get

module.exports = router