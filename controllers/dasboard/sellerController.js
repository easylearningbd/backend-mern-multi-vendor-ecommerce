const formidable = require("formidable")
const { responseReturn } = require("../../utiles/response")
const cloudinary = require('cloudinary').v2
const sellerModel = require('../../models/sellerModel')

class sellerController{ 

    request_seller_get = async (req, res) => {
        const {page,searchValue, parPage} = req.query 
        const skipPage = parseInt(parPage) * (parseInt(page) - 1)

        try {
            if (searchValue) {
                
            } else {
                const sellers = await sellerModel.find({ status:  'pending'}).skip(skipPage).limit(parPage).sort({ createdAt: -1})
                const totalSeller = await sellerModel.find({ status: 'pending' }).countDocuments()
                responseReturn(res, 200,{ sellers,totalSeller })
            }
        } catch (error) {
            responseReturn(res, 500,{ error: error.message }) 
        }
 
    }

    
    // end method 




}
 

module.exports = new sellerController()