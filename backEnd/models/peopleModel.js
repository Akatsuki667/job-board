const pool = require("../../config/database");

// SQL request to read all user
async function getAllUsers() {
  try {
    // Define SQL request
    const sql = "SELECT * FROM people ORDER BY name ASC";
    // Waiting for result
    const result = await pool.query(sql);
    // Return table advertisement
    return result.rows;
  } catch (error) {
    console.error('Error in getAllUsers', error);
    throw error;
  }
};

// SQL request to read/find one user by ID
async function findUserById(userId) {
  try {
    //verify if UserId is a number
    if (isNaN(userId)) {
      throw new Error("Invalid userId");
    }
    // Define SQL request with SQL injection protection
    const sql = 'SELECT * FROM people WHERE id=$1';
    //maiting for result
    const result = await pool.query(sql, [userId]);
    return result.rows[0];
  } catch (error) {
    console.error('Error in findUserById', error);
    throw error;
  }
};

// SQL request to create an user
async function createUser(objectUser) {
  // objectUser is an object containing required informations to create a new user
  try {
    // Transforming object objectuser into an array for the SQL request
    const arrayobjectUser = [
      objectUser.email,
      objectUser.password_hash,
      objectUser.name,
      objectUser.phone,
      objectUser.status,
    ];

    const newUser = "INSERT INTO people (email, password_hash, name, phone, status) VALUES ($1, $2, $3, $4, $5) RETURNING id, email, name, phone, status";
    const result = await pool.query(newUser, arrayobjectUser);
    return result.rows[0];
  } catch (error) {
    console.error("Can't create a new user", error);
    throw error;
  }
};

// SQL request to delete one user by ID
async function deleteUserById(userId) {

  try {
    //verify if UserId is a number
    if (isNaN(userId)) {
      throw new Error("Invalid userId");
    }
    // Define SQL request with SQL injection protection
    const sql = 'DELETE FROM people WHERE id=$1 RETURNING *';
    //Waiting for result
    const result = await pool.query(sql, [userId]);
    if (result.rows.length === 0) {
      return { message: "User not found" };
    }
    return { message: "User deleted successfully" };
  } catch (error) {
    console.error('Error in deleteUserById', error);
    throw error;
  }
};

// SQL request to update one user by ID
async function updateUserById(objectUser, userId) {
  try {
    // Transforming object objectUser into an array for the SQL request
    const arrayObjectUser = [
      objectUser.email,
      objectUser.password_hash,
      objectUser.name,
      objectUser.phone,
      objectUser.status,
      userId  // The ID must be the last one for the where criteria of the SQL request
    ];
    // Define SQL request with SQL injection protection
    const sql = 'UPDATE people SET email=$1,password_hash=$2,name=$3,phone=$4,status=$5  WHERE id=$6 RETURNING *';
    //Waiting for result
    const result = await pool.query(sql, arrayObjectUser);
    if (result.rows.length === 0) {
      return { message: "User not found" };;
    }
    return { message: "User updated successfully", user: result.rows[0] };
  } catch (error) {
    console.error('Error in updateUserById', error);
    throw error;
  }
};


async function findByEmail(email) {
  try {
    // Define request SQL with SQL injection protection
    const sql = "SELECT * FROM people WHERE email=$1";
    const result = await pool.query(sql, [email]);
    return result.rows;
  } catch (error) {
    console.error("Error in findByEmail", error);
    throw error;
  }
};

module.exports = {getAllUsers, findUserById, createUser, deleteUserById, updateUserById, findByEmail} 

