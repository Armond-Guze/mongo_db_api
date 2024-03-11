const express = require('express');
const routes = require('./routes');
const db = require('./config/connection.js');

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)

app.listen(PORT, () => {
    console.log(`\n running on port #${PORT}`)
});