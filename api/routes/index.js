const express = require("express");
const authRoute = require("./auth");
const userRoute = require("./users");
const cartRoute = require("./carts");
const productRoute = require("./products");
const categoryRoute = require("./categories");

const router = express.Router();

router.use("/auth", authRoute);
router.use("/users", userRoute);
router.use("/carts", cartRoute);
router.use("/products", productRoute);
router.use("/categories", categoryRoute);

module.exports = router;
