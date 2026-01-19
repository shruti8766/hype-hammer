import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  subValue?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, icon, subValue }) => (
  <div className="bg-[#1a1410] border border-[#3d2f2b] rounded-[2rem] p-8 hover:border-[#c5a059]/30 transition-all group overflow-hidden relative">
    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-125 transition-all text-[#c5a059]">
      {icon}
    </div>
    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#b4a697] mb-2">{label}</p>
    <p className="text-3xl font-display font-black text-[#f5f5dc] tracking-tighter">{value}</p>
    {subValue && <p className="text-[10px] text-[#5c4742] mt-2 font-medium">{subValue}</p>}
  </div>
);
