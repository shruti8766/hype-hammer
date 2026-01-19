import React from 'react';
import { Play, HelpCircle } from 'lucide-react';
import { AuctionStatus } from '../../types';

interface HomePageProps {
  setStatus: (status: AuctionStatus) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setStatus }) => {
  return (
    <div className="min-h-screen bg-[#0d0a09] flex flex-col overflow-hidden">
      {/* Header with Logo and How It Works */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-8">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#c5a059] shadow-2xl">
            <img src="./logo.jpg" alt="HypeHammer Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-xl font-display font-black tracking-widest gold-text uppercase leading-none">HypeHammer</h2>
            <p className="text-[9px] font-bold text-[#b4a697] uppercase tracking-[0.3em] mt-1">Command Center</p>
          </div>
        </div>
        <button 
          onClick={() => setStatus(AuctionStatus.HOW_IT_WORKS)} 
          className="flex items-center gap-3 bg-[#1a1410]/80 border border-[#c5a059]/20 backdrop-blur-xl px-6 py-3 rounded-full text-[#c5a059] hover:bg-[#c5a059] hover:text-[#0d0a09] transition-all shadow-lg"
        >
          <HelpCircle size={18} />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">How It Works</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-4xl space-y-12 animate-in fade-in zoom-in duration-1000">
          <div className="space-y-4">
            <h1 className="text-8xl md:text-9xl font-display font-black tracking-tighter text-[#f5f5dc] leading-none drop-shadow-2xl uppercase">
              DRAFT THE <br />
              <span className="gold-text">FUTURE.</span>
            </h1>
            <p className="text-[#c5a059] text-xs font-black uppercase tracking-[0.5em]">HypeHammer Command v2.5</p>
          </div>
          <button 
            onClick={() => setStatus(AuctionStatus.AUTH)} 
            className="group relative px-16 py-8 gold-gradient text-[#0d0a09] font-black uppercase tracking-[0.4em] rounded-full shadow-2xl text-sm hover:scale-105 active:scale-95 transition-all"
          >
            <span className="relative z-10 flex items-center gap-4">
              <Play size={20} fill="currentColor" /> Initialize Market
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
