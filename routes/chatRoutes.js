const ChatController = require('../controllers/chat/ChatController')
const { authMiddleware } = require('../middlewares/authMiddleware')
const router = require('express').Router()

router.post('/chat/customer/add-customer-friend',ChatController.add_customer_friend)
router.post('/chat/customer/send-message-to-seller',ChatController.customer_message_add)
 

module.exports = router 