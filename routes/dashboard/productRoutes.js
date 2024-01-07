const productController = require('../../controllers/dasboard/productController') 
const { authMiddleware } = require('../../middlewares/authMiddleware')
const router = require('express').Router()

router.post('/product-add',authMiddleware, productController.add_product)  
router.get('/products-get',authMiddleware, productController.products_get)  
router.get('/product-get/:productId',authMiddleware, productController.product_get)
router.post('/product-update',authMiddleware, productController.product_update) 
router.post('/product-image-update',authMiddleware, productController.product_image_update)   

module.exports = router