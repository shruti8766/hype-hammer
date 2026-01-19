import React from 'react';
import { Search, Plus, Edit2, Trash2 } from 'lucide-react';
import { Player } from '../../types';
import { CommandCard } from '../ui';

interface PlayersPageProps {
  filteredPlayers: Player[];
  playerSearch: string;
  setPlayerSearch: (search: string) => void;
  setEditingPlayerId: (id: string | null) => void;
  setNewPlayer: (player: any) => void;
  setIsPlayerModalOpen: (isOpen: boolean) => void;
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
  handleEditPlayer: (player: Player) => void;
}

export const PlayersPage: React.FC<PlayersPageProps> = ({ 
  filteredPlayers, 
  playerSearch, 
  setPlayerSearch,
  setEditingPlayerId,
  setNewPlayer,
  setIsPlayerModalOpen,
  setPlayers,
  handleEditPlayer
}) => {
  return (
    <CommandCard title="Registry" className="w-full min-h-full">
      <div className="flex flex-col sm:flex-row justify-between mb-8 gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#b4a697]" size={20} />
          <input 
            type="text" 
            placeholder="Scan registry..." 
            className="w-full bg-[#0d0a09] border border-[#3d2f2b] rounded-full pl-14 pr-6 py-4 text-[#f5f5dc] focus:ring-1 ring-[#c5a059] outline-none" 
            value={playerSearch} 
            onChange={(e) => setPlayerSearch(e.target.value)} 
          />
        </div>
        <button 
          onClick={() => { 
            setEditingPlayerId(null); 
            setNewPlayer({ name: '', basePrice: 0, status: 'PENDING' }); 
            setIsPlayerModalOpen(true); 
          }} 
          className="px-6 py-4 gold-gradient text-[#0d0a09] rounded-full font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 shadow-2xl"
        >
          <Plus size={16} /> Register Talent
        </button>
      </div>
      <table className="w-full text-left">
        <thead className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b4a697] border-b border-[#3d2f2b]">
          <tr>
            <th className="pb-4">Asset</th>
            <th className="pb-4">Valuation</th>
            <th className="pb-4">Status</th>
            <th className="pb-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#3d2f2b]/30">
          {filteredPlayers.map(p => (
            <tr key={p.id} className="group hover:bg-[#c5a059]/5 transition-all">
              <td className="py-4 font-bold text-base text-[#f5f5dc]">{p.name}</td>
              <td className="py-4 font-mono text-base font-bold text-[#f5f5dc]">${p.basePrice.toLocaleString()}</td>
              <td className="py-4">
                <span className={`text-[9px] font-black px-2 py-0.5 border rounded uppercase ${
                  p.status === 'SOLD' ? 'text-green-500 border-green-500/20' : 'text-[#c5a059] border-[#c5a059]/20'
                }`}>
                  {p.status}
                </span>
              </td>
              <td className="py-4 text-right">
                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button 
                    onClick={() => handleEditPlayer(p)} 
                    className="p-2 text-[#c5a059] hover:bg-[#c5a059]/10 rounded-lg"
                  >
                    <Edit2 size={14} />
                  </button>
                  <button 
                    onClick={() => setPlayers(prev => prev.filter(pl => pl.id !== p.id))} 
                    className="p-2 text-[#a65d50] hover:bg-[#a65d50]/10 rounded-lg"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </CommandCard>
  );
};
