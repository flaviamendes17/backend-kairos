const pool = require('../db/connection');

exports.getAll = async () => {
  const result = await pool.query('SELECT * FROM stats ORDER BY date DESC');
  return result.rows;
};

exports.create = async (date, tasks_completed, tasks_created, study_hours, productivity_score) => {
  const result = await pool.query(
    'INSERT INTO stats (date, tasks_completed, tasks_created, study_hours, productivity_score) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [date, tasks_completed, tasks_created, study_hours, productivity_score]
  );
  return result.rows[0];
};

exports.getById = async (id) => {
  const result = await pool.query('SELECT * FROM stats WHERE id = $1', [id]);
  return result.rows[0];
};

exports.getByDateRange = async (startDate, endDate) => {
  const result = await pool.query(
    'SELECT * FROM stats WHERE date BETWEEN $1 AND $2 ORDER BY date DESC',
    [startDate, endDate]
  );
  return result.rows;
};

exports.getTodayStats = async () => {
  const result = await pool.query(
    'SELECT * FROM stats WHERE date = CURRENT_DATE',
    []
  );
  return result.rows[0];
};
