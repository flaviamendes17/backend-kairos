const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Teste de conexão
pool.on('connect', () => {
  console.log('Conectado ao banco PostgreSQL - kairos');
});

pool.on('error', (err) => {
  console.error('Erro na conexão com o banco:', err);
});

module.exports = pool;
