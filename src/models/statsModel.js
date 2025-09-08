const pool = require("../config/database");

const getStats = async () => {
    const result = await pool.query('SELECT * FROM stats ORDER BY date DESC');
    return result.rows;
};

const getStatById = async (id) => {
    const result = await pool.query('SELECT * FROM stats WHERE id = $1', [id]);
    return result.rows[0];
};

const createStat = async (date, tasks_completed, tasks_created, study_hours, productivity_score) => {
    const result = await pool.query(
        'INSERT INTO stats (date, tasks_completed, tasks_created, study_hours, productivity_score) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [date, tasks_completed, tasks_created, study_hours, productivity_score]
    );
    return result.rows[0];
};

const deleteStat = async (id) => {
    const result = await pool.query('DELETE FROM stats WHERE id = $1 RETURNING *', [id]);
    
    if (result.rowCount === 0) {
        return { error: "Estatística não encontrada." };
    }
    
    return { message: "Estatística deletada com sucesso." };
};

const updateStat = async (id, date, tasks_completed, tasks_created, study_hours, productivity_score) => {
    const result = await pool.query(
        `UPDATE stats SET 
         date = COALESCE($2, date),
         tasks_completed = COALESCE($3, tasks_completed),
         tasks_created = COALESCE($4, tasks_created),  
         study_hours = COALESCE($5, study_hours),
         productivity_score = COALESCE($6, productivity_score)
         WHERE id = $1 RETURNING *`,
        [id, date, tasks_completed, tasks_created, study_hours, productivity_score]
    );
    return result.rows[0];
};

const getTodayStats = async () => {
    const result = await pool.query('SELECT * FROM stats WHERE date = CURRENT_DATE');
    return result.rows[0];
};

module.exports = { getStats, getStatById, createStat, deleteStat, updateStat, getTodayStats };
