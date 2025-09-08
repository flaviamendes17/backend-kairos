const statsModel = require("../models/statsModel");

const getAllStats = async (req, res) => {
    try {
        const stats = await statsModel.getStats();
        res.json(stats);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar estatísticas." });
    }
};

const getStat = async (req, res) => {
    try {
        const stat = await statsModel.getStatById(req.params.id);
        if (!stat) {
            return res.status(404).json({ message: "Estatística não encontrada." });
        }
        res.json(stat);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar estatística." });
    }
};

const createStat = async (req, res) => {
    try {
        const { date, tasks_completed, tasks_created, study_hours, productivity_score } = req.body;
        const newStat = await statsModel.createStat(date, tasks_completed, tasks_created, study_hours, productivity_score);
        res.status(201).json(newStat);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar estatística." });
    }
};

const deleteStat = async (req, res) => {
    try {
        const message = await statsModel.deleteStat(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar estatística." });
    }
};

const updateStat = async (req, res) => {
    try {
        const { date, tasks_completed, tasks_created, study_hours, productivity_score } = req.body;
        const updatedStat = await statsModel.updateStat(req.params.id, date, tasks_completed, tasks_created, study_hours, productivity_score);
        if (!updatedStat) {
            return res.status(404).json({ message: "Estatística não encontrada." });
        }
        res.json(updatedStat);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar estatística." });
    }
};

const getTodayStats = async (req, res) => {
    try {
        const todayStats = await statsModel.getTodayStats();
        res.json(todayStats || {});
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar estatísticas de hoje." });
    }
};

module.exports = { getAllStats, getStat, createStat, deleteStat, updateStat, getTodayStats };
