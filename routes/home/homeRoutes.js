const homeControllers = require('../../controllers/home/homeControllers') 
const router = require('express').Router()

router.get('/get-categorys',homeControllers.get_categorys)
 

module.exports = router 