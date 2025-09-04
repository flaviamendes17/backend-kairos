const statsModel = require('../models/statsModel');

exports.getStats = async (req, res) => {
  try {
    const stats = await statsModel.getAll();
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar estatísticas' });
  }
};
