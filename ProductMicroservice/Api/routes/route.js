'use strict';
const express = require('express');


module.exports = function(app) {
    var controller = require('../controller/controller');
    app
    .route("/rest/v1/products")
    .get(controller.listProducts)
}