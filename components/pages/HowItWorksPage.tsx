import React from 'react';
import { ArrowLeft, Play, BookOpen, Settings as SettingsIcon, Users, Trophy, Gavel, LayoutDashboard } from 'lucide-react';
import { AuctionStatus } from '../../types';

interface HowItWorksPageProps {
  setStatus: (status: AuctionStatus) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ setStatus }) => {
  return (
    <div className="min-h-screen bg-[#0d0a09] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1410_0%,_#0d0a09_100%)] pointer-events-none"></div>

      <div className="w-full relative z-10 px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => setStatus(AuctionStatus.HOME)}
            className="flex items-center gap-3 bg-[#1a1410]/80 border border-[#c5a059]/20 backdrop-blur-xl px-6 py-3 rounded-full text-[#c5a059] hover:bg-[#c5a059] hover:text-[#0d0a09] transition-all shadow-lg"
          >
            <ArrowLeft size={18} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Back to Home</span>
          </button>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden border-2 border-[#c5a059]">
              <img src="./logo.jpg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-display font-black tracking-widest gold-text uppercase leading-none">HypeHammer</h2>
          </div>
        </div>

        {/* Main Content */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-display font-black text-[#f5f5dc] uppercase tracking-widest mb-8">
            How It <span className="gold-text">Works</span>
          </h1>

          {/* Video and Pro Tips Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Mock YouTube Video Embed */}
            <div className="aspect-video bg-[#0d0a09] border-2 border-[#c5a059]/20 rounded-2xl overflow-hidden flex items-center justify-center relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1410] to-[#0d0a09]">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-[#c5a059] rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                    <Play size={48} fill="#0d0a09" className="text-[#0d0a09] ml-2" />
                  </div>
                  <p className="text-[#b4a697] text-base font-bold uppercase tracking-widest">Tutorial Video Coming Soon</p>
                </div>
              </div>
            </div>

            {/* Pro Tips Section */}
            <div className="flex flex-col justify-center">
              <div className="flex items-start gap-4">
                <BookOpen size={28} className="text-[#c5a059] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-black text-[#f5f5dc] mb-3 uppercase tracking-wider text-lg">Pro Tips</h4>
                  <ul className="space-y-3 text-base text-[#b4a697] leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-[#c5a059] font-black">•</span>
                      <span>Use the dashboard to get AI-powered insights and track real-time auction statistics</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#c5a059] font-black">•</span>
                      <span>Click on any team card to view their complete roster and remaining budget</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#c5a059] font-black">•</span>
                      <span>Use the search functionality in Players and Teams pages to quickly find specific entries</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#c5a059] font-black">•</span>
                      <span>The auction room can be accessed via the navigation dock at any time during the process</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#c5a059] font-black">•</span>
                      <span>Export your complete auction history from the History tab for record-keeping</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-Step Guidelines */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-black text-[#c5a059] uppercase tracking-widest border-b border-[#3d2f2b] pb-4">Step-by-Step Guide</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Step 1 */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-[#c5a059] flex items-center justify-center flex-shrink-0 font-black text-[#0d0a09] text-xl shadow-lg">
                  1
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <SettingsIcon size={20} className="text-[#c5a059]" />
                    <h4 className="font-display font-black text-[#f5f5dc] text-xl uppercase">Configure Your Auction</h4>
                  </div>
                  <p className="text-base text-[#b4a697] leading-relaxed mb-4">
                    Choose your sport, set budget limits, and customize the auction framework to match your league requirements. 
                    Define player roles, set minimum bid increments, and configure all essential parameters.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[9px] font-black uppercase px-3 py-1 bg-[#c5a059]/10 text-[#c5a059] rounded-full border border-[#c5a059]/20">Sport Selection</span>
                    <span className="text-[9px] font-black uppercase px-3 py-1 bg-[#c5a059]/10 text-[#c5a059] rounded-full border border-[#c5a059]/20">Budget Setup</span>
                    <span className="text-[9px] font-black uppercase px-3 py-1 bg-[#c5a059]/10 text-[#c5a059] rounded-full border border-[#c5a059]/20">Role Configuration</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-[#c5a059] flex items-center justify-center flex-shrink-0 font-black text-[#0d0a09] text-xl shadow-lg">
                  2
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Users size={20} className="text-[#c5a059]" />
                    <Trophy size={20} className="text-[#c5a059]" />
                    <h4 className="font-display font-black text-[#f5f5dc] text-xl uppercase">Register Teams & Players</h4>
                  </div>
                  <p className="text-base text-[#b4a697] leading-relaxed mb-4">
                    Add all participating teams with their budgets, owners, and franchise details. 
                    Register players with comprehensive profiles including roles, base prices, statistics, images, and biographical information.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[9px] font-black uppercase px-3 py-1 bg-[#c5a059]/10 text-[#c5a059] rounded-full border border-[#c5a059]/20">Team Registry</span>
                    <span className="text-[9px] font-black uppercase px-3 py-1 bg-[#c5a059]/10 text-[#c5a059] rounded-full border border-[#c5a059]/20">Player Profiles</span>
                    <span className="text-[9px] font-black uppercase px-3 py-1 bg-[#c5a059]/10 text-[#c5a059] rounded-full border border-[#c5a059]/20">Budget Allocation</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-[#c5a059] flex items-center justify-center flex-shrink-0 font-black text-[#0d0a09] text-xl shadow-lg">
                  3
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Gavel size={20} className="text-[#c5a059]" />
                    <h4 className="font-display font-black text-[#f5f5dc] text-xl uppercase">Launch Auction Room</h4>
                  </div>
                  <p className="text-base text-[#b4a697] leading-relaxed mb-4">
                    Enter the live auction room and start the bidding process. Watch as teams compete for top talent in real-time. 
                    Use the 30-second timer to create urgency, accept bids, and manage unsold players through multiple rounds.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[9px] font-black uppercase px-3 py-1 bg-[#c5a059]/10 text-[#c5a059] rounded-full border border-[#c5a059]/20">Live Bidding</span>
                    <span className="text-[9px] font-black uppercase px-3 py-1 bg-[#c5a059]/10 text-[#c5a059] rounded-full border border-[#c5a059]/20">Timer Control</span>
                    <span className="text-[9px] font-black uppercase px-3 py-1 bg-[#c5a059]/10 text-[#c5a059] rounded-full border border-[#c5a059]/20">Multi-Round</span>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-[#c5a059] flex items-center justify-center flex-shrink-0 font-black text-[#0d0a09] text-xl shadow-lg">
                  4
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <LayoutDashboard size={20} className="text-[#c5a059]" />
                    <h4 className="font-display font-black text-[#f5f5dc] text-xl uppercase">Monitor & Finalize</h4>
                  </div>
                  <p className="text-base text-[#b4a697] leading-relaxed mb-4">
                    Track live statistics, monitor team budgets, and manage all bids through the comprehensive dashboard. 
                    View complete team rosters, analyze spending patterns, and export the full auction history as JSON when complete.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[9px] font-black uppercase px-3 py-1 bg-[#c5a059]/10 text-[#c5a059] rounded-full border border-[#c5a059]/20">Live Dashboard</span>
                    <span className="text-[9px] font-black uppercase px-3 py-1 bg-[#c5a059]/10 text-[#c5a059] rounded-full border border-[#c5a059]/20">Analytics</span>
                    <span className="text-[9px] font-black uppercase px-3 py-1 bg-[#c5a059]/10 text-[#c5a059] rounded-full border border-[#c5a059]/20">Export Data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <button 
              onClick={() => setStatus(AuctionStatus.SETUP)}
              className="px-12 py-5 gold-gradient text-[#0d0a09] rounded-full font-black uppercase tracking-[0.3em] text-sm shadow-2xl hover:brightness-110 transition-all inline-flex items-center gap-3"
            >
              <SettingsIcon size={20} />
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
