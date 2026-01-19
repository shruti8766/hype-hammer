import React from 'react';

interface HUDPillProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const HUDPill: React.FC<HUDPillProps> = ({ children, icon, className = "" }) => (
  <div className={`flex items-center gap-2 bg-[#1a1410]/80 border border-[#c5a059]/20 backdrop-blur-xl px-4 py-2 rounded-full shadow-lg ${className}`}>
    {icon && <span className="text-[#c5a059]">{icon}</span>}
    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b4a697]">{children}</span>
  </div>
);
