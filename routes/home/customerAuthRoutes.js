const customerAuthController = require('../../controllers/home/customerAuthController')
const router = require('express').Router()

router.post('/customer/customer-register',customerAuthController.customer_register)
router.post('/customer/customer-login',customerAuthController.customer_login)

router.get('/customer/logout',customerAuthController.customer_logout)

module.exports = router 