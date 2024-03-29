const express = require("express");
const routes = require("./routes");
const db = require("./config/connection.js");

const PORT = 3001;
const app = express();

process.cwd()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`\n running on port #${PORT}`);
  });
});
