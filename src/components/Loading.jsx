import React from 'react';
import { SiSpinrilla } from "react-icons/si";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white/60 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <SiSpinrilla className="text-indigo-500 animate-spin text-6xl" />
        <p className="text-gray-700 text-lg font-medium">Đang tải nội dung...</p>
      </div>
    </div>
  );
};

export default Loading;
