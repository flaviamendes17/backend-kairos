const pool = require('../db/connection');

exports.getAll = async () => {
  const result = await pool.query('SELECT * FROM tasks ORDER BY id DESC');
  return result.rows;
};

exports.getById = async (id) => {
  const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
  return result.rows[0];
};

exports.create = async (title, description, due_date, priority = 'medium') => {
  const result = await pool.query(
    'INSERT INTO tasks (title, description, due_date, priority) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, description, due_date, priority]
  );
  return result.rows[0];
};

exports.update = async (id, updates) => {
  const { title, description, due_date, priority, status } = updates;
  const result = await pool.query(
    `UPDATE tasks SET 
     title = COALESCE($2, title),
     description = COALESCE($3, description),
     due_date = COALESCE($4, due_date),
     priority = COALESCE($5, priority),
     status = COALESCE($6, status)
     WHERE id = $1 RETURNING *`,
    [id, title, description, due_date, priority, status]
  );
  return result.rows[0];
};

exports.delete = async (id) => {
  const result = await pool.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

exports.getByStatus = async (status) => {
  const result = await pool.query('SELECT * FROM tasks WHERE status = $1 ORDER BY due_date ASC', [status]);
  return result.rows;
};