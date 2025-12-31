import React from 'react';
import { MessageCircleMore } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center gap-4">
        {/* Avatar - geometric SVG pattern to exactly match screenshot */}
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 bg-white flex items-center justify-center shadow-inner">
          <svg viewBox="0 0 100 100" className="w-full h-full scale-110">
            <path d="M50 50 L100 20 L100 80 Z" fill="#f44336" />
            <path d="M50 50 L80 100 L20 100 Z" fill="#9c27b0" />
            <path d="M50 50 L0 80 L0 20 Z" fill="#2196f3" />
            <path d="M50 50 L20 0 L80 0 Z" fill="#4caf50" />
            <path d="M50 50 L100 20 L80 0 Z" fill="#ffeb3b" />
            <path d="M50 50 L0 20 L20 0 Z" fill="#ff9800" />
          </svg>
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <span className="text-white text-[22px] font-bold tracking-tight">Basil3216260</span>
            <span className="vip-badge">VIP0</span>
          </div>
          <span className="text-white/70 text-[13px] mt-1 font-medium">Invitation code: 988400</span>
        </div>
      </div>
      
      <button className="text-white/90 p-1 mt-1">
        <MessageCircleMore size={28} strokeWidth={1.5} />
      </button>
    </div>
  );
};

export default Header;