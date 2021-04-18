'use strict';
const express = require('express')
const connectDb = require('./connection/db')
const bodyparse = require('body-parser')

const app = express()
app.use(bodyparse.json());

const posts = require('./Api/routes/route')
app.get('/', (req, res) => {
    res.send("thid is product microservice");
});
connectDb()
posts(app);
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});