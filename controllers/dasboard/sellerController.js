const formidable = require("formidable")
const { responseReturn } = require("../../utiles/response")
const cloudinary = require('cloudinary').v2
const categoryModel = require('../../models/categoryModel')

class sellerController{ 

    request_seller_get = async (req, res) => {
        console.log(req.query)
    }

    
    // end method 




}
 

module.exports = new sellerController()