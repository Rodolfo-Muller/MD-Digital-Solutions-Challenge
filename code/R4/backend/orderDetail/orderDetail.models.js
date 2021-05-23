const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.set("useCreateIndex", true);

var autoIncrement = require("mongoose-auto-increment"); //no modificar
autoIncrement.initialize(mongoose.connection); //no modificar

const orderDetailSchema = new Schema(
  {
    orderDetailId: {
      type: Number,
      default: 0,
      unique: true,
    },
    orderI: {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    delete: {
      type: Boolean,
      default: false,
      require: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    //Time marks
    timestamps: true,
  }
);

//configuración Auto-Incremental ID
orderDetailSchema.plugin(autoIncrement.plugin, {
  model: "OrderDetail",
  field: "orderDetailId",
  startAt: 1,
  incrementBy: 1,
});

module.exports = orderDetailSchema;
