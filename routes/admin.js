const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  //res.sendFile(path.join(rootDir, 'views', 'add-product.html')); //to serve static files
  res.render("add-product", {
    docTitle : "Add Product", 
    path :"/admin/add-product",
    formCSS : true,
    productCSS : true,
    activeProduct : true //layout : false will not use default layout in case of handlebars
  });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  products.push({title: req.body.title});
  res.redirect('/');
});

// module.exports = router; //modified export to share product data across

exports.routes = router;
exports.products = products;
