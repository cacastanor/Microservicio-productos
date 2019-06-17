//Defines product routes to post and get request.
const express = require('express');
const router = express.Router();
const productAdapter = require('../app/api/logic/adapter');

router.post('/registerProduct', productAdapter.create);
router.post('/updateProduct', productAdapter.update);
//router.post('/updateProductName', productController.eventUpdateName);
router.post('/deleteProduct', productAdapter.delete);
router.post('/findProduct', productAdapter.findOne);

router.get('/', productAdapter.findAll);
router.post('/findByClient', productAdapter.findByClient);
router.post('/findByType', productAdapter.findByType);

router.get('/registerProduct', productAdapter.loadRegister);
router.get('/deleteProduct', productAdapter.loadRegister);
router.get('/updateProduct', productAdapter.loadRegister);



module.exports = router;