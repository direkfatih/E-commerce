const express = require("express");
const router = express.Router();

// Rota dosyalarını içe aktarıyoruz
const categoryRoute = require("./categories.js");
const productRoute = require("./products.js");
const accountRoute = require("./account.js");
const couponRoute = require("./coupons.js");

// Her rotayı ilgili yol altında kullanıyoruz
router.use("/categories", categoryRoute);
router.use("/products", productRoute);
router.use("/account", accountRoute);
router.use("/coupons", couponRoute);

module.exports = router;
