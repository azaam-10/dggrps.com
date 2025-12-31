
import React from 'react';
import { Layout, ClipboardCheck, ArrowUpRight, Settings, ChevronRight } from 'lucide-react';

const MenuList: React.FC = () => {
  const items = [
    { label: 'Profile', icon: <Layout size={20} /> },
    { label: 'Deposit records', icon: <ClipboardCheck size={20} /> },
    { label: 'Withdrawal records', icon: <ArrowUpRight size={20} /> },
    { label: 'Setting', icon: <Settings size={20} /> },
  ];

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#f0f0f0]">
      {items.map((item, idx) => (
        <button 
          key={idx} 
          className={`w-full flex items-center justify-between px-5 py-[18px] active:bg-gray-50 transition-colors ${idx !== items.length - 1 ? 'border-b border-[#f5f5f5]' : ''}`}
        >
          <div className="flex items-center gap-4">
            <div className="text-[#8e99aa]">
              {item.icon}
            </div>
            <span className="text-[15px] text-[#333] font-medium">{item.label}</span>
          </div>
          <ChevronRight size={20} className="text-[#ccc]" strokeWidth={1.5} />
        </button>
      ))}
    </div>
  );
};

export default MenuList;
