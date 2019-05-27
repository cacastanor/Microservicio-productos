//Defines product routes to post and get request.
const express = require('express');
const router = express.Router();
const productController = require('../app/api/controllers/products');

router.post('/registerProduct', productController.create);
router.post('/updateProduct', productController.update);
router.post('/deleteProduct', productController.delete);
router.post('/getProduct', productController.findOne);
router.get('/', productController.findAll);


module.exports = router;