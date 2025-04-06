const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Create photos table if it doesn't exist
async function initializeDatabase() {
  try {
    const connection = await pool.getConnection();
    connection.release();
    console.log('Database initialized');
  } catch (err) {
    console.error('Database initialization error:', err);
  }
}

module.exports = { pool, initializeDatabase }; 