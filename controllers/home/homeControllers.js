const categoryModel = require('../../models/categoryModel')
const { responseReturn } = require("../../utiles/response")

class homeControllers{
    get_categorys = async(req,res) => {
        try {
            const categorys = await categoryModel.find({})
            responseReturn(res,200, {
                categorys
            })
            
        } catch (error) {
            console.log(error.message)
        }
    }
}

module.exports = new homeControllers()