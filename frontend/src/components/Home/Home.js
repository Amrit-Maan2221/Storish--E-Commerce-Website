//Todo--Scroll Icon

import React from 'react';
import "./Home.css";
import ProductCard from "./ProductCard.js";

const products = [{
    name: "Blue T-shirt",
    images: [
        {
            url: "https://i.ibb.co/DRST11n/1.webp"
        }
    ],
    price: "300",
    _id: "Amrit",
    ratings: 2,
    numOfReviews: 256
}, {
    name: "Blue T-shirt",
    images: [
        {
            url: "https://i.ibb.co/DRST11n/1.webp"
        }
    ],
    price: "300",
    _id: "Amrit",
    ratings: 2,
    numOfReviews: 256
}, {
    name: "Blue T-shirt",
    images: [
        {
            url: "https://i.ibb.co/DRST11n/1.webp"
        }
    ],
    price: "300",
    _id: "Amrit",
    ratings: 2,
    numOfReviews: 256
}, {
    name: "Blue T-shirt",
    images: [
        {
            url: "https://i.ibb.co/DRST11n/1.webp"
        }
    ],
    price: "300",
    _id: "Amrit",
    ratings: 2,
    numOfReviews: 256
}, {
    name: "Blue T-shirt",
    images: [
        {
            url: "https://i.ibb.co/DRST11n/1.webp"
        }
    ],
    price: "300",
    _id: "Amrit",
    ratings: 2,
    numOfReviews: 256
}, {
    name: "Blue T-shirt",
    images: [
        {
            url: "https://i.ibb.co/DRST11n/1.webp"
        }
    ],
    price: "300",
    _id: "Amrit",
    ratings: 2,
    numOfReviews: 256
}, {
    name: "Blue T-shirt",
    images: [
        {
            url: "https://i.ibb.co/DRST11n/1.webp"
        }
    ],
    price: "300",
    _id: "Amrit",
    ratings: 2,
    numOfReviews: 256
}, {
    name: "Blue T-shirt",
    images: [
        {
            url: "https://i.ibb.co/DRST11n/1.webp"
        }
    ],
    price: "300",
    _id: "Amrit",
    ratings: 2,
    numOfReviews: 256
}];


function Home() {
    console.log(products);
    return (
        <>
            <div className="banner">
                <p>Welcome to Ecommerce</p>
                <h1>FIND AMAZING PRODUCTS BELOW</h1>

                <a href="#container">
                    <button>
                        Scroll
                    </button>
                </a>
            </div>
            <h2 className="homeHeading">Featured Products</h2>

            <div className="container" id="container">
                {products &&
                    products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
            </div>
        </>
    )
}

export default Home
