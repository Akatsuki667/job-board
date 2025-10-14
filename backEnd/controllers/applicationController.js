const { getAllMessages } = require('../models/applicationModel');
const { createApplication } = require('../models/applicationModel');

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

const createNewApplication = async (req, res) => {
    try {
        const objectApplication = req.body;
        const newApp = await createApplication(objectApplication);
        res.status(201).json(newApp)
    } catch (error) {
        console.error("Error creating Application:", error);
        res.status(500).json({ message: "Error server" });
    }
};

module.exports = { getAllMess, createNewApplication};