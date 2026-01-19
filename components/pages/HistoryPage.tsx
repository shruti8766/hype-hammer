import React from 'react';
import { Download } from 'lucide-react';
import { Player, Team, Bid } from '../../types';
import { CommandCard } from '../ui';

interface HistoryPageProps {
  history: Bid[];
  players: Player[];
  teams: Team[];
  exportHistoryAsJson: () => void;
}

export const HistoryPage: React.FC<HistoryPageProps> = ({ 
  history, 
  players, 
  teams, 
  exportHistoryAsJson 
}) => {
  return (
    <CommandCard 
      title="Market Archive" 
      className="w-full" 
      actions={
        <button 
          onClick={exportHistoryAsJson} 
          className="flex items-center gap-2 bg-[#c5a059]/10 text-[#c5a059] px-4 py-2 rounded-full text-[9px] font-black uppercase hover:bg-[#c5a059] hover:text-[#0d0a09] transition-all"
        >
          <Download size={14} /> Export Protocol
        </button>
      }
    >
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b4a697] border-b border-[#3d2f2b]">
            <tr>
              <th className="pb-4">Timestamp</th>
              <th className="pb-4">Asset</th>
              <th className="pb-4">Franchise</th>
              <th className="pb-4 text-right">Settlement</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#3d2f2b]/30">
            {history.map(b => (
              <tr key={b.id} className="hover:bg-[#c5a059]/5 transition-all">
                <td className="py-4 text-[10px] font-mono text-[#b4a697]">
                  {new Date(b.timestamp).toLocaleTimeString()}
                </td>
                <td className="py-4 font-bold text-[#f5f5dc]">
                  {players.find(p => p.id === b.playerId)?.name}
                </td>
                <td className="py-4 text-[#c5a059] font-black uppercase text-[10px] tracking-widest">
                  {teams.find(t => t.id === b.teamId)?.name}
                </td>
                <td className="py-4 text-right font-mono font-black text-[#f5f5dc]">
                  ${b.amount.toLocaleString()}
                </td>
              </tr>
            ))}
            {history.length === 0 && (
              <tr>
                <td colSpan={4} className="py-10 text-center opacity-30 text-[10px] uppercase font-black tracking-[0.3em]">
                  No archive data detected
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </CommandCard>
  );
};
