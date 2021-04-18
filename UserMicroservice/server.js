'use strict'


const express = require("express");
const connectDb = require('./config/db')
const app = express();

var routes = require('./api/routes/routes'); //importing route


const port = process.env.PORT || 8000;


app.use(express.json());
connectDb()
routes(app);


app.get('/', (req, res) => {
    res.send("This is user cart microservice");
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});