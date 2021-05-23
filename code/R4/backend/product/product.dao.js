const mongoose = require('mongoose');
const productSchema = require('./product.models');

productSchema.statics = {
  create: function (data, cb) {
    const product = new this(data);
    product.save(cb);
  }
}

const productModel = mongoose.model('Products', productSchema);
module.exports = productModel;