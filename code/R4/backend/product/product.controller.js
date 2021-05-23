const Product = require("../product/product.dao");
const Client = require("../client/client.dao")

//-------------------Product Create----------------------
exports.createProduct = (req, res) => {
  const newProduct = req.body
  Product.create(newProduct, (err, product) => {
    if (!newProduct) {
      return res.status(400).send("Missing Parameters");
    }
    if (err) {
      console.log(err);
    }
    res.status(200).send({ newProduct});
  });
};

//-------------------------------------Bring Products------------------------
exports.getProducts = (req, res) => {
  Product.find(function (err, products) {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).send({ products});
})
};

//---------------------------------Update Product----------------------------
exports.updateProducts = (req, res) => {
  const { productId } = req.params;
  const {name, description, price }= req.body;

  Product.findOneAndUpdate({productId:productId},{name:name},{description: description},{price:price})
    .then((product) => {
      res.status(200).send({ msg: "Ok", product:product });
    })
    .catch((err) => {
      console.log(err);
    });
};

//---------------Delete Product-----------------
exports.deleteProduct = (req, res) => {
  const { productId } = req.params;

  Product.deleteOne({ productId: productId }, function (err, deleted) {
    if (deleted.deletedCount === 0) {
      res.status(400).send("Error");
      return;
    } else {
      res.status(200).send("Product deleted corectly");
    }
  });
};
