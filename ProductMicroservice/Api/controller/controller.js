'use strict';
const Product = require('../models/model')

var controller = {
    listProducts : async  function(req, res) { 
        try{
            const products = await Product.find();
            res.json(products)
        } catch(err){
            res.json({message:err})
        }
    }
}

module.exports = controller