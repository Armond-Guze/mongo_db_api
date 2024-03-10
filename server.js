const express = require('express');
const routes = require('./routes')

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)

app.listen(PORT, () => {
    console.log(`\n running on port #${PORT}`)
});