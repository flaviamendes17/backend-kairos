require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./db/connection');
const statsModel = require('./models/statsModel');
const taskModel = require('./models/taskModel');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('BackEnd Kairos rodando! 🚀');
});

// ===== ROTAS PARA TASKS =====
app.get('/api/tasks', async (req, res) => {
    try {
        const { status } = req.query;
        const tasks = status ? await taskModel.getByStatus(status) : await taskModel.getAll();
        res.json(tasks);
    } catch (error) {
        console.error('Erro ao buscar tasks:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

app.get('/api/tasks/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const task = await taskModel.getById(id);
        if (!task) {
            return res.status(404).json({ error: 'Task não encontrada' });
        }
        res.json(task);
    } catch (error) {
        console.error('Erro ao buscar task:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

app.post('/api/tasks', async (req, res) => {
    try {
        const { title, description, due_date, priority } = req.body;
        if (!title) {
            return res.status(400).json({ error: 'Título é obrigatório' });
        }
        const newTask = await taskModel.create(title, description, due_date, priority);
        res.status(201).json(newTask);
    } catch (error) {
        console.error('Erro ao criar task:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

app.put('/api/tasks/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const updatedTask = await taskModel.update(id, updates);
        if (!updatedTask) {
            return res.status(404).json({ error: 'Task não encontrada' });
        }
        res.json(updatedTask);
    } catch (error) {
        console.error('Erro ao atualizar task:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

app.delete('/api/tasks/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await taskModel.delete(id);
        if (!deletedTask) {
            return res.status(404).json({ error: 'Task não encontrada' });
        }
        res.json({ message: 'Task deletada com sucesso' });
    } catch (error) {
        console.error('Erro ao deletar task:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// ===== ROTAS PARA STATS =====
app.get('/api/stats', async (req, res) => {
    try {
        const stats = await statsModel.getAll();
        res.json(stats);
    } catch (error) {
        console.error('Erro ao buscar stats:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

app.get('/api/stats/today', async (req, res) => {
    try {
        const todayStats = await statsModel.getTodayStats();
        res.json(todayStats || {});
    } catch (error) {
        console.error('Erro ao buscar stats de hoje:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

app.post('/api/stats', async (req, res) => {
    try {
        const { date, tasks_completed, tasks_created, study_hours, productivity_score } = req.body;
        const newStat = await statsModel.create(date, tasks_completed, tasks_created, study_hours, productivity_score);
        res.status(201).json(newStat);
    } catch (error) {
        console.error('Erro ao criar stat:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor Kairos rodando na porta ${PORT}`);
    console.log(`📊 API disponível em: http://localhost:${PORT}/api`);
});