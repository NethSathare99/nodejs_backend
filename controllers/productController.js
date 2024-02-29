const ProductSchema = require('../models/product');
const productSchema = require('../models/product');

module.exports = {
  createProduct: async (req, res) => {
    const { product_name, price, quantity } = req.body;

    

    connection.query(insertProductQuery, [product_name, price, quantity], (err, results, fields) => {
      if (err) {
        console.error(err);
        res.status(500).json({ status: false, message: 'Error creating product' });
        return;
      }

      res.status(201).json({ status: true, message: 'Product created successfully' });
    });

    try {
      await newProduct.save();
      res.status(201).json({ status: true, message: "Item created successfully" });
    } catch (error) {
      res.status(500).json({ status: true, message: error.message });
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find({ product_name: { $ne: "More" } }, { __v: 0 });
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  },

  getRandomProducts: async (req, res) => {
    try {
      let products = await Product.aggregate([
        { $match: { value: { $ne: "more" } } },
        { $sample: { size: 4 } }
      ]);

      const moreProduct = await Product.findOne({ value: "more" }, { __v: 0 });

      if (moreProduct) {
        products.push(moreProduct);
      }

      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  }
};
