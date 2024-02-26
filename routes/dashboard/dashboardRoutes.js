const dashboardController = require('../../controllers/dasboard/dashboardController') 
const { authMiddleware } = require('../../middlewares/authMiddleware')
const router = require('express').Router()
  
router.get('/admin/get-dashboard-data',authMiddleware, dashboardController.get_admin_dashboard_data)  
    

module.exports = router