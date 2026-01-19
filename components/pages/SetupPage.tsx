import React, { useState } from 'react';
import { ArrowLeft, Plus } from 'lucide-react';
import { AuctionStatus, AuctionConfig, AuctionType, SportType } from '../../types';
import { SPORT_DEFAULTS } from '../../constants';

interface SetupPageProps {
  config: AuctionConfig;
  setConfig: (config: AuctionConfig) => void;
  onSelectSport: (sportType: SportType, customName?: string) => void;
  setStatus: (status: AuctionStatus) => void;
}

export const SetupPage: React.FC<SetupPageProps> = ({ config, setConfig, onSelectSport, setStatus }) => {
  const [customSportName, setCustomSportName] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);

  const handleSportSelect = (s: SportType) => {
    if (s === SportType.CUSTOM) {
      setShowCustomInput(true);
      setConfig({ 
        ...config, 
        sport: s, 
        roles: SPORT_DEFAULTS[s].roles || [], 
        squadSize: SPORT_DEFAULTS[s].squadSize || config.squadSize, 
        totalBudget: SPORT_DEFAULTS[s].totalBudget || config.totalBudget 
      });
    } else {
      setShowCustomInput(false);
      setCustomSportName('');
      setConfig({ 
        ...config, 
        sport: s, 
        roles: SPORT_DEFAULTS[s].roles || [], 
        squadSize: SPORT_DEFAULTS[s].squadSize || config.squadSize, 
        totalBudget: SPORT_DEFAULTS[s].totalBudget || config.totalBudget 
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0a09] flex flex-col p-8 overflow-hidden relative">
      <div className="fixed top-8 left-10 z-[60]">
        <button 
          onClick={() => setStatus(AuctionStatus.HOME)} 
          className="flex items-center gap-3 bg-[#1a1410]/80 border border-[#c5a059]/20 backdrop-blur-xl px-5 py-3 rounded-full text-[#c5a059] hover:bg-[#c5a059] hover:text-[#0d0a09] transition-all shadow-lg"
        >
          <ArrowLeft size={18} />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Exit To Home</span>
        </button>
      </div>

      <div className="w-full max-w-7xl mx-auto z-10 mt-20">
        <div className="text-center mb-8 space-y-3">
          <h1 className="text-5xl font-display font-black tracking-tighter text-[#f5f5dc] drop-shadow-2xl">
            HYPE<span className="gold-text">HAMMER</span>
          </h1>
          <p className="text-[#c5a059] text-xs font-black uppercase tracking-[0.5em]">Setup Protocol</p>
        </div>

        <div className="bg-[#1a1410] border border-[#c5a059]/30 rounded-[3rem] p-8 shadow-[0_0_80px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left - Sport Selection */}
            <div className="lg:col-span-2 space-y-6">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#b4a697]">Global Discipline</label>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {Object.values(SportType).map((s) => (
                  <button 
                    key={s} 
                    onClick={() => handleSportSelect(s)} 
                    className={`p-3 rounded-xl border transition-all duration-500 text-center relative overflow-hidden group ${
                      config.sport === s 
                        ? 'border-[#c5a059] bg-[#c5a059]/10' 
                        : 'border-[#3d2f2b] bg-[#120d0b] hover:border-[#5c4742]'
                    }`}
                  >
                    {s === SportType.CUSTOM ? (
                      <div className="flex flex-col items-center gap-1">
                        <Plus size={16} className={config.sport === s ? 'text-[#c5a059]' : 'text-[#b4a697]'} />
                        <span className={`font-display font-bold text-[10px] uppercase ${
                          config.sport === s ? 'text-[#f5f5dc]' : 'text-[#b4a697]'
                        }`}>
                          {s}
                        </span>
                      </div>
                    ) : (
                      <span className={`font-display font-bold text-xs uppercase ${
                        config.sport === s ? 'text-[#f5f5dc]' : 'text-[#b4a697]'
                      }`}>
                        {s}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Custom Sport Input */}
              {showCustomInput && (
                <div className="space-y-3 animate-in fade-in slide-in-from-top-5">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#c5a059]">Custom Sport Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-[#120d0b] border border-[#c5a059]/30 rounded-2xl px-5 py-4 text-[#f5f5dc] font-bold focus:ring-1 ring-[#c5a059] outline-none" 
                    placeholder="Enter your sport name..."
                    value={customSportName} 
                    onChange={(e) => setCustomSportName(e.target.value)} 
                  />
                  {customSportName && (
                    <p className="text-[9px] text-[#c5a059] italic">Custom sport: {customSportName}</p>
                  )}
                </div>
              )}
            </div>

            {/* Right - Configuration */}
            <div className="flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#b4a697]">Capital Limit</label>
                  <input 
                    type="number" 
                    className="w-full bg-[#120d0b] border border-[#3d2f2b] rounded-2xl px-5 py-4 text-[#f5f5dc] font-mono text-lg focus:ring-1 ring-[#c5a059] outline-none" 
                    value={config.totalBudget} 
                    onChange={(e) => setConfig({ ...config, totalBudget: Number(e.target.value) })} 
                  />
                  <p className="text-[9px] text-[#b4a697] italic">${config.totalBudget.toLocaleString()}</p>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#b4a697]">Framework</label>
                  <select 
                    className="w-full bg-[#120d0b] border border-[#3d2f2b] rounded-2xl px-5 py-4 text-[#f5f5dc] font-bold uppercase tracking-wider outline-none appearance-none" 
                    value={config.type} 
                    onChange={(e) => setConfig({ ...config, type: e.target.value as AuctionType })}
                  >
                    {Object.values(AuctionType).map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <button 
                onClick={() => {
                  // Validate and navigate to matches
                  if (config.sport === SportType.CUSTOM && customSportName.trim()) {
                    setConfig({ ...config, customSportName: customSportName.trim() });
                    onSelectSport(SportType.CUSTOM, customSportName.trim());
                  } else if (config.sport && config.sport !== SportType.CUSTOM) {
                    onSelectSport(config.sport);
                  } else {
                    alert('Please select a sport or enter a custom sport name');
                  }
                }}
                disabled={!config.sport || (config.sport === SportType.CUSTOM && !customSportName.trim())}
                className="gold-gradient hover:brightness-110 text-[#0d0a09] font-black py-5 rounded-2xl transition-all shadow-2xl uppercase tracking-[0.3em] text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue to Matches
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
