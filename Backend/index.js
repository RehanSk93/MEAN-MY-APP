const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

const USER_LIST = require("./MOCK_DATA.json");

const app = express();
const PORT = 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

// parse application/json
app.use(bodyParser.json());

// Create Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/MEAN-My-App")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MOngoDB Connection Error!", err));

// Create Schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
    },
    zip: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const UserDetails = mongoose.model("userList", userSchema);

// Get all User Details
app.get("/", async (req, res) => {
  const result = await UserDetails.find({});
  return res.status(200).json(result);
});

// Get Single User Details
app.get("/:id", async (req, res) => {
  const singleUser = await UserDetails.findById(req.params.id);
  console.log("Single User", singleUser);

  return res.status(200).json(singleUser);
});

// Create a new User
app.post("/", async (req, res) => {
  const result = await UserDetails.create({
    username: req.body.username,
    email: req.body.email,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
  });
  return res.status(201).json({
    msg: "Record inserted successfully",
  });
});

// Update existing user
app.patch("/:id", async (req, res) => {
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
});

// Delete user details
app.delete("/:id", async (req, res) => {
  const result = await UserDetails.findByIdAndDelete(req.params.id);
  return res
    .status(200)
    .json({ msg: "User deleted successfully!", userId: result });
});


// App listen on port 8080
app.listen(PORT, () => console.log(`Server is started at PORT: ${PORT}`));
