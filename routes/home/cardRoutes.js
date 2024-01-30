const cardController = require('../../controllers/home/cardController')
const router = require('express').Router()

router.post('/home/product/add-to-card',cardController.add_to_card) 

module.exports = router 