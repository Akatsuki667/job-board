const { getAllMessages } = require('../models/applicationModel');

// Asynchrone function
const getAllMess = async (req, res) => {
    try {
        const idCompany = req.params.id;
        const allMess = await getAllMessages(idCompany);
        // Send response JSON format
        res.json(allMess);
    } catch (error) {
        // Define status error code and send error message JSON format
        res.status(500).json({ message: "Error server" });
    }
};

module.exports = { getAllMess };