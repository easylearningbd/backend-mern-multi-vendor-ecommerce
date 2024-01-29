class customerAuthController{

    customer_register = async(req,res) => {
        console.log(req.body)
    }

}

module.exports = new customerAuthController()