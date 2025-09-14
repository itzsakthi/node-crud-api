const express = require("express");
const router = express.Router();
const {getUsers, getUser, createUser, updateUser, deleteUser} = require('../controllers/user.controller.js');


// Show all users
router.get('/', getUsers);

// SHow one user
router.get("/:id", getUser);

// Create a user
router.post("/", createUser);

// Update a user
router.put("/:id", updateUser);

// Delete a user
router.delete("/:id", deleteUser);




module.exports = router;