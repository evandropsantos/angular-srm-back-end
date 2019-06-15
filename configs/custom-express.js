const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

// app.set("json spaces", 4);

// app.use( express.static('public') );

require('../routes/buttons')(app);


module.exports = app;