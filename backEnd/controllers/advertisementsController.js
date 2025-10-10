// Import function of model
const { getAllAdvertisements } = require('../models/advertisementsModel');
const { findAdvertisementsById } = require('../models/advertisementsModel');
const { createAdvertisements } = require('../models/advertisementsModel');
const { updateAdvertisementById } = require('../models/advertisementsModel');
const { deleteAdvertisementById } = require('../models/advertisementsModel');

// Asynchrone function
const getAll = async (req, res) => {
  try {
    const advertisements = await getAllAdvertisements();
    // Send response JSON format
    res.json(advertisements);
  } catch (error) {
    // Define status error code and send error message JSON format
    res.status(500).json({ message: "Error server" });
  }
};

const findById = async (req, res) => {
  try {
    const idAdvertisment = req.params.id;
    const advertisementById = await findAdvertisementsById(idAdvertisment);
    res.json(advertisementById);
  } catch (error) {
    res.status(500).json({ message: "Error server" });
  }
};

const createAds = async (req, res) => {
  try {
    const id_company = req.params.id;
    const objectAdvertisement = req.body;
    const newAdvertisements = await createAdvertisements(objectAdvertisement);
    res.status(201).json({
      message: "Advertisement created successfully",
    })
  } catch (error) {
    console.error("Error creating advertisement:", error);
    res.status(500).json({ message: "Error server" });
  }
};

const updateAds = async (req, res) => {
  try {
    const objectAdvertisement = req.body;
    const advertisementId = req.params.id;
    const result = await updateAdvertisementById(objectAdvertisement, advertisementId);

    if (result.message === "Advertisement not found") {
      return res.status(404).json({
        message: "Advertisement not found"
      });
    }

    res.status(200).json({
      message: result.message,
      data: result.data
    });

  } catch (error) {
    console.error("Error updating advertisement:", error);

    if (error.message === "Advertisement ID is required") {
      return res.status(400).json({
        message: "Invalid advertisement ID"
      })
    }

    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteAdvertisement = async (req, res) => {
  try {
    const advertisementId = req.params.id;
    const deletedAdvertisement = await deleteAdvertisementById(advertisementId);
    if (deletedAdvertisement.message === "Advertisement not found") {
      return res.status(404).json({ message: "Advertisement not found" });
    }
    res.status(200).json(deletedAdvertisement);
  } catch (error) {
    console.error("Error deleting Advertisement:", error);
    res.status(500).json({ message: "Error server" });
  }
};

// Exportable function
module.exports = { getAll, findById, createAds, updateAds, deleteAdvertisement };