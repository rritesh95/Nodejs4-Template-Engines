const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin'); 

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  console.log("shop.js",products); //products data vailable here but will be shared across
  //requests across users, same data will be available to all the user requests.
  //res.sendFile(path.join(rootDir, 'views', 'shop.html')); //used to send static files
  res.render("shop", { 
    prods : products, 
    docTitle : "Shop", 
    path :"/", 
    hasProducts : products.length > 0,
    activeShop : true,
    productCSS : true
  });//render method takes configuration 
  //set by template engines and default tempalte engine if not provided
});

module.exports = router;
