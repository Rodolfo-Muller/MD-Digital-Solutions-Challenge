const Order = require("./order.dao");
const Client= require("../client/client.dao")

//-------------------Order Create----------------------
exports.createOrder = (req, res) => {
  const newOrder = req.body
  Order.create(newOrder, (err, order) => {
    if (!newOrder) {
      return res.status(400).send("Missing Parameters");
    }
    if (err) {
      console.log(err);
    }
    res.status(200).send({ newOrder});
  });
};

//-------------------------------------Bring orders------------------------

exports.getOrders = async (req, res) => {
  await Order.find(function (err, orders) {
    if(err){
    console.log(err);
    return
    }
  })  
  .populate("Client")
  
  .then((orders)=>{
    res.status(200).send({orders})
  })
  .catch((err) => {
    console.log(err);
});
};
//---------------------------------Update Order----------------------------
exports.updateOrders = (req, res) => {
  const { orderId } = req.params;
  const newOrder = req.body;

  Order.findOneAndUpdate({orderId:orderId},{newOrder:newOrder})
    .then((order) => {
      res.status(200).send({ msg: "Ok", order:order });
    })
    .catch((err) => {
      console.log(err);
    });
};

//---------------Delete Order-----------------
exports.deleteOrder = (req, res) => {
  const { orderId } = req.params;

  Order.deleteOne({ orderId: orderId }, function (err, deleted) {
    if (deleted.deletedCount === 0) {
      res.status(400).send("Error");
      return;
    } else {
      res.status(200).send("Order deleted corectly");
    }
  });
};
