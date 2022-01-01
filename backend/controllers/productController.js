const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorHandler");
const catchASyncErrors = require("../middleware/catchASyncErrors");

// Create Product -- Admin
exports.createProduct = catchASyncErrors(async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    });
});

// Get Product detail
exports.getProductDetails = catchASyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHander("Product not Found", 404));
    };


    res.status(200).json({
        success: true,
        product,
    });
});

// Get All Product
exports.getAllProducts = catchASyncErrors(async (req, res) => {
    const products = await Product.find();
    res.status(200).json({ success: true, products });
});


//Update Product -- Admin
exports.updateProduct = catchASyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHander("Product not Found", 404));
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
        product
    });

});

//Delete Product -- Admin
exports.deleteProduct = catchASyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHander("Product not Found", 404));
    }
    await product.remove();

    res.status(200).json({
        success: true,
        message: "Product deleted successfully"
    });

});