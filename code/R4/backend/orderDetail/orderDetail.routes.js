const OrderDetail = require("./orderDetail.controller");
module.exports = (router) => {
  //-----------OrderDetail Create------------------
  router.post("/orderDetail/create", OrderDetail.createOrderDetail);
  //------------ Bring Order-----------------
  router.get("/orderDetail/all", OrderDetail.getOrderDetails);
  //------------ Update Order-----------------
  router.put("/orderDetail/:orderDetailId", OrderDetail.updateOrderDetails);
  //------------ Delete Order-----------------
  router.delete("/orderDetail/:orderDetailId", OrderDetail.deleteOrderDetail);
};
