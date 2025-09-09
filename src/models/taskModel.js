const pool = require("../config/database");

const getTasks = async (title) => {
    if (!title) {
        const result = await pool.query('SELECT * FROM tasks ORDER BY created_at DESC');
        return result.rows;
    } else {
        const result = await pool.query(
            'SELECT * FROM tasks WHERE title ILIKE $1 ORDER BY created_at DESC',
            [`%${title}%`]
        );
        return result.rows;
    }
};

const getTaskById = async (id) => {
    const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
    return result.rows[0];
};

const createTask = async (title, description, due_date, priority = 'media') => {
    const result = await pool.query(
        'INSERT INTO tasks (title, description, due_date, priority) VALUES ($1, $2, $3, $4) RETURNING *',
        [title, description, due_date, priority]
    );
    return result.rows[0];
};

const deleteTask = async (id) => {
    const result = await pool.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);
    
    if (result.rowCount === 0) {
        return { error: "Tarefa não encontrada." };
    }
    
    return { message: "Tarefa deletada com sucesso." };
};

const updateTask = async (id, title, description, due_date, priority, status) => {
    const result = await pool.query(
        `UPDATE tasks SET 
        title = COALESCE($2, title),
        description = COALESCE($3, description),
        due_date = COALESCE($4, due_date),
        priority = COALESCE($5, priority),
        status = COALESCE($6, status),
        updated_at = CURRENT_TIMESTAMP
         WHERE id = $1 RETURNING *`,
        [id, title, description, due_date, priority, status]
    );
    return result.rows[0];
};

const getTasksByStatus = async (status) => {
    const result = await pool.query('SELECT * FROM tasks WHERE status = $1 ORDER BY due_date ASC', [status]);
    return result.rows;
};

module.exports = { getTasks, getTaskById, createTask, deleteTask, updateTask, getTasksByStatus };