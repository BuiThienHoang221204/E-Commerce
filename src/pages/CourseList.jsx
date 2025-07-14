import React, { useContext, useEffect, useState } from 'react'
import CourseContext from '../context/CourseContext';
import CourseCard from '../components/CourseCard';
import SideBar from '../components/SideBar';
import Loading from '../components/Loading';

const CourseList = () => {
  const { courses, navigate, searchQuery, selectedPriceRange } = useContext(CourseContext);
  const coursePerPages = 8;
  const [currentCourse, setCurrentCourse] = useState(1);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);

  const indexOfLastCourse = currentCourse * coursePerPages;
  const indexOfFirstCourse = indexOfLastCourse - coursePerPages;
  const currentCourses = filter.slice(indexOfFirstCourse, indexOfLastCourse);

  useEffect(() => {
    setLoading(true);
    let filtered = courses;

    if (searchQuery.length > 0) {
      filtered = filtered.filter(course =>
        course.courseTitle.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedPriceRange !== 'All') {
      filtered = filtered.filter(course => {
        const price = course.coursePrice - (course.discount * course.coursePrice / 100);
        switch (selectedPriceRange) {
          case '5k': return price >= 5 && price <= 10;
          case '10k': return price > 10 && price <= 50;
          case '50k': return price > 50 && price <= 100;
          case '100k': return price > 100;
          default: return true;
        }
      });
    }
    setFilter(filtered);
    setLoading(false);
  }, [courses, searchQuery, selectedPriceRange]);

  return (
    <div className='flex container mx-auto px-6 relative'>
      {loading && <Loading />}
      <SideBar />
      <div className='md:ml-12 mt-16 flex flex-col'>
        <div className='flex flex-col w-max items-end lg:px-0 px-4'>
          <p className='text-2xl md:text-3xl font-medium text-left'>Tất cả khóa học</p>
          <div className='w-30 h-1 bg-indigo-500 rounded-full'></div>
        </div>
        <p className='text-gray-500 mt-2 lg:px-0 px-4'>
          <span className='text-blue-600 cursor-pointer' onClick={() => navigate('/')}>Trang chủ </span>/
          <span> Danh sách khóa học</span>
        </p>

        <div>
          {currentCourses.length > 0 ? (
            <>
              <div className='grid grid-cols-1 lg:grid-cols-4 px-4 md:px-0 my-10 gap-4'>
                {currentCourses.map((course, index) => (
                  <CourseCard key={index} course={course} />
                ))}
              </div>
              <div className="flex items-center justify-center mb-6 gap-2">
                {([...Array(Math.ceil(filter.length / coursePerPages))]).map((_, index) => (
                  <div key={index}>
                    <div className="flex gap-2 text-gray-500 text-sm md:text-base mt-6">
                      <button
                        onClick={() => setCurrentCourse(index + 1)}
                        type="button"
                        className={`flex items-center justify-center w-9 md:w-12 h-9 md:h-12 aspect-square transition-all rounded-sm ${currentCourse === index + 1 ? 'bg-indigo-300 text-white' : 'border border-gray-300/60 hover:bg-gray-300/10'}`}>{index + 1}</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className='h-[40vh] flex items-center justify-center'>
              <p className='text-2xl font-medium text-primary'>Không có khóa học nào trong danh mục</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CourseList;
