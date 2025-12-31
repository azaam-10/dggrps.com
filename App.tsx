
import React, { useState } from 'react';
import Header from './components/Header';
import AccountSection from './components/AccountSection';
import QuickActions from './components/QuickActions';
import MenuList from './components/MenuList';
import BottomNav from './components/BottomNav';
import TaskModal from './components/TaskModal';
import { NavItem } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavItem>('mine');

  return (
    <div className="flex flex-col min-h-screen max-w-[430px] mx-auto bg-[#f8f9fa] relative overflow-hidden">
      {/* Modal Overlay System */}
      <TaskModal />

      {/* Content wrapper */}
      <div className="flex-1 pb-20">
        {/* Header Section */}
        <div className="header-gradient pt-8 pb-10 px-5">
          <Header />
          <AccountSection />
        </div>

        {/* Quick Actions row */}
        <div className="bg-white py-6 px-2">
          <QuickActions />
        </div>

        {/* Menu Items List */}
        <div className="mt-2 px-4 pb-4">
          <MenuList />
        </div>
      </div>

      {/* Persistent Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;
