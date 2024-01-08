const sellerController = require('../../controllers/dasboard/sellerController') 
const { authMiddleware } = require('../../middlewares/authMiddleware')
const router = require('express').Router()

router.get('/request-seller-get',authMiddleware, sellerController.request_seller_get)  
router.get('/get-seller/:sellerId',authMiddleware, sellerController.get_seller)  
module.exports = router