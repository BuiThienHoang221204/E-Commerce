import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CourseCard from './CourseCard'
import CourseContext from '../context/CourseContext';

const CoursesSection = () => {
    const { courses } = useContext(CourseContext);
    console.log(courses);
    return (
        <div className='py-16 md:px-4 px-8 text-center'>
            <h2 className='text-2xl lg:text-4xl font-bold text-gray-800'>Học hỏi từ những chuyên gia hàng đầu</h2>
            <p className='text-sm lg:text-base text-gray-500 mt-3 lg:w-[60%] mx-auto'>
                Khám phá các khóa học được đánh giá cao nhất của chúng tôi ở nhiều lĩnh vực khác nhau.
                Từ lập trình và thiết kế đến kinh doanh và sức khỏe, các khóa học đều được thiết kế để mang lại hiệu quả thực tiễn.
            </p>

            <div className='max-w-7xl mx-auto grid lg:grid-cols-4 grid-cols-1 px-4 lg:px-0 md:my-14 my-10 gap-4'>
                {courses.slice(0, 4).map((course, index) => {
                    return <CourseCard key={index} course={course} />
                })}
            </div>
            <Link to='/course-list'
                onClick={() => { scrollTo(0, 0) }}
            >
                <button className='text-gray-50 bg-[#2563EB] border hover:scale-105 px-6 py-3 rounded'>
                    Xem tất cả
                </button>
            </Link>
        </div>
    )
}

export default CoursesSection