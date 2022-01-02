//update - config
const ErrorHander = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const dotenv = require("dotenv");
// config
dotenv.config({ path: "../config/config.env" });

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(new ErrorHander("Please Login to access this resource", 401));
    }

    const decodedData = jwt.verify(token, "jsanjnjabdjs");

    req.user = await User.findById(decodedData.id);
    console.log(req.user);
    next();
});

exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(
                new ErrorHander(
                    `Role: ${req.user.role} is not allowed to access this resouce `,
                    403
                )
            );
        }

        next();
    };
};