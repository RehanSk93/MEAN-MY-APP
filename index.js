const express = require("express");
const USER_LIST = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// Routes....
app.use("/", (req, res) => {
  return res.json(USER_LIST);
});

app.listen(PORT, () => console.log(`Server is started at PORT: ${PORT}`));
