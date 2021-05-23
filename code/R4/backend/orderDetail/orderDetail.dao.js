const mongoose = require('mongoose');
const orderDetailSchema = require('./orderDetail.models');

orderDetailSchema.statics = {
  create: function (data, cb) {
    const orderDetail = new this(data);
    orderDetail.save(cb);
  }
}

const orderDetailModel = mongoose.model('OrderDetails', orderDetailSchema);
module.exports = orderDetailModel;