const ChatController = require('../controllers/chat/ChatController')
const { authMiddleware } = require('../middlewares/authMiddleware')
const router = require('express').Router()

router.post('/chat/customer/add-customer-friend',ChatController.add_customer_friend)
 

module.exports = router 