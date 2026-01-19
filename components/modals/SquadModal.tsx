import React from 'react';
import { Player, Team } from '../../types';
import { Modal } from '../ui';

interface SquadModalProps {
  isOpen: boolean;
  onClose: () => void;
  viewingSquadTeamId: string | null;
  teams: Team[];
  players: Player[];
}

export const SquadModal: React.FC<SquadModalProps> = ({
  isOpen,
  onClose,
  viewingSquadTeamId,
  teams,
  players
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Roster Intelligence">
      <div className="space-y-6">
        {viewingSquadTeamId && (
          <>
            <div className="p-6 bg-[#0d0a09]/60 border border-[#c5a059]/20 rounded-[2rem]">
              <h3 className="text-2xl font-display font-black text-[#f5f5dc] uppercase">
                {teams.find(t => t.id === viewingSquadTeamId)?.name}
              </h3>
              <p className="text-[10px] font-mono text-[#c5a059] uppercase tracking-widest">
                Available Capital: ${teams.find(t => t.id === viewingSquadTeamId)?.remainingBudget.toLocaleString()}
              </p>
            </div>
            <div className="space-y-3">
              {players.filter(p => p.teamId === viewingSquadTeamId).map(p => (
                <div key={p.id} className="p-4 bg-[#1a1410] border border-[#3d2f2b] rounded-2xl flex justify-between items-center">
                  <p className="font-bold text-[#f5f5dc]">{p.name}</p>
                  <p className="font-mono text-[#c5a059]">${p.soldPrice?.toLocaleString()}</p>
                </div>
              ))}
              {players.filter(p => p.teamId === viewingSquadTeamId).length === 0 && (
                <p className="text-center opacity-30 text-[10px] uppercase font-black py-10">Roster Empty</p>
              )}
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};
