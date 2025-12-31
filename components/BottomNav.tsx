
import React from 'react';
import { Home, Headphones, LayoutGrid, FileText, User } from 'lucide-react';
import { NavItem } from '../types';

interface BottomNavProps {
  activeTab: NavItem;
  onTabChange: (tab: NavItem) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const items = [
    { id: 'home', label: 'Home', icon: <Home size={24} /> },
    { id: 'service', label: 'Service', icon: <Headphones size={24} /> },
    { id: 'menu', label: 'Menu', icon: <LayoutGrid size={24} /> },
    { id: 'record', label: 'Record', icon: <FileText size={24} /> },
    { id: 'mine', label: 'Mine', icon: <User size={24} /> },
  ] as const;

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-[#eee] px-2 py-2.5 flex justify-around items-center shadow-[0_-2px_8px_rgba(0,0,0,0.02)] z-50">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onTabChange(item.id)}
          className={`flex flex-col items-center gap-1.5 flex-1 min-w-0 ${
            activeTab === item.id ? 'text-[#333]' : 'text-[#a5a5a5]'
          }`}
        >
          <div className={`${activeTab === item.id ? 'text-[#333]' : 'text-[#a5a5a5]'}`}>
            {item.icon}
          </div>
          <span className={`text-[11px] font-semibold ${activeTab === item.id ? 'text-[#333]' : 'text-[#a5a5a5]'}`}>
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default BottomNav;
