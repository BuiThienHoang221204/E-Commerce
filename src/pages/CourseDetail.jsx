import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CourseContext from '../context/CourseContext'
import Loading from '../components/Loading'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify'

const CourseDetail = () => {
  const { id } = useParams()
  const [courseData, setCourseData] = useState(null)
  const { courses, calculateRating } = useContext(CourseContext)
  const fetchCourseData = async () => {
    const course = courses.find(course => course._id === id)
    setCourseData(course)
  }
  useEffect(() => {
    fetchCourseData()
  }, [])
  return courseData ? (
    <div className='relative px-4 lg:px-10 border-b border-gray-500 py-4'>
      <div className='absolute top-0 left-0 w-full h-[600px] -z-1 bg-gradient-to-b from-cyan-100/70'></div>
      <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-32 px-8 md:pt-20 pt-10'>
        {/* left */}
        <div className='max-w-xl z-10'>
          <h1 className='text-gray-800 font-semibold text-2xl'>{courseData.courseTitle}</h1>
          <p className='pt-4 lg:text-base text-sm text-gray-500' dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(0, 200) }}></p>
          {/* Rating and Reviews */}
          <div className='flex items-center space-x-2 pt-3 pb-2 text-sm'>
            <p className='font-medium'>{calculateRating(courseData)}</p>
            <div className='flex'>
              {[...Array(5)].map((_, index) => (
                <img key={index} src={index < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank} alt="star" className='w-4 h-4' />
              ))}
            </div>
            <p className='text-blue-400'>({courseData.courseRatings.length} {courseData.courseRatings.length > 1 ? 'ratings' : 'rating'})</p>
            <p className='text-gray-500'>{courseData.enrolledStudents.length} {courseData.courseRatings.length > 1 ? 'students' : 'student'}</p>
          </div>
          <p className='text-sm text-gray-500'>Sản xuất bởi <span className='text-blue-600 underline'>Edemy</span></p>
          {/* Content end left  */}
          <div className='py-15 '>
            <h3 className='font-semibold text-2xl text-gray-800'>Mô tả khóa học</h3>
            <p className='text-gray-500 rich-text' dangerouslySetInnerHTML={{ __html: courseData.courseDescription }}></p>

          </div>
        </div>
        {/* Right */}
        <div className='max-w-md z-10 shadow-md rounded-t md:rounded-none overflow-hidden bg-white min-w-[300px] sm:min-w-[420px]'>
          <img src={courseData.courseThumbnail} alt="" />
          <div className='p-5'>
            <div className='flex items-center gap-2'>
              <img className='w-3.5' src={assets.time_left_clock_icon} alt="time_left_clock_icon" />
              <p className='text-red-500 text-base font-semibold'>Chỉ còn <span className='font-medium'>5 ngày</span></p>
            </div>
            <div className='flex gap-3 items-center pt-2'>
              <p className='text-gray-800 md:text-4xl text-2xl font-semibold'>
                {(courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2)}K
              </p>
              <p className='md:text-lg text-gray-500 line-through'>{courseData.coursePrice}K</p>
              <p className='md:text-lg text-gray-500'>{courseData.discount}% off</p>
            </div>

            <div className='flex items-center text-sm md:text-default gap-4 pt-2 md:pt-4 text-gray-500'>
              <div className='flex items-center gap-1'>
                <img src={assets.star} alt="star icon" />
                <p>{calculateRating(courseData)}</p>
              </div>

              <div className='h-4 w-px bg-gray-500/40'></div>

              <div className='flex items-center gap-1'>
                <img src={assets.time_clock_icon} alt="clock icon" />
                <p>{courseData.discount} phút</p>
              </div>

              <div className='h-4 w-px bg-gray-500/40'></div>

              <div className='flex items-center gap-1'>
                <img src={assets.lesson_icon} alt="clock icon" />
                <p>{Math.floor(courseData.discount / 3)} bài</p>
              </div>
            </div>
            <button onClick={() => toast.info('Chức năng này đang được phát triển!')}
              className='md:mt-6 mt-4 w-full py-3 rounded bg-blue-600 text-white font-medium hover:scale-101'>
              Bắt đầu ngay
            </button>
            <div className='pt-6'>
              <p className='md:text-xl text-lg font-medium text-gray-800'>Khóa học mang đến cho bạn những gì?</p>
              <ul className='ml-4 pt-2 text-sm md:text-default list-disc text-gray-500'>
                <li>Truy cập trọn đời cùng các bản cập nhật miễn phí.</li>
                <li>Hướng dẫn từng bước thông qua các dự án thực tiễn.</li>
                <li>Tài liệu và mã nguồn có thể tải về sử dụng.</li>
                <li>Bài kiểm tra giúp bạn củng cố kiến thức.</li>
                <li>Chứng chỉ hoàn thành khóa học sau khi học xong.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <div className='w-full h-[500px] md:h-[700px]'>
        <iframe src='https://my.spline.design/untitled-V4RBMjaZsRNYJuqbUMuxIMRW/' frameborder='0' width='100%' height='100%'></iframe>
      </div>
    </div>
  ) : <Loading />
}

export default CourseDetail