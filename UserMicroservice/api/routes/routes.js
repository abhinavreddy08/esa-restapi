'use strict';
const express = require('express');
// create App function
module.exports = function(app) {
    var controller = require('../controllers/controllers');

    
    app
    .route("/rest/v1/users/:id/cart")
    .get(controller.listUserCart)
    .put(controller.createUpdateUserCart);
};