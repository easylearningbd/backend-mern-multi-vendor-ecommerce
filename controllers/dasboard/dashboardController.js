const { responseReturn } = require("../../utiles/response") 
const myShopWallet = require('../../models/myShopWallet')
const productModel = require('../../models/productModel')
const customerOrder = require('../../models/customerOrder')
const sellerModel = require('../../models/sellerModel') 
const adminSellerMessage = require('../../models/chat/adminSellerMessage') 

class dashboardController{


    get_admin_dashboard_data = async(req, res) => {
        const {id} = req 
        try {
            const totalSale = await myShopWallet.aggregate([
                {
                    $group: {
                        _id:null,
                        totalAmount: {$sum: '$amount'}
                    }
                }
            ])
         const totalProduct = await productModel.find({}).countDocuments()
         const totalOrder = await customerOrder.find({}).countDocuments()
         const totalSeller = await sellerModel.find({}).countDocuments()
         const messages = await adminSellerMessage.find({}).limit(3)
         const recentOrders = await customerOrder.find({}).limit(5)
         responseReturn(res, 200, {
            totalProduct,
            totalOrder,
            totalSeller,
            messages,
            recentOrders,
            totalSale: totalSale.length > 0 ? totalSale[0].totalAmount : 0,

         })

        } catch (error) {
            console.log(error.message)
        }
         
    }
    //end Method 


}

module.exports = new dashboardController()