class dashboardController{


    get_admin_dashboard_data = async(req, res) => {
        const {id} = req 
        console.log(id)
    }
    //end Method 


}

module.exports = new dashboardController()