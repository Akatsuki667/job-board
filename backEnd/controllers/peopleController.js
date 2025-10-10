// Import function of model
const { getAllUsers } = require('../models/peopleModel');
const { findUserById } = require('../models/peopleModel');
const { createUser } = require('../models/peopleModel');
const { deleteUserById } = require('../models/peopleModel');
const { updateUserById } = require('../models/peopleModel');

// Asynchrone function
const getAll = async (req, res) => {
    try {
        const users = await getAllUsers();
        // Send response JSON format
        res.json(users);
    } catch (error) {
        // Define status error code and send error message JSON format
        res.status(500).json({ message: "Error server" });
    }
};

const findById = async (req, res) => {
    try {
        const idUser = req.params.id;
        const userById = await findUserById(idUser);
        if (!userById) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(userById);
    } catch (error) {
        // Define status error code and send error message JSON format
        res.status(500).json({ message: "Error server" });
    }
};

const createNewUser = async (req, res) => {
    try {
        const objectUser = req.body;
        const newUser = await createUser(objectUser);
        res.status(201).json(newUser)
    } catch (error) {
        console.error("Error creating User:", error);
        res.status(500).json({ message: "Error server" });
    }
};

const updateUser = async (req, res) => {
    try {
        const objectUser = req.body;
        const userId = req.params.id;
        const updatedUser = await updateUserById(objectUser, userId);
        if (!updatedUser.user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(updatedUser)
    } catch (error) {
        console.error("Error updating User:", error);
        res.status(500).json({ message: "Error server" });
    }
};

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await deleteUserById(userId);
        if (deletedUser.message === "User not found") {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(deletedUser);
    } catch (error) {
        console.error("Error deleting User:", error);
        res.status(500).json({ message: "Error server" });
    }
};

// Exportable function
module.exports = { getAll, findById, createNewUser, updateUser, deleteUser };