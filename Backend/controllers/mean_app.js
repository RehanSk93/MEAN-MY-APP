const UserDetails = require("../models/mean_app");

// Get all User Details
async function handelGetAllUser(req, res) {
  const result = await UserDetails.find({});
  return res.status(200).json(result);
}

// Get Single User Details
async function handelGetSingleUser(req, res) {
  const singleUser = await UserDetails.findById(req.params.id);
  console.log("Single User", singleUser);
  return res.status(200).json(singleUser);
}

// Create a new User
async function handelCreateNewUser(req, res) {
  const result = await UserDetails.create({
    username: req.body.username,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
  });
  return res.status(201).json({
    msg: "Record inserted successfully",
  });
}

// Update existing user
async function handelUpdateUser(req, res) {
  const result = await UserDetails.findByIdAndUpdate(req.params.id, {
    username: req.body.username,
    email: req.body.email,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
  });

  return res
    .status(200)
    .json({ msg: "User details Updated", userDetails: result });
}

// Delete user details
async function handelDeleteUser(req, res) {
  const result = await UserDetails.findByIdAndDelete(req.params.id);
  return res
    .status(200)
    .json({ msg: "User deleted successfully!", userId: result });
}

module.exports = {
  handelGetAllUser,
  handelGetSingleUser,
  handelCreateNewUser,
  handelUpdateUser,
  handelDeleteUser
};
