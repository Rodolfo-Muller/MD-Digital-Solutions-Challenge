const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.set("useCreateIndex", true);

var autoIncrement = require("mongoose-auto-increment"); //no modificar
autoIncrement.initialize(mongoose.connection); //no modificar

const orderSchema = new Schema(
  {
    orderId: {
      type: Number,
      default: 0,
      unique: true,
    },
    client:{
      type: Schema.Types.ObjectId,
      ref: "Client",
      require:true
    },
    date:{
      type:String,
      require:true
    },
    deleteId: {
      type: Boolean,
      default: false,
      require: true,
    },
  },
  {
    //Time marks
    timestamps: true,
  }
);

//configuración Auto-Incremental ID
orderSchema.plugin(autoIncrement.plugin, {
  model: "Order",
  field: "orderId",
  startAt: 1,
  incrementBy: 1,
});

module.exports = orderSchema;
