const pool = require("../../config/database");

async function getAllAdvertisements() {
  try {
    // Define SQL request
    const sql = `SELECT 
    advertisements.*,
    companies.company_name AS company_name
    FROM advertisements
    INNER JOIN companies ON advertisements.id_company = companies.id 
    ORDER BY advertisements.created_at DESC`;
    // Waiting for result
    const result = await pool.query(sql);
    // Return table advertisement
    return result.rows;
  } catch (error) {
    console.error('Error in getAllAdvertisements', error);
    throw error;
  }
}

async function findAdvertisementsById(dataId) {
  try {
    // Define SQL request with SQL injection protection
    const sql = `SELECT 
    advertisements.*,
    companies.company_name AS company_name
    FROM advertisements
    INNER JOIN companies ON advertisements.id_company = companies.id 
    WHERE advertisements.id =$1`;
    //Waiting for result
    const result = await pool.query(sql, [dataId]);
    return result.rows;
  } catch (error) {
    console.error('Error in findAdvertisementById', error);
    throw error;
  }
}

async function createAdvertisements(objectAdvertisement) {
  // objectAdvertisement is an object containing required informations to create a new advertisement
  try {
    // Transforming object objectAdvertisement into an array for the SQL request
    const arrayObjectAdvertisement = [
      objectAdvertisement.id_company,
      objectAdvertisement.title,
      objectAdvertisement.short_description,
      objectAdvertisement.long_description,
      objectAdvertisement.wages,
      objectAdvertisement.working_time,
      objectAdvertisement.place,
    ];

    const newAdvertisement = "INSERT INTO advertisements (id_company, title, short_description, long_description, wages, working_time, place) VALUES ($1, $2, $3, $4, $5, $6, $7)";

    const result = await pool.query(newAdvertisement, arrayObjectAdvertisement);

    return { 
      message: "Advertisement created successfully" };
  } catch (error) {
    console.error("Can't create a new advertisements", error);
    throw error;
  }
}

// SQL request to update one advertisement by ID
async function updateAdvertisementById(objectAdvertisement, advertisementId) {
  try {
    // Validate input
    if (isNaN(advertisementId)) {
      throw new Error('Advertisement ID is required');
    }

    // Transforming object objectAdvertisement into an array for the SQL request
    const arrayObjectAdvertisement = [
      objectAdvertisement.id_company,
      objectAdvertisement.title,
      objectAdvertisement.short_description,
      objectAdvertisement.long_description,
      objectAdvertisement.wages,
      objectAdvertisement.working_time,
      objectAdvertisement.place,
      advertisementId
    ];

    // Define SQL request with SQL injection protection
    const sql = `
      UPDATE advertisements 
      SET 
        id_company = $1,
        title = $2,
        short_description = $3,
        long_description = $4,
        wages = $5,
        working_time = $6,
        place = $7
      WHERE id = $8
      RETURNING *
    `;

    // Waiting for result
    const result = await pool.query(sql, arrayObjectAdvertisement);

    // Check if any row was updated
    if (result.rowCount === 1) {
      return {
        message: "Advertisement updated successfully",
        data: result.rows[0]
      };
    }

    return {
      message: "Advertisement not found"
    };

  } catch (error) {
    console.error('Error in updateAdvertisementById:', error);
    throw error;
  }
}

// SQL request to delete one advertisement by ID
async function deleteAdvertisementById(advertisementId) {

  try {
    //verify if UserId is a number
    if (isNaN(advertisementId)) {
      throw new Error("Invalid advertisementId");
    }
    // Define SQL request with SQL injection protection
    const sql = 'DELETE FROM advertisements WHERE id=$1 RETURNING *';
    //Waiting for result
    const result = await pool.query(sql, [advertisementId]);
    if (result.rows.length === 0) {
      return { message: "Advertisement not found" };
    }
    return { message: "Advertisement deleted successfully" };
  } catch (error) {
    console.error('Error in deleteAdvertisementById', error);
    throw error;
  }
};

module.exports = { getAllAdvertisements, findAdvertisementsById, createAdvertisements, updateAdvertisementById, deleteAdvertisementById };