const formidable = require("formidable")
const { responseReturn } = require("../../utiles/response")

class categoryController{

    add_category = async (req, res) => {
        const form = formidable()
        form.parse(req, async(err,fields,files)=>{
            if (err) {
                responseReturn(res, 404,{ error : 'something went wrong'})
            } else {
                let {name} = fields
                let {image} = files
                name = name.trim()
                const slug = name.split(' ').join('-')
            }
             
        })
    }


    get_category = async (req, res) => {
        console.log('this is working')
    }

}
 

module.exports = new categoryController()