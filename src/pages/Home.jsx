import React, { useContext, useEffect, useState } from 'react'
import Hero from '../components/Hero'
import microsoft_logo from '../assets/microsoft_logo.svg'
import walmart_logo from '../assets/walmart_logo.svg'
import accenture_logo from '../assets/accenture_logo.svg'
import adobe_logo from '../assets/adobe_logo.svg'
import paypal_logo from '../assets/paypal_logo.svg'
import CouresSection from '../components/CoursesSection'
import FeedbackCard from '../components/FeedbackCard'
import { assets } from '../assets/assets'
import Contact from '../components/Contact'
import HelpCenter from '../components/HelpCenter'
import Loading from '../components/Loading'
import CourseContext from '../context/CourseContext'

const listFeedBack = [
    {
        id: 1,
        icon: assets.profile_img_1,
        name: 'Nguyễn Văn An',
        feedback: 'Khóa học rất hữu ích và chất lượng giảng dạy tuyệt vời! Mình đã có nền tảng vững chắc về JavaScript và tự tin phát triển các dự án nhỏ. Giảng viên hướng dẫn rất dễ hiểu, có ví dụ thực tế giúp tiếp thu nhanh.',
        email: 'SWE 1 @ Amazon',
        description: 'Nguyễn Văn An là một kỹ sư phần mềm với hơn 3 năm kinh nghiệm phát triển web tại các công ty công nghệ lớn. Anh đã từng tham gia xây dựng các hệ thống quản lý người dùng quy mô lớn và tối ưu hiệu suất cho các ứng dụng ReactJS.'
    },
    {
        id: 2,
        icon: assets.profile_img_2,
        name: 'Trần Thị Bích',
        feedback: 'Tôi đã học được rất nhiều kiến thức mới từ khóa học này. Các bài giảng được trình bày rõ ràng, có cấu trúc, dễ theo dõi. Đặc biệt là phần thực hành đã giúp tôi hiểu sâu hơn về các khái niệm lập trình.',
        email: 'SWE 2 @ Google',
        description: 'Trần Thị Bích hiện đang là kỹ sư dữ liệu tại Google, với chuyên môn về xử lý dữ liệu lớn và tối ưu hóa truy vấn. Cô từng đạt học bổng toàn phần tại Đại học Bách Khoa và có kinh nghiệm làm việc với các công cụ như Apache Spark, BigQuery và Python.'
    },
    {
        id: 3,
        icon: assets.profile_img_3,
        name: 'Lê Văn Cường',
        feedback: 'Giảng viên rất nhiệt tình và hỗ trợ học viên tốt. Tôi gặp một số khó khăn trong quá trình học nhưng luôn nhận được sự giúp đỡ kịp thời. Sau khóa học, tôi đã áp dụng được nhiều kiến thức vào công việc hiện tại.',
        email: 'SWE 3 @ Microsoft',
        description: 'Lê Văn Cường là lập trình viên backend tại Microsoft với hơn 5 năm kinh nghiệm trong phát triển API, hệ thống phân tán và xử lý đồng thời. Anh từng tham gia phát triển các microservices phục vụ hàng triệu người dùng.'
    },
];
const listImg = [
    microsoft_logo, walmart_logo, accenture_logo, adobe_logo, paypal_logo
]

const Home = () => {
    const { loading } = useContext(CourseContext);
    if (loading) return <Loading />

    return (
        <>
            <Hero />
            <div className='container mx-auto'>
                <div className='max-w-4xl mx-auto py-10'>
                    <p className='text-center mb-10 text-base font-medium'>Có hơn <span className='text-[#2563EB]'>300.000</span> người tin tưởng từ</p>
                    <div className='overflow-hidden'>
                        <div className='flex gap-8 justify-center animation-slideshow'>
                            {[...listImg, ...listImg].map((item, index) => {
                                return (
                                    <img key={index} src={item} alt="Microsoft Logo" className='w-32 h-10 object-contain lg:my-0 my-4' />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <CouresSection />
                {/* Feedback */}
                <div className='py-16 md:px-4 px-8 text-center'>
                    <h2 className='text-4xl font-bold text-gray-800'>Phản hồi từ học viên</h2>
                    <p className='text-sm md:text-base text-gray-500 mt-3 lg:w-[60%] mx-auto'>
                        Chúng tôi tự hào về những phản hồi tích cực từ học viên của mình. Dưới đây là một số đánh giá từ những người đã trải nghiệm khóa học của chúng tôi.
                    </p>
                    <div className='mx-auto grid grid-cols-1 md:grid-cols-3 w-fit gap-6 mt-10'>
                        {listFeedBack.map(item => {
                            return (
                                <FeedbackCard key={item.id} feedback={item} />
                            )
                        })}
                    </div>
                </div>
                <HelpCenter />
                <Contact />
            </div>
        </>
    )
}

export default Home