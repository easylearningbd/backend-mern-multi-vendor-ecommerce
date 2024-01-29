const customerAuthController = require('../../controllers/home/customerAuthController')
const router = require('express').Router()

router.post('/customer/customer-register',customerAuthController.customer_register)
 

module.exports = router 