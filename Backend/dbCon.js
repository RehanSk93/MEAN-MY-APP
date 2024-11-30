const mongoose = require("mongoose");

// Create Connection
async function connectMongoDB(url) {
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("MOngoDB Connection Error!", err));
}

module.exports = { connectMongoDB };
