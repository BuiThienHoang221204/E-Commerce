import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import CourseContext from '../context/CourseContext'
import { assets } from '../assets/assets'
const Header = () => {
    const [open, setOpen] = useState(false)
    const { navigate, searchQuery, setSearchQuery } = useContext(CourseContext)
    const [navStyle, setNavStyle] = useState({});

    useEffect(() => {
        if (location.pathname === '/my-courses' || location.pathname === '/course-list') {
            setNavStyle({});
        } else {
            setNavStyle({ backgroundImage: "linear-gradient(180deg, #E6FFFF 40%, #E6FFFF 80%)" });
        }
    }, [location.pathname]);



    //khi click vào input search sẽ chuyến sang all product
    const handleSearch = (value) => {
        setSearchQuery(value)
        //nếu chưa ở trang course-list thì chuyển 
        if (location.pathname !== '/course-list') {
            navigate('/course-list');
        }
    }

    return (
        <nav
            style={navStyle}
            className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <div className='flex items-center justify-between'>
                <Link to='/'>
                    <img src={assets.logo} />
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8 font-semibold">
                <div className='flex flex-col w-max items-start group'>
                    <NavLink to="/">Trang Chủ</NavLink>
                    <div className='w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-indigo-500 rounded-full'></div>
                </div>
                <div className='flex flex-col w-max items-start group'>
                    <NavLink to="/course-list">Khóa Học</NavLink>
                    <div className='w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-indigo-500 rounded-full'></div>
                </div>
                <div className='flex flex-col w-max items-start group'>
                    <NavLink to="/my-courses">Ưu Thích</NavLink>
                    <div className='w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-indigo-500 rounded-full'></div>
                </div>
            </div>

            <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Tìm kiếm..." value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)} />
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" />
                    <path d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" />
                </svg>
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute bg-gradient-to-b from-cyan-100/70 top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <NavLink to="/">Trang Chủ</NavLink>
                <NavLink to="/course-list">Khóa Học</NavLink>
                <NavLink to="/my-courses">Ưu Thích</NavLink>
            </div>

        </nav>
    )
}

export default Header