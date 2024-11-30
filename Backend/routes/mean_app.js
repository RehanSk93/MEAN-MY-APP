const express = require("express");
const UserDetails = require("../models/mean_app");
const router = express.Router();

const {
  handelGetAllUser,
  handelGetSingleUser,
  handelCreateNewUser,
  handelUpdateUser,
  handelDeleteUser,
} = require("../controllers/mean_app");

// Get all User Details
router.get("/", handelGetAllUser);

// Get Single User Details
router.get("/:id", handelGetSingleUser);

// Create a new User
router.post("/", handelCreateNewUser);

// Update existing user
router.patch("/:id", handelUpdateUser);

// Delete user details
router.delete("/:id", handelDeleteUser);

module.exports = router;
