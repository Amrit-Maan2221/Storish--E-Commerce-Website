//To do-carosl

import React, { useEffect, useState } from 'react';
import MetaData from "../layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import "./ProductDetails.css";
import { useAlert } from 'react-alert';
import {
    clearErrors,
    getProductDetails
} from "../../action/productAction";
import Loader from "../layout/Loader/Loader";
import { useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import ReviewCard from "./ReviewCard.js";




function ProductDetails(props) {
    const dispatch = useDispatch();
    const { id } = useParams();
    const alert = useAlert();

    const [quantity, setQuantity] = useState(1);

    const { product, loading, error } = useSelector(
        (state) => state.productDetails
    );

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        dispatch(getProductDetails(id));
    }, [dispatch, id, error, alert]);

    const options = {
        size: "large",
        value: product.ratings,
        readOnly: true,
        precision: 0.5,
    };

    const decreaseQuantity = () => {

    };

    const increaseQuantity = () => {

    };

    const addToCartHandler = () => {
    };

    const submitReviewToggle = () => {
        // open ? setOpen(false) : setOpen(true);
    };
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <MetaData title={`${product.name} -- STORISH`} />
                    <div className="ProductDetails">
                        <div>
                            {product.images &&
                                product.images.map((item, i) => (
                                    <img
                                        className="CarouselImage"
                                        key={i}
                                        src={item.url}
                                        alt={`${i} Slide`}
                                    />
                                ))}
                        </div>
                        <div>
                            <div className="detailsBlock-1">
                                <h2>{product.name}</h2>
                                <p>Product # {product._id}</p>
                            </div>
                            <div className="detailsBlock-2">
                                <ReactStars {...options} />
                                <span className="detailsBlock-2-span">
                                    {" "}
                                    ({product.numOfReviews} Reviews)
                                </span>
                            </div>
                            <div className="detailsBlock-3">
                                <h1>{`$${product.price}`}</h1>
                                <div className="detailsBlock-3-1">
                                    <div className="detailsBlock-3-1-1">
                                        <button onClick={decreaseQuantity}>-</button>
                                        <input readOnly type="number" value={quantity} />
                                        <button onClick={increaseQuantity}>+</button>
                                    </div>
                                    <button
                                        disabled={product.Stock < 1 ? true : false}
                                        onClick={addToCartHandler}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                                <p>
                                    Status:
                                    <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                                        {product.Stock < 1 ? "OutOfStock" : "InStock"}
                                    </b>
                                </p>
                            </div>
                            <div className="detailsBlock-4">
                                Description : <p>{product.description}</p>
                            </div>

                            <button onClick={submitReviewToggle} className="submitReview">
                                Submit Review
                            </button>
                        </div>
                    </div>
                    <h3 className="reviewsHeading">REVIEWS</h3>
                    {product.reviews && product.reviews[0] ? (
                        <div className="reviews">
                            {product.reviews &&
                                product.reviews.map((review) => (
                                    <ReviewCard key={review._id} review={review} />
                                ))}
                        </div>
                    ) : (
                        <p className="noReviews">No Reviews Yet</p>
                    )}
                </>)
            }
        </>
    )
}
export default ProductDetails

