const adminModel = require('../models/adminModel')
const { responseReture } = require('../utiles/response')

class authControllers{
    admin_login = async(req,res) => {
        const {email,password} = req.body
        try {
            const admin = await adminModel.findOne({email}).select('+password')
            // console.log(admin)
            if (admin) {
                 
            } else {
                responseReture(res,404,{error: "Email not Found"})
            }
            
        } catch (error) {
            responseReture(res,500,{error: error.message})
        }



    }
}

module.exports = new authControllers()