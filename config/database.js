// Import module PostgreSQL
const { Pool } = require('pg');
// Import dotenv to read environnement variable
require('dotenv').config()

const pool = new Pool({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})

// Test database connection
const testConnection = async () => {
    try {
        const client = await pool.connect()
        console.log('Connected to PostgreSQL');
        client.release();
    } catch (error) {
        console.error('Database connection error :', error);
        process.exit(1);
    }
}

testConnection();

// Exportable function
module.exports = pool;