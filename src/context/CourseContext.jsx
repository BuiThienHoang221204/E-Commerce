import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
    const [courses, setCourses] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPriceRange, setSelectedPriceRange] = useState('All');
    const [cartItems, setCartItems] = useState(() => {
        const stored = localStorage.getItem('cartItems');
        return stored ? JSON.parse(stored) : {};
    });
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    // Lưu giỏ hàng vào localStorage mỗi khi cartItems thay đổi
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    //load tất cả khóa học
    const fetchCourses = async () => {
        axios.get('https://json-server-api-g0s0.onrender.com/courses')
            .then(res => setCourses(res.data))
            .catch(err => console.error('Lỗi khi lấy dữ liệu khóa học:', err))
            .finally(() => setLoading(false));
    };

    //thêm vào ưu thích
    const addToCart = (itemId) => {
        //clone dữ liệu 
        let cartData = structuredClone(cartItems)
        if (cartData[itemId]) {
            cartData[itemId] += 1
        } else {
            cartData[itemId] = 1
        }
        setCartItems(cartData)
        toast.success('Đã thêm vào ưu thích')
    };

    //xóa khỏi ưu thích
    const removeFromCart = (itemId) => {
        let cartData = structuredClone(cartItems)
        if (cartData[itemId]) {
            cartData[itemId] -= 1
            if (cartData[itemId] === 0) {
                delete cartData[itemId]
            }
        }
        setCartItems(cartData)
        toast.success('Đã xóa gỡ khỏi ưu thích')
    };

    const calculateRating = (course) => {
        if (course.courseRatings.length === 0) return 0;
        let totalRating = 0;
        course.courseRatings.forEach(rating => {
            totalRating += rating.rating;
        });
        return (totalRating / course.courseRatings.length).toFixed(1);
    }

    useEffect(() => {
        fetchCourses();
    }, [])
    return (
        <CourseContext.Provider value={{loading, setLoading, removeFromCart, cartItems, setCartItems, addToCart, selectedPriceRange, setSelectedPriceRange, searchQuery, setSearchQuery, navigate, calculateRating, courses, setCourses }}>
            {children}
        </CourseContext.Provider>
    )
}
export default CourseContext;