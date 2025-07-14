import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
if (!apiKey) {
    throw new Error('API key Gemini chưa được thiết lập. Hãy tạo biến môi trường GEMINI_API_KEY.');
}
// Khởi tạo SDK Gemini
const genAI = new GoogleGenerativeAI(apiKey);

export const getProductSuggestions = async (productList, input) => {
    const prompt = `
        Người dùng vừa nhập: "${input}"

        Dưới đây là danh sách các khóa học:
        ${productList}
        
        Dựa trên thông tin người dùng cung cấp, hãy chọn ra **một** khóa học phù hợp nhất với nhu cầu của họ (không mặc định chọn phổ biến nếu có khóa học phù hợp hơn).
        
        Hãy trả về đúng theo định dạng sau (không markdown, không dấu *, chỉ dùng gạch đầu dòng "•"):
        Dựa trên yêu cầu của bạn tôi sẽ đề xuất như sau
        • Tên khóa học: ...
        • Đánh giá: ...
        • Mô tả ngắn gọn: ...
        • Giá: ...
    `;

    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const generationConfig = {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 8192,
        };
        const result = await model.generateContent({
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
            generationConfig,
        });
        return result.response.text() || 'Không có gợi ý từ AI.';
    } catch (error) {
        throw new Error('Lỗi khi gọi Gemini SDK: ' + error.message);
    }
};
