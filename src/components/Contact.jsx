import React from 'react'
import mail from '../assets/icon/mail.svg'
import town from '../assets/icon/town.svg'
import phone from '../assets/icon/phone.svg'

const Contact = () => {
    return (
        <div className="max-w-7xl w-full mx-auto my-20 px-4 md:px-10 py-10 text-gray-800 rounded-2xl bg-indigo-50 flex flex-col items-center">
            <span className="px-3 py-1 text-xs border border-gray-300 rounded-full text-center">
                Liên hệ với chúng tôi
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-4 leading-snug">
                Luôn sẵn sàng hỗ trợ hành trình học tập của bạn
            </h1>

            <p className="text-sm sm:text-base text-center mt-4 max-w-2xl">
                Nếu bạn có thắc mắc về khóa học hoặc cần tư vấn, hãy liên hệ qua email:
                <a href="mailto:contact@example.com" className="text-indigo-600 hover:underline ml-1">
                    contact@example.com
                </a>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 mt-16 gap-8 w-full max-w-5xl">
                {/* Email */}
                <div className='flex flex-col items-center text-center px-4'>
                    <img src={mail} alt="" className="bg-indigo-500/20 p-2.5 aspect-square rounded-full size-10" />
                    <p className="text-lg font-bold mt-3">Hỗ trợ qua Email</p>
                    <p className="text-gray-500 mt-1 mb-3 text-sm">Sẽ phản hồi bạn trong thời gian sớm nhất.</p>
                    <a href="mailto:support@example.com" className="text-indigo-600 font-semibold text-sm">
                        support@example.com
                    </a>
                </div>

                {/* Address */}
                <div className='flex flex-col items-center text-center px-4'>
                    <img src={town} alt="" className="bg-indigo-500/20 p-2.5 aspect-square rounded-full size-10" />
                    <p className="text-lg font-bold mt-3">Địa chỉ văn phòng</p>
                    <p className="text-gray-500 mt-1 mb-3 text-sm">Bạn có thể đến gặp trao đổi với đội ngũ tư vấn.</p>
                    <span className="text-indigo-600 font-semibold text-sm">
                        123B Đường ABC, Tp Hồ Chí Minh
                    </span>
                </div>

                {/* Phone */}
                <div className='flex flex-col items-center text-center px-4'>
                    <img src={phone} alt="" className="bg-indigo-500/20 p-2.5 aspect-square rounded-full size-10" />
                    <p className="text-lg font-bold mt-3">Gọi trực tiếp</p>
                    <p className="text-gray-500 mt-1 mb-3 text-sm">Liên hệ tư vấn trực tiếp trong giờ hành chính.</p>
                    <span className="text-indigo-600 font-semibold text-sm">
                        (+84) 912 345 678
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Contact;
