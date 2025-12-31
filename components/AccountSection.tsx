
import React from 'react';
import { Wallet, CreditCard } from 'lucide-react';

const AccountSection: React.FC = () => {
  return (
    <div className="flex justify-between items-start px-1">
      <div className="flex flex-col pt-1">
        <span className="text-white text-[15px] font-semibold opacity-90 mb-3">My Account</span>
        <div className="flex items-baseline gap-1.5">
          <span className="text-white text-[12px] font-medium opacity-80">USDT</span>
          <span className="text-white text-[24px] font-bold leading-none">43227.4987</span>
        </div>
      </div>

      <div className="flex gap-4">
        {/* Deposit Button */}
        <button className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 bg-white rounded-[16px] flex items-center justify-center shadow-lg">
            <Wallet className="text-[#3a82f6]" size={30} fill="#3a82f6" fillOpacity={0.1} />
          </div>
          <span className="text-white text-[12px] font-medium">Deposit</span>
        </button>

        {/* Withdrawal Button */}
        <button className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 bg-white rounded-[16px] flex items-center justify-center shadow-lg">
            <CreditCard className="text-[#3a82f6]" size={30} fill="#3a82f6" fillOpacity={0.1} />
          </div>
          <span className="text-white text-[12px] font-medium">Withdrawal</span>
        </button>
      </div>
    </div>
  );
};

export default AccountSection;
