const pool = require("../../config/database");

async function getAllMessages(idcompany) {
    try {
        // Define SQL request
        const sql = `
        SELECT
        people.name,
        applications.message,
        advertisements.title,
        applications.created_at
      FROM applications
      INNER JOIN advertisements ON applications.id_advertisement = advertisements.id
      INNER JOIN people ON applications.id_people = people.id
      INNER JOIN companies ON advertisements.id_company = companies.id
      WHERE companies.id = $1
        AND applications.created_at BETWEEN NOW() - INTERVAL '3 months' AND NOW()
      ORDER BY applications.created_at DESC`
        // Waiting for result
        const result = await pool.query(sql, [idcompany]);
        // Return table advertisement
        return result.rows;
    } catch (error) {
        console.error('Error in getAllMessage', error);
        throw error;
    }
}

module.exports = { getAllMessages }