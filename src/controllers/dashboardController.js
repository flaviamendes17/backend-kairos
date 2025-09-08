const taskModel = require("../models/taskModel");
const statsModel = require("../models/statsModel");

const getDashboard = async (req, res) => {
    try {
        const todayStats = await statsModel.getTodayStats();
        const allTasks = await taskModel.getTasks();
        
        const pendingTasks = allTasks.filter(task => task.status === 'pendente');
        const inProgressTasks = allTasks.filter(task => task.status === 'em_progresso');
        const completedTasks = allTasks.filter(task => task.status === 'concluida');
        
        const dashboardData = {
            todayStats: todayStats || {
                tasks_completed: 0,
                tasks_created: 0,
                study_hours: 0,
                productivity_score: 0
            },
            tasksSummary: {
                pendente: pendingTasks.length,
                em_progresso: inProgressTasks.length,
                concluida: completedTasks.length,
                total: allTasks.length
            },
            recentTasks: allTasks.slice(0, 5)
        };
        
        res.json(dashboardData);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar dados do dashboard." });
    }
};

module.exports = { getDashboard };
