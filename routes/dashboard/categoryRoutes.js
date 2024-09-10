const categoryController = require('../../controllers/dasboard/categoryController') 
const { authMiddleware } = require('../../middlewares/authMiddleware')
const router = require('express').Router()

router.post('/category-add',authMiddleware, categoryController.add_category) 
router.get('/category-get',authMiddleware, categoryController.get_category) 
router.put('/category-update/:id',authMiddleware, categoryController.update_category) 
router.delete('/category/:id', categoryController.deleteCategory) 

module.exports = router