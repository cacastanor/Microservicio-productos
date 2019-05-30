//Defines product routes to post and get request.
const express = require('express');
const router = express.Router();
const productController = require('../app/api/controllers/products');

router.post('/createProduct', productController.eventCreate);
router.post('/updateProductCC', productController.eventUpdateCC);
router.post('/updateProductName', productController.eventUpdateName);
router.post('/deleteProduct', productController.eventDelete);
router.post('/findProduct', productController.findProduct);
router.get('/', productController.listProducts);
router.get('/events', productController.listEvents);




module.exports = router;