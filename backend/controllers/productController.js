const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorHandler");
const catchASyncErrors = require("../middleware/catchASyncErrors");
const ApiFeatures = require("../utils/apifeatures");

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
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
    const resultPerPage = 8;
    const productsCount = await Product.countDocuments();

    const apiFeature = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter();

    let products = await apiFeature.query;

    let filteredProductsCount = products.length;

    apiFeature.pagination(resultPerPage);

    products = await apiFeature.query;

    res.status(200).json({
        success: true,
        products,
        productsCount,
        resultPerPage,
        filteredProductsCount,
    });
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