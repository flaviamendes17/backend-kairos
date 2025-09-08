const express = require("express");
const router = express.Router();
const taskController = require("../controllers/tasksController");

// GET todas as tarefas (com filtro opcional por título)
router.get("/tasks", taskController.getAllTasks);

// GET uma tarefa por ID
router.get("/tasks/:id", taskController.getTask);

// POST criar nova tarefa
router.post("/tasks", taskController.createTask);

// DELETE uma tarefa
router.delete("/tasks/:id", taskController.deleteTask);

// PUT atualizar uma tarefa
router.put("/tasks/:id", taskController.updateTask);

module.exports = router;
