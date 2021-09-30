const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const database = require('./database');

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());
routes(app)

app.listen(port, () => console.log(`Server is running on port ${port}`));

module.exports = app;