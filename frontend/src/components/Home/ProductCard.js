import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";




function ProductCard({ product }) {
    console.log("Rating is: " + product.ratings)
    const options = {
        value: product.ratings,
        color: "rgba(20,20,20,0.1)",
        edit: false,
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        isHalf: true
    };

    return (
        <Link className="productCard" to={`/product/${product._id}`}>
            <img src={product.images[0].url} alt={product.name} />
            <p>{product.name}</p>
            <div>
                <ReactStars {...options} />
                <span className="productCardSpan">
                    ({product.numOfReviews} Reviews)
                </span>
            </div>
            <span>{`$${product.price}`}</span>
        </ Link >
    )
}

export default ProductCard
