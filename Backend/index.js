// Import Core Packages
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Import custom packages and pages
const { connectMongoDB } = require("./dbCon");
const MEAN_APP_ROUTER = require("./routes/mean_app");

const app = express();
const PORT = 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

// parse application/json
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// Connect to Database
connectMongoDB('mongodb://127.0.0.1:27017/MEAN-My-App');

app.use("/mean_app", MEAN_APP_ROUTER);
// App listen on port 8080
app.listen(PORT, () => console.log(`Server is started at PORT: ${PORT}`));
