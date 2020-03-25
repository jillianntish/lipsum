require('dotenv').config();
const express = require('express');
const app = express();

const routes = require('./router');
const PORT = process.env.PORT;

app.use(express.static('public'));
app.use(routes);

app.listen(PORT || 5000, () => console.log(`listening on port:${PORT}`))
