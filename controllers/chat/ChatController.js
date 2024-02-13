const sellerModel = require('../../models/sellerModel')
const customerModel = require('../../models/customerModel')
const sellerCustomerModel = require('../../models/chat/sellerCustomerModel')
class ChatController{

    add_customer_friend = async (req, res) => {
         const { sellerId, userId} = req.body

         try {
            if (sellerId !== '') {
                const seller = await sellerModel.findById(sellerId)
                const user = await customerModel.findById(userId)
                const checkSeller = await sellerCustomerModel.findOne({
                    $and : [
                        {
                            myId: {
                                $eq: userId
                            }
                        },{
                            myFriends : {
                                $elemMatch : {
                                    fdId : sellerId
                                }
                            } 
                        }
                    ]
                })
               if (!checkSeller) {
                  await sellerCustomerModel.updateOne({
                      myId: userId
                  }, {
                    $push: {
                        myFriends: {
                            fdId : sellerId,
                            name: seller.shopInfo?.shopName,
                            image: seller.image
                        }
                    }
                  })
               }


               const checkCustomer = await sellerCustomerModel.findOne({
                $and : [
                    {
                        myId: {
                            $eq: sellerId
                        }
                    },{
                        myFriends : {
                            $elemMatch : {
                                fdId : userId
                            }
                        } 
                    }
                ]
            })
           if (!checkCustomer) {
              await sellerCustomerModel.updateOne({
                  myId: sellerId
              }, {
                $push: {
                    myFriends: {
                        fdId : userId,
                        name: user.name,
                        image: ""
                    }
                }
              })
           }



            }
            
         } catch (error) {
            console.log(error)
         }
    }
    // End Method 




}


module.exports = new ChatController()

