import React, { use, useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import CourseContext from '../context/CourseContext';

const CourseCard = ({ course }) => {
    const { calculateRating, addToCart, removeFromCart, cartItems } = useContext(CourseContext);
    const isLiked = cartItems[course._id]
    const finalPrice = (course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2);

    return (
        <div className='relative border border-gray-300 hover:shadow-md transition-all rounded-lg overflow-hidden group'>
            <Link to={`/course/${course._id}`} onClick={() => scrollTo(0, 0)} className="block">
                <img className="w-full h-48 object-cover" src={course.courseThumbnail} alt={course.name} />
                <div className='p-4 text-left'>
                    <h3 className='text-lg font-semibold text-gray-800'>{course.courseTitle}</h3>
                    <p className='text-sm text-gray-500'>{course.educator.name}</p>

                    <div className='flex items-center space-x-2 mt-2 text-sm'>
                        <p className='font-medium'>{calculateRating(course)}</p>
                        <div className='flex'>
                            {[...Array(5)].map((_, index) => (
                                <img key={index} src={index < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} alt="star" className='w-4 h-4' />
                            ))}
                        </div>
                        <p className='text-gray-500'>({course.courseRatings.length})</p>
                    </div>

                    <p className='mt-2 text-base font-semibold text-indigo-600'>{finalPrice}K</p>
                </div>
            </Link>

            {/* Icon yêu thích */}
            <button
                onClick={() => {
                    isLiked ? removeFromCart(course._id) : addToCart(course._id);
                }}
                className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-md hover:scale-110 transition"
            >
                {isLiked ? (
                    <FaHeart className="text-indigo-500 w-5 h-5" />
                ) : (
                    <FaRegHeart className="text-indigo-500 w-5 h-5" />
                )}
            </button>
        </div>
    );
};

export default CourseCard;
