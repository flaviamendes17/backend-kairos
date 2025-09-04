const tasksModel = require('../models/tasksModel');

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await tasksModel.getAll();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar tarefas' });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { title, description, due_date, priority } = req.body;
    const newTask = await tasksModel.create(title, description, due_date, priority);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { status, priority } = req.body;
    const updatedTask = await tasksModel.update(req.params.id, status, priority);
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar tarefa' });
  }
};
