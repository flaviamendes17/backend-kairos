const express = require("express");
const router = express.Router();
const statsController = require("../controllers/statsController");

// GET todas as estatísticas
router.get("/stats", statsController.getAllStats);

// GET estatísticas de hoje (deve vir antes da rota /:id)
router.get("/stats/today", statsController.getTodayStats);

// GET uma estatística por ID
router.get("/stats/:id", statsController.getStat);

// POST criar nova estatística
router.post("/stats", statsController.createStat);

// DELETE uma estatística
router.delete("/stats/:id", statsController.deleteStat);

// PUT atualizar uma estadística
router.put("/stats/:id", statsController.updateStat);

module.exports = router;
