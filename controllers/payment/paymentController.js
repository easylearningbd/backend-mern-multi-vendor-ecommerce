const stripeModel = require('../../models/stripeModel')
const {v4: uuidv4} = require('uuid')
const stripe = require('stripe')('sk_test_51Oml5cGAwoXiNtjJZbPFBKav0pyrR8GSwzUaLHLhInsyeCa4HI8kKf2IcNeUXc8jc8XVzBJyqjKnDLX9MlRjohrL003UDGPZgQ')

class paymentController{

    create_stripe_connect_account = async(req,res) => {
        console.log('test data')
        console.log(req.id)
    }
    // End Method 



}


module.exports = new paymentController()