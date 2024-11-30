const mongoose = require("mongoose");

// Create a schema
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
    address: {
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

module.exports = UserDetails;
