const router = require("express").Router();
const Cart = require("../models/Cart");

// CREATE CART
router.post("/", async (req, res) => {
  const user = req.body.user;
  const product = req.body.product;
  const quantity = req.body.quantity;

  try {
    const cart = await Cart.findOne({ user, product });

    if (cart) {
      await Cart.findOneAndUpdate(
        { user, product },
        { $inc: { quantity }, $set: { updated_at: Date.now() } }
      );
    } else {
      const newCart = new Cart({ user, product, quantity });
      await newCart.save();
    }

    const carts = await Cart.find({ user, quantity: { $ne: 0 } })
      .populate("product")
      .sort({ updated_at: -1 });

    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE CART
router.put("/", async (req, res) => {
  const user = req.body.user;
  const product = req.body.product;
  const quantity = req.body.quantity;

  try {
    await Cart.findOneAndUpdate(
      { user, product },
      { $set: { quantity, updated_at: Date.now() } }
    );

    const carts = await Cart.find({ user, quantity: { $ne: 0 } })
      .populate("product")
      .sort({ updated_at: -1 });

    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL CART
router.get("/:user", async (req, res) => {
  const user = req.params.user;

  try {
    const carts = await Cart.find({ user, quantity: { $ne: 0 } })
      .populate("product")
      .sort({ updated_at: -1 });

    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
