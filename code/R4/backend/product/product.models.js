const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.set("useCreateIndex", true);

var autoIncrement = require("mongoose-auto-increment"); //no modificar
autoIncrement.initialize(mongoose.connection); //no modificar

const productSchema = new Schema({
  productId: {
    type: Number,
    default: 0,
    unique: true,
  },
  name:{
    type:String,
    require: true
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  quantity:{
type:Number,
require:true,
trim:true
  },
  price:{
    type:Number,
    required: true,
    trim: true,
  }
},
{
  //Time marks
  timestamps: true,
});

//configuración Auto-Incremental ID
productSchema.plugin(autoIncrement.plugin, {
  model: "Product",
  field: "productId",
  startAt: 1,
  incrementBy: 1,
});

module.exports = productSchema;
