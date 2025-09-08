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

// Rotas da API
app.use("/api", taskRoutes); 
app.use("/api", statsRoutes); 
app.use("/api", dashboardRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor Kairos rodando em http://localhost:${PORT}`);
});