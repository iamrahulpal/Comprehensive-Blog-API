const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const postRoutes = require("./routes/postRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const mongo = require("./util/db");
const dotenv = require("dotenv");
dotenv.config();

mongo.connect();
app.use(bodyParser.json());
app.use("/api/posts", postRoutes);
app.use("/api/category", categoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
