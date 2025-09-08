const taskModel = require("../models/taskModel");

const getAllTasks = async (req, res) => {
    try {
        const { title } = req.query;
        const tasks = await taskModel.getTasks(title);
        res.json(tasks);
    } catch (error) { 
        res.status(500).json({ message: "Erro ao buscar tarefas." });
    }
};

const getTask = async (req, res) => {
    try {
        const task = await taskModel.getTaskById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Tarefa não encontrada." });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar tarefa." });
    }
};

const createTask = async (req, res) => {
    try {
        const { title, description, due_date, priority } = req.body;
        if (!title) {
            return res.status(400).json({ message: "Título é obrigatório." });
        }
        const newTask = await taskModel.createTask(title, description, due_date, priority);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar tarefa." });
    }
};

const deleteTask = async (req, res) => {
    try {
        const message = await taskModel.deleteTask(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar tarefa." });
    }
};

const updateTask = async (req, res) => {
    try {
        const { title, description, due_date, priority, status } = req.body;
        const updatedTask = await taskModel.updateTask(req.params.id, title, description, due_date, priority, status);
        if (!updatedTask) {
            return res.status(404).json({ message: "Tarefa não encontrada." });
        }
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar tarefa." });
    }
};

module.exports = { getAllTasks, getTask, createTask, deleteTask, updateTask };
