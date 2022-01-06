import ReactStars from "react-rating-stars-component";
import React from "react";
import profilePng from "../../images/Profile.png";

const ReviewCard = ({ review }) => {
    const options = {
        value: review.rating,
        color: "rgba(20,20,20,0.1)",
        edit: false,
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        isHalf: true
    };

    return (
        <div className="reviewCard">
            <img src={profilePng} alt="User" />
            <p>{review.name}</p>
            <ReactStars {...options} />
            <span className="reviewCardComment">{review.comment}</span>
        </div>
    );
};

export default ReviewCard;