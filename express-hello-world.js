'use strict';

const express = require('express');
const app = express();

require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Hello World!');
});
let port = process.env.PORT || 8080;
app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});