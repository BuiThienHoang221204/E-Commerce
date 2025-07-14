import React, { useContext, useState } from 'react'
import CourseContext from '../context/CourseContext';

const SideBar = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const { setSelectedPriceRange } = useContext(CourseContext)
    const sidebarLinks = [
        { text: 'All', path: 'All' },
        { text: '5.000 - 10.000', path: '5k' },
        { text: '10.000 - 50.000', path: '10k' },
        { text: '50.000 - 100.000', path: '50k' },
        { text: 'Hơn 100.000', path: '100k' }
    ];

    return (
        <div className="mt-8 md:w-50 w-16 border-r h-[95vh] text-base border-indigo-500 pt-4 md:flex flex-col transition-all duration-300 hidden">
            <h2 className='text-3xl font-medium my-4 px-4'>Bộ lọc</h2>
            {sidebarLinks.map((item) => (
                <div
                    key={item.text}
                    className={`
                        flex items-center py-5 px-4 gap-3 cursor-pointer w-50
                        ${activeCategory === item.path
                            ? "border-r-4 md:border-r-[6px] bg-indigo-100 border-indigo-500 text-indigo-500"
                            : "hover:bg-indigo-50 border-r text-gray-700 border-indigo-500"
                        }
                    `}
                    onClick={() => {
                        setActiveCategory(item.path);
                        setSelectedPriceRange(item.path);
                        scrollTo(0, 0);
                    }}
                >
                    <p className="md:block hidden text-center">{item.text}</p>
                </div>
            ))}
        </div>
    );
}

export default SideBar