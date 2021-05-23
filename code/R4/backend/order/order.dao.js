const mongoose = require('mongoose');
const orderSchema = require('./order.models');
const clientSchema= require('../client/client.models')

orderSchema.statics = {
  create: function (data, cb) {
    const order = new this(data);
    order.save(cb);
  }
}

const orderModel = mongoose.model('Orders', orderSchema);
module.exports = orderModel;