require("dotenv").config();
const express = require("express");
const cors = require("cors");
const taskRoutes = require("./src/routes/tasks");
const statsRoutes = require("./src/routes/stats");
const dashboardRoutes = require("./src/routes/dashboard");

const app = express();
app.use(cors());
app.use(express.json());

// Rota inicial
app.get('/', (req, res) => {
    res.send('BackEnd Kairos rodando! 🚀');
});

// Rota principal da API - busca todos os dados
app.get('/api/kairos', async (req, res) => {
    try {
        // Dados de exemplo (funcionará mesmo sem banco de dados)
        const exemploTasks = [
            {
                id: 1,
                title: "Estudar JavaScript",
                description: "Revisar conceitos de async/await",
                status: "pendente",
                priority: "alta",
                due_date: "2025-09-10",
                created_at: "2025-09-09T10:00:00Z"
            },
            {
                id: 2,
                title: "Desenvolver API",
                description: "Criar endpoints do backend",
                status: "em_progresso",
                priority: "alta",
                due_date: "2025-09-12",
                created_at: "2025-09-08T14:30:00Z"
            },
            {
                id: 3,
                title: "Documentação",
                description: "Escrever documentação da API",
                status: "concluida",
                priority: "media",
                due_date: "2025-09-08",
                created_at: "2025-09-07T09:15:00Z"
            }
        ];

        const exemploStats = [
            {
                id: 1,
                date: "2025-09-09",
                tasks_completed: 3,
                tasks_created: 2,
                study_hours: 6.5,
                productivity_score: 85
            },
            {
                id: 2,
                date: "2025-09-08",
                tasks_completed: 2,
                tasks_created: 3,
                study_hours: 4.0,
                productivity_score: 72
            }
        ];

        // Tentar buscar dados reais do banco, se falhar usar dados de exemplo
        let allTasks = exemploTasks;
        let allStats = exemploStats;
        let todayStats = exemploStats[0];
        let isUsingDatabase = false;

        try {
            const taskModel = require("./src/models/taskModel");
            const statsModel = require("./src/models/statsModel");
            
            allTasks = await taskModel.getTasks();
            allStats = await statsModel.getStats();
            todayStats = await statsModel.getTodayStats();
            isUsingDatabase = true;
        } catch (dbError) {
            console.log("⚠️  Usando dados de exemplo - banco não conectado:", dbError.message);
        }
        
        // Organizar dados das tarefas por status
        const tasksSummary = {
            pendente: allTasks.filter(task => task.status === 'pendente'),
            em_progresso: allTasks.filter(task => task.status === 'em_progresso'),
            concluida: allTasks.filter(task => task.status === 'concluida')
        };
        
        // Resposta completa
        const response = {
            message: '🚀 API Kairos - Todos os dados',
            timestamp: new Date().toISOString(),
            database_connected: isUsingDatabase,
            data: {
                tasks: {
                    all: allTasks,
                    summary: {
                        pendente: tasksSummary.pendente.length,
                        em_progresso: tasksSummary.em_progresso.length,
                        concluida: tasksSummary.concluida.length,
                        total: allTasks.length
                    },
                    byStatus: tasksSummary
                },
                stats: {
                    all: allStats,
                    today: todayStats || {
                        tasks_completed: 0,
                        tasks_created: 0,
                        study_hours: 0,
                        productivity_score: 0
                    }
                }
            }
        };
        
        res.json(response);
    } catch (error) {
        res.status(500).json({
            message: 'Erro ao buscar dados',
            error: error.message,
            timestamp: new Date().toISOString()
        });
    }
});

// Rotas da API
app.use("/api/kairos", taskRoutes); 
app.use("/api/kairos", statsRoutes); 
app.use("/api/kairos", dashboardRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor Kairos rodando em http://localhost:${PORT}`);
});