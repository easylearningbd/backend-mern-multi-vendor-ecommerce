const cardController = require('../../controllers/home/cardController')
const router = require('express').Router()

router.post('/home/product/add-to-card',cardController.add_to_card) 
router.get('/home/product/get-card-product/:userId',cardController.get_card_products)
router.delete('/home/product/delete-card-product/:card_id',cardController.delete_card_products)
router.put('/home/product/quantity-inc/:card_id',cardController.quantity_inc)
router.put('/home/product/quantity-dec/:card_id',cardController.quantity_dec)

router.post('/home/product/add-to-wishlist',cardController.add_wishlist) 
router.get('/home/product/get-wishlist-products/:userId',cardController.get_wishlist) 
router.delete('/home/product/remove-wishlist-product/:wishlistId',cardController.remove_wishlist) 

module.exports = router 