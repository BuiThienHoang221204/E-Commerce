import React from 'react'
import { Link } from 'react-router-dom'

const HelpCenter = () => {
    return (
        <div className="flex flex-col items-center justify-around max-sm:text-sm  rounded-2xl m-2 lg:py-10 py-5 w-full bg-white">
            <h2 className="md:text-4xl text-2xl font-bold text-gray-800">Cải Thiện Bản Thân Ngay Hôm Nay</h2>
            <p className="mt-4 text-slate-500 max-w-xl text-center">Đội ngũ giảng viên tận tâm và hệ thống hỗ trợ học tập 24/7 sẽ đồng hành cùng bạn trong suốt quá trình học.</p>
            <div className="flex items-center gap-4 mt-6">
                <Link to="/course-list">
                    <button type="button" className="bg-indigo-500 hover:bg-indigo-600 transition-all px-8 py-3 text-white font-medium rounded-lg shadow-md active:scale-95">
                        Bắt Đầu
                    </button>
                </Link>
                <Link to="/course-list">
                    <button type="button" className="group flex items-center gap-2 px-8 py-3 font-medium border border-gray-400 rounded-lg hover:bg-gray-100 transition active:scale-95">
                        Xem Thêm
                        <svg className="mt-1 group-hover:translate-x-1 transition-all" width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 5.5h13.092M8.949 1l5.143 4.5L8.949 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default HelpCenter