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


// SQL request to save Application
async function createApplication(objectApplication) {
  // objectApplication is an object containing required informations to create a new application history
  try {
    // Transforming object objectapplication into an array for the SQL request
    const arrayobjectApplication = [
      objectApplication.id_people,
      objectApplication.id_advertisement,
      objectApplication.message,
    ];

    const newApp = `INSERT INTO 
    applications (id_people, id_advertisement, message) 
    VALUES ($1, $2, $3) 
    RETURNING *`;
    const result = await pool.query(newApp, arrayobjectApplication);
    return result.rows[0];
  } catch (error) {
    console.error("Can't create a new application", error);
    throw error;
  }
};

module.exports = { getAllMessages,createApplication }