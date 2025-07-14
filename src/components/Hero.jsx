import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Hero = () => {
    return (
        <div
            style={{
                backgroundImage: "linear-gradient(180deg, #E6FFFF 0%, #FFFFFF 100%)"
            }}
            className='flex flex-col justify-center items-center gap-8 py-16 lg:pt-30 lg:pb-20 px-4 md:px-8 lg:px-12'
        >
            <h1
            style={{
                fontFamily: 'Outfit, sans-serif',
            }}
            className={'text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl text-center leading-tight lg:leading-tight mb-4'}
            >
                Edemy - lựa chọn nơi bắt đầu cho hành trình <span className='text-[#2563EB]'>bứt phá.</span>
            </h1>

            <p className='text-sm sm:text-base md:text-lg text-center text-gray-700 max-w-2xl'>
                Chúng tôi mang đến những giảng viên hàng đầu, nội dung tương tác, và cộng đồng hỗ trợ để giúp bạn đạt được mục tiêu cá nhân và nghề nghiệp.
            </p>

            <button
                onClick={() => toast.info('Chức năng này đang được phát triển!')}
                type="button"
                className="animation-box bg-indigo-500 hover:bg-indigo-600 transition-all px-6 sm:px-8 py-3 text-white font-medium rounded-lg shadow-md active:scale-95"
            >
                Đăng ký học ngay
            </button>
        </div>
    )
}

export default Hero
