import React, { useContext, useState, useRef, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { assets } from '../../assets/assets';
import CourseContext from '../../context/CourseContext';
import { getProductSuggestions } from './chatbox';


const ChatBox = () => {
    const messagesEnd = useRef(null);
    const { calculateRating, courses } = useContext(CourseContext)
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: "Edemy", text: "Chào bạn! Tôi có thể gợi ý sản phẩm nếu bạn cần." },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Tự động cuộn xuống cuối khi có tin nhắn mới
        messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages])

    const handleSend = async () => {
        if (!input.trim()) return;
        const userMessage = { from: "User", text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true)
        // Gọi API để lấy danh sách khóa học
        try {
            const coursesList = courses.map(item =>
                `
                    Tên khóa học : ${item.courseTitle}
                    Mô tả: ${item.courseDescription}
                    Giá: ${(item.coursePrice - item.discount * item.coursePrice / 100).toFixed(2)}K
                    Đánh giá: ${calculateRating(item)}
                `
            ).join("\n");
            console.log("Danh sách khóa học:", coursesList);
            // Gửi danh sách đến hàm AI gợi ý
            const reply = await getProductSuggestions(coursesList, input);
            setMessages(prev => [...prev, { from: "Edemy", text: reply }]);
        } catch (error) {
            console.error("Lỗi khi lấy danh sách khóa học:", error);
            setMessages(prev => [...prev, { from: "Edemy", text: "Không thể lấy dữ liệu khóa học. Vui lòng thử lại sau." }]);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <button
                className="fixed bottom-6 right-6 bg-indigo-500 hover:bg-indigo-600 text-white p-4 rounded-full shadow-lg z-50"
                onClick={() => setOpen(!open)}
            >
                <MessageCircle size={24} />
            </button>

            {open && (
                <div className="fixed bottom-24 right-6 w-[320px] h-[400px] bg-white border border-gray-300 shadow-2xl rounded-lg flex flex-col z-50">
                    <div className="p-3 flex items-center bg-indigo-300 text-white rounded-t-lg">
                        <img src={assets.logo} alt="logo" />
                    </div>

                    <div className="p-3 flex-1 overflow-y-auto space-y-2 text-sm">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.from === "User" ? "justify-end" : "justify-start"}`}>
                                <div className={`px-3 py-2 rounded-lg max-w-[80%] whitespace-pre-wrap ${msg.from === "User" ? "bg-gray-200 text-right" : "bg-indigo-100 text-left"}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {loading && (
                            <div className="flex justify-start">
                                <div className="px-3 py-2 rounded-lg bg-indigo-100 max-w-[80%] text-left animate-pulse">
                                    Đang gợi ý khóa học...
                                </div>
                            </div>
                        )}

                        <div ref={messagesEnd} />
                    </div>

                    <div className="flex border-t border-gray-300">
                        <input
                            type="text"
                            placeholder="Nhập tin nhắn..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            className="flex-1 p-3 text-sm border-none outline-none"
                        />
                        <button
                            onClick={handleSend}
                            className="bg-indigo-400 text-white px-4 text-sm hover:bg-indigo-500"
                        >
                            Gửi
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatBox;

