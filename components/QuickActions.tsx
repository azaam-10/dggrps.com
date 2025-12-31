
import React from 'react';
import { User, FileText, Activity, Mail } from 'lucide-react';

const QuickActions: React.FC = () => {
  const actions = [
    { 
      label: 'Teams', 
      icon: <User size={24} className="text-white" />, 
      bgColor: 'bg-[#f8a135]' 
    },
    { 
      label: 'Record', 
      icon: <FileText size={24} className="text-white" />, 
      bgColor: 'bg-[#50cf96]' 
    },
    { 
      label: 'Wallet management', 
      icon: <Activity size={24} className="text-white" />, 
      bgColor: 'bg-[#f45c5c]' 
    },
    { 
      label: 'Invite friends', 
      icon: <Mail size={24} className="text-white" />, 
      bgColor: 'bg-[#3b99f6]' 
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {actions.map((action, idx) => (
        <button key={idx} className="flex flex-col items-center gap-2">
          <div className={`w-12 h-12 flex items-center justify-center rounded-full ${action.bgColor} shadow-sm`}>
            {action.icon}
          </div>
          <span className="text-[11px] text-[#666] font-medium text-center leading-tight h-8 flex items-center px-1">
            {action.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default QuickActions;
