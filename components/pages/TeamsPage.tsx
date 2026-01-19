import React from 'react';
import { Search, Plus, Edit2, Trash2, ShieldCheck, Trophy } from 'lucide-react';
import { Team, AuctionConfig } from '../../types';
import { CommandCard } from '../ui';

interface TeamsPageProps {
  filteredTeams: Team[];
  teamSearch: string;
  setTeamSearch: (search: string) => void;
  config: AuctionConfig;
  setEditingTeamId: (id: string | null) => void;
  setNewTeam: (team: any) => void;
  setIsTeamModalOpen: (isOpen: boolean) => void;
  setViewingSquadTeamId: (id: string) => void;
  setIsSquadModalOpen: (isOpen: boolean) => void;
  setTeams: React.Dispatch<React.SetStateAction<Team[]>>;
  handleEditTeam: (team: Team) => void;
}

export const TeamsPage: React.FC<TeamsPageProps> = ({ 
  filteredTeams, 
  teamSearch, 
  setTeamSearch,
  config,
  setEditingTeamId,
  setNewTeam,
  setIsTeamModalOpen,
  setViewingSquadTeamId,
  setIsSquadModalOpen,
  setTeams,
  handleEditTeam
}) => {
  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#b4a697]" size={20} />
          <input 
            type="text" 
            placeholder="Find franchise..." 
            className="w-full bg-[#0d0a09] border border-[#3d2f2b] rounded-full pl-14 pr-6 py-4 text-[#f5f5dc] focus:ring-1 ring-[#c5a059] outline-none" 
            value={teamSearch} 
            onChange={(e) => setTeamSearch(e.target.value)} 
          />
        </div>
        <button 
          onClick={() => { 
            setEditingTeamId(null); 
            setNewTeam({ name: '', budget: config.totalBudget }); 
            setIsTeamModalOpen(true); 
          }} 
          className="px-6 py-4 gold-gradient text-[#0d0a09] rounded-full font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 shadow-2xl"
        >
          <Plus size={16} /> Establish Franchise
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTeams.map(t => (
          <CommandCard 
            key={t.id} 
            title={t.name} 
            icon={<ShieldCheck size={16} />} 
            actions={
              <>
                <button onClick={() => handleEditTeam(t)} className="p-2 text-[#b4a697] hover:text-[#c5a059]">
                  <Edit2 size={12} />
                </button>
                <button onClick={() => setTeams(prev => prev.filter(tm => tm.id !== t.id))} className="p-2 text-[#b4a697] hover:text-[#a65d50]">
                  <Trash2 size={12} />
                </button>
              </>
            }
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#0d0a09] border border-[#c5a059]/10 rounded-2xl flex items-center justify-center p-2">
                  {t.logo ? (
                    <img src={t.logo} className="w-full h-full object-contain" />
                  ) : (
                    <Trophy size={24} className="text-[#3d2f2b]" />
                  )}
                </div>
                <div>
                  <p className="text-xl font-display font-black text-[#f5f5dc] uppercase">{t.name}</p>
                  <p className="text-[10px] uppercase font-bold text-[#b4a697]">{t.players.length} Players Secured</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <p className="text-[10px] font-black uppercase text-[#b4a697]">Liquidity</p>
                  <p className="text-xl font-mono font-black text-[#f5f5dc]">${t.remainingBudget.toLocaleString()}</p>
                </div>
                <div className="w-full h-1.5 bg-[#0d0a09] rounded-full overflow-hidden border border-[#3d2f2b]">
                  <div className="h-full gold-gradient" style={{ width: `${(t.remainingBudget/t.budget)*100}%` }}></div>
                </div>
              </div>
              <button 
                onClick={() => { setViewingSquadTeamId(t.id); setIsSquadModalOpen(true); }} 
                className="w-full py-3 border border-[#c5a059]/20 rounded-xl text-[9px] font-black uppercase hover:bg-[#c5a059]/10 transition-all text-[#c5a059]"
              >
                Review Roster
              </button>
            </div>
          </CommandCard>
        ))}
      </div>
    </div>
  );
};
