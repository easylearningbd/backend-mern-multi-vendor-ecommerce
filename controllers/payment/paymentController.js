const stripeModel = require('../../models/stripeModel')
const {v4: uuidv4} = require('uuid')
const { responseReturn } = require('../../utiles/response')
const stripe = require('stripe')('sk_test_51Oml5cGAwoXiNtjJZbPFBKav0pyrR8GSwzUaLHLhInsyeCa4HI8kKf2IcNeUXc8jc8XVzBJyqjKnDLX9MlRjohrL003UDGPZgQ')

class paymentController{

    create_stripe_connect_account = async(req,res) => {
        const {id} = req 
        const uid = uuidv4()

    try {
        const stripeInfo = await stripeModel.findOne({ sellerId: id  })

        if (stripeInfo) {
            await stripeModel.deleteOne({ sellerId: id })
            const account = await stripe.accounts.create({ type: 'express' }) 

            const accountLink = await stripe.accountLinks.create({
                account: account.id,
                refresh_url: 'http://localhost:3001/refresh',
                return_url:  `http://localhost:3001/success?activeCode=${uid}`,
                type: 'account_onboarding'
            })
            await stripeModel.create({
                sellerId: id,
                stripeId: account.id,
                code: uid
            })
            responseReturn(res,201,{url:accountLink.url })

        }else{
            const account = await stripe.accounts.create({ type: 'express' }) 

            const accountLink = await stripe.accountLinks.create({
                account: account.id,
                refresh_url: 'http://localhost:3001/refresh',
                return_url:  `http://localhost:3001/success?activeCode=${uid}`,
                type: 'account_onboarding'
            })
            await stripeModel.create({
                sellerId: id,
                stripeId: account.id,
                code: uid
            })
            responseReturn(res,201,{url:accountLink.url })

        }
        
    } catch (error) {
        console.log('strpe connect account errror' + error.message)
     }
    }
    // End Method 



}


module.exports = new paymentController()