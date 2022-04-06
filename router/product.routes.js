try {
    const express =  require('express');
    const router = express.Router();
    const productController = require('../controller/product.controller');

    router.delete('/delete/:pdid', productController.deleteProduct);
    router.get('/get/:pdid/:limit', productController.getProducts);
    router.get('/getall', productController.getAllProducts);
    router.post('/post', productController.postProduct);
    router.get('/getId/:pdid', productController.getId);
    router.get('/getLimite/:limit', productController.getLimite);

    module.exports = router;
} catch (error) {
    
}