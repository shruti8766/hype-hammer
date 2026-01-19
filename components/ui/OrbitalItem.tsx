import React from 'react';

interface OrbitalItemProps {
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

export const OrbitalItem: React.FC<OrbitalItemProps> = ({ icon, active, onClick }) => (
  <button 
    onClick={onClick} 
    className={`p-3 rounded-2xl transition-all duration-500 relative flex items-center justify-center flex-shrink-0 ${
      active 
        ? 'bg-[#c5a059] text-[#0d0a09] shadow-[0_0_20px_rgba(197,160,89,0.5)]' 
        : 'text-[#b4a697] hover:bg-[#c5a059]/10 hover:text-[#f5f5dc]'
    }`}
  >
    {icon}
    {active && <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>}
  </button>
);
