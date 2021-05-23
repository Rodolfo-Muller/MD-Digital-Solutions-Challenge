const Order = require("../order/order.dao");
const OrderDetail = require("./orderDetail.dao");
const Product = require ("../product/product.dao")

//-------------------Order Create----------------------
exports.createOrderDetail = (req, res) => {
  const newOrderDetail = req.body
  OrderDetail.create(newOrderDetail, (err, orderDetail) => {
    if (!newOrderDetail) {
      return res.status(400).send("Missing Parameters");
    }
    if (err) {
      console.log(err);
    }
    res.status(200).send({ newOrderDetail});
  });
};

//-------------------------------------Bring orders------------------------

exports.getOrderDetails = async (req, res) => {
  await OrderDetail.find(function (err, orderDetail) {
    if(err){
    console.log(err);
    return
    }
  })  
  .populate("Product")
  .populate("Order")
  .then((orderDetail)=>{
    res.status(200).send({orderDetail})
  })
  .catch((err) => {
    console.log(err);
});
};
//---------------------------------Update Order----------------------------
exports.updateOrderDetails = (req, res) => {
  const { orderDetailId } = req.params;
  const newOrderDetail = req.body;
  OrderDetail.findOneAndUpdate({orderDetailId:orderDetailId},{newOrderDetail:newOrderDetail})
    .then((orderDetail) => {
      res.status(200).send({ msg: "Ok", orderDetail:orderDetail });
    })
    .catch((err) => {
      console.log(err);
    });
};

//---------------Delete Order-----------------
exports.deleteOrderDetail = (req, res) => {
  const { orderDetailId } = req.params;

  OrderDetail.deleteOne({ orderDetailId: orderDetailId }, function (err, deleted) {
    if (deleted.deletedCount === 0) {
      res.status(400).send("Error");
      return;
    } else {
      res.status(200).send("Order deleted corectly");
    }
  });
};
