const express = require("express");
const router = express.Router();

// Rota dosyalarını içe aktarıyoruz
const categoryRoute = require("./categories.js");
const productRoute = require("./products.js");
const accountRoute = require("./account.js");
const couponRoute = require("./coupons.js");
const userRoute = require("./users.js");

// Her rotayı ilgili yol altında kullanıyoruz
router.use("/categories", categoryRoute);
router.use("/products", productRoute);
router.use("/account", accountRoute);
router.use("/coupons", couponRoute);
router.use("/users", userRoute);

module.exports = router;
