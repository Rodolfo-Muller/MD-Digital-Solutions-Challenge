const Product = require("./product.controller");
module.exports = (router) => {
  //-----------Product Create------------------
  router.post("/product/create", Product.createProduct);
  //------------ Bring Product-----------------
  router.get("/product/all", Product.getProducts);
  //------------ Update Product-----------------
  router.put("/product/:productId", Product.updateProducts);
  //------------ Delete Product-----------------
  router.delete("/product/:productId", Product.deleteProduct);
};
