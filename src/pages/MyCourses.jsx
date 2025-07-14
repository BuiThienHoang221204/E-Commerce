import React, { useContext, useEffect, useState } from 'react'
import CourseContext from '../context/CourseContext'
import { assets } from '../assets/assets'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import empty_cart from '../assets/icon/empty_cart.png'

const MyCourses = () => {
  const { cartItems, courses, calculateRating, removeFromCart, addToCart } = useContext(CourseContext)
  const [cartArray, setCartArray] = useState([])
  let isLiked = false;

  const getCart = () => {
    let temp = []
    for (const key in cartItems) {
      const course = courses.find(course => course._id === key);
      if (course) {
        temp.push(course)
        isLiked = true;
      }
    }
    setCartArray(temp);
  }

  useEffect(() => {
    if (courses.length > 0 && cartItems) {
      getCart();
    }
  }, [courses, cartItems])


  return (
    <div className='container mx-auto mt-16 pb-16 px-6'>
      <div className='flex flex-col w-max items-end'>
        <p className='text-2xl md:text-3xl font-medium text-left'>Khóa học ưu thích</p>
        <div className='w-30 h-1 bg-indigo-500 rounded-full'></div>
      </div>

      {cartArray.length > 0 ? (
        <div className='flex flex-wrap lg:gap-10 items-center justify-start mt-8'>
          {cartArray.map((course, index) => {
            return (
              <div key={index} className='lg:min-w-xl max-w-xl bg-white p-4 rounded-lg shadow-md flex lg:flex-row lg:gap-0 gap-5 lg:my-0 my-4 flex-col items-center justify-between'>
                <div className="cursor-pointer w-26 h-26 flex items-center justify-center border border-gray-300 rounded">
                  <img className="max-w-full h-full object-cover" src={course.courseThumbnail} alt={course.courseTitle} />
                </div>
                <div className='w-[350px]'>
                  <h3 className='text-xl font-semibold'>{course.courseTitle}</h3>
                  <div className='flex items-center my-1 space-x-1'>
                    {[...Array(5)].map((_, index) => (
                      <img key={index} src={index < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} alt="star" className='w-4 h-4' />
                    ))}
                    <span className='text-gray-500'>({course.courseRatings.length})</span>
                  </div>
                  <p className='text-indigo-600 font-semibold'>
                    {((course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2))}K
                  </p>
                </div>
                <button
                  onClick={() => {
                    isLiked ? addToCart(course._id) : removeFromCart(course._id);
                  }}
                  className="bg-white rounded-full p-1 shadow-md hover:scale-110 transition"
                >
                  {isLiked ? (
                    <FaRegHeart className="text-indigo-500 w-5 h-5" />
                  ) : (
                    <FaHeart className="text-indigo-500 w-5 h-5" />
                  )}
                </button>
              </div>
            )
          })}
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center mt-10 text-gray-500 rich-text'>
          <img src={empty_cart} alt="Empty Cart" className='w-48 h-48' />
          <p className='mt-4'>Bạn chưa có khóa học nào trong danh sách yêu thích.</p>
        </div>
      )}
    </div>

  )
}

export default MyCourses