//Defines product routes to post and get request.
const express = require('express');
const router = express.Router();
const productAdapter = require('../app/api/logic/adapter');

router.post('/registerProduct', productAdapter.create);
router.post('/updateProduct', productAdapter.update);
//router.post('/updateProductName', productController.eventUpdateName);
router.post('/deleteProduct', productAdapter.delete);
router.post('/findProduct', productAdapter.findOne);
router.post('/rebuild', productAdapter.rebuild);
router.post('/clientsOfProduct', productAdapter.clientsOfProduct);
router.get('/', productAdapter.findAll);
router.post('/findByClient', productAdapter.findByClient);
router.post('/findByType', productAdapter.findByType);

router.get('/registerProduct', productAdapter.loadRegister);
router.get('/deleteProduct', productAdapter.loadDelete);
router.get('/updateProduct', productAdapter.loadUpdate);
router.get('/searchProduct', productAdapter.loadSearch);



module.exports = router;