const ChatController = require('../controllers/chat/ChatController')
const { authMiddleware } = require('../middlewares/authMiddleware')
const router = require('express').Router()

router.post('/chat/customer/add-customer-friend',ChatController.add_customer_friend)
router.post('/chat/customer/send-message-to-seller',ChatController.customer_message_add)

router.get('/chat/seller/get-customers/:sellerId',ChatController.get_customers)
router.get('/chat/seller/get-customer-message/:customerId',authMiddleware,ChatController.get_customers_seller_message)
 

module.exports = router 