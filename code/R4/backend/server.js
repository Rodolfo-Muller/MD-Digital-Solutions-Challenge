"use strict";
//Import Routes
const authRoutes = require("./auth/auth.routes");
const clientRoutes = require("./client/client.routes");
const orderRoutes = require("./order/order.routes");
const orderDetailRoutes = require("./orderDetail/orderDetail.routes");
const productRoutes = require("./product/product.routes");

//Import Dependencies
const cors = require("cors");
const express = require("express");
const propierties = require("./config/properties");
const DB = require("./config/db");
// init DB
DB();

const app = express();
const router = express.Router();

const bodyParser = require("body-parser");
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(cors());

app.use("/api", router);

//Routes
authRoutes(router);
clientRoutes(router);
orderRoutes(router);
orderDetailRoutes(router);
productRoutes(router);

router.get("/", (req, res) => {
  res.send("Hello from home");
});
app.use(router);
app.listen(propierties.PORT, () =>
  console.log(`Server runing on port ${propierties.PORT}`)
);
