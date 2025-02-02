import React, { useState } from 'react';
import { BiSolidCategory } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";
import Review from './Review';

const SingleProduct = ({
    images, brand, category, description, dimensions, price, discountPercentage, rating,
    reviews = [] }) => {
    const { width, height, depth } = dimensions || {};

    const { comment, date, reviewerEmail, reviewerName } = reviews[0] || {}; // Assuming you have an array of reviews and accessing the first one
    const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(2);
    const [Read, setReadMore] = useState(false);
    const [showReview,setShowReview] =useState(false);
    const handleRating = () => {
        let stars = "";
        for (let i = 0; i < Math.round(rating); i++) {
            stars += "⭐";
        }
        return stars;
    };

    return (
        <div className="shadow-lg p-4 rounded-md ">
            <img
                src={images?.[0] || "https://via.placeholder.com/300"}
                className="object-cover d-block mx-auto h-[300px]"
                alt={brand || "Product"}
            />


<div className='shadow rounded-md p-4'>
            <div className='flex justify-between items-center'>
                <h4 className="capitalize font-bold">{brand || "Unknown Brand"}</h4>
                <MdArrowDropDown 
                    onClick={() =>setShowReview(!showReview)} // Toggle the review state on click
                    className={`cursor-pointer ${showReview ? 'rotate-180':'rotate-0'} transition-all`} 
                    size={20} 
                />
            </div>

            {/* Conditionally render review section */}
           

            <h4 className="capitalize text-gray-500 flex items-center gap-1 mt-4">
                <BiSolidCategory /> {category || "Unknown Category"}
            </h4>

            <h4 className="capitalize text-sm text-gray-700">
                {Read ? description?.slice(0, description?.length) : description?.slice(0, 25)}
                <button
                    onClick={() => setReadMore(!Read)}
                    className={`${Read ? "text-red-600" : "text-green-600"} cursor-pointer`}>
                    {Read ? "Read Less" : "Read More"}
                </button>
            </h4>

            <p className="text-sm text-gray-500 mt-2">
                Dimensions: {width} x {height} x {depth}
            </p>

            <div className='flex gap-2 items-center'>
                <p className="text-sm text-gray-500 mt-2">
                    Price: ${price}
                </p>
                <p className="text-sm text-gray-500 mt-2 border-1 px-4 rounded-full line-through">
                    ${discountedPrice}
                </p>







            </div>
    

            <div className={`overflow-hidden transition-all duration-300 ${showReview ? 'max-h-[300px]' : 'max-h-0'}`}>
    {reviews.map((item, index) => (
        <Review key={index} {...item} />
    ))}
</div>


            </div>
        </div>
    );
};

export default SingleProduct;
