import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';

const Footer = () => {
    const linkSections = [
        {
            title: "Liên kết nhanh",
            links: ["Trang chủ", "Bán chạy", "Ưu đãi & Giảm giá", "Liên hệ", "Câu hỏi thường gặp"]
        },
        {
            title: "Cần hỗ trợ?",
            links: ["Thông tin giao hàng", "Chính sách đổi/trả", "Phương thức thanh toán", "Theo dõi đơn hàng", "Liên hệ"]
        },
        {
            title: "Theo dõi chúng tôi",
            links: ["Instagram", "Twitter", "Facebook", "YouTube"]
        }
    ];

    return (
        <div className="px-6 lg:px-32">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                <div>
                    <div className='flex items-center'>
                        <Link to='/'>
                            <img src={assets.logo} />
                        </Link>
                    </div>
                    <p className="max-w-[410px] mt-6">
                        Chúng tôi mang đến những <span className='text-[#2563EB]'> giảng viên hàng đầu,</span> nội dung tương tác, và cộng đồng hỗ trợ để giúp bạn đạt được mục tiêu cá nhân và nghề nghiệp.                  </p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {linkSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href="#" className="hover:underline transition">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                Bản quyền 2025 ©. Đã đăng ký bản quyền.
            </p>
        </div>
    );
}

export default Footer
