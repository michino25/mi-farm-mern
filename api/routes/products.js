const router = require("express").Router();
const User = require("../models/User");
const Product = require("../models/Product");
const Category = require("../models/Category");

//CREATE PRODUCT
router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE ALL PRODUCTS - DEV
router.post("/dev", async (req, res) => {
  try {
    // Parse the JSON string into an array of product objects
    const productsData = req.body;

    // Use a loop or map to create and save each product
    const savedProducts = [];
    for (const productData of productsData) {
      const newProduct = new Product(productData);
      const savedProduct = await newProduct.save();
      savedProducts.push(savedProduct);
    }

    res.status(200).json(savedProducts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE PRODUCT
router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product.author.toString() === req.body.author) {
      try {
        const updatedProduct = await Product.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedProduct);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your product!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE PRODUCT
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product.author === req.body.username) {
      try {
        await product.delete();
        res.status(200).json("Product has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your product!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//SEARCH & GET ALL PRODUCT
router.get("/", async (req, res) => {
  const catName = req.query.category;
  const productName = req.query.search;
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const perPage = 20; // Number of products per page

  try {
    let products = [];
    if (catName) {
      const category = await Category.findOne({ code: catName });
      products = await Product.find({ category: category._id }).populate(
        "category"
      );
    }

    if (productName) {
      products = await Product.find({
        name: { $regex: productName, $options: "i" },
      }).populate("category");
    }

    if (!(catName || productName)) {
      const skip = (page - 1) * perPage;

      products = await Product.find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(perPage)
        .populate("category");
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
