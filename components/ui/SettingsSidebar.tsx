import React from 'react';
import { 
  X, User, LogOut, Settings as SettingsIcon, Trophy, 
  Database, FileJson, Download, Upload, History, 
  Users, Palette, Bell, Shield, HelpCircle, Info
} from 'lucide-react';
import { AuctionStatus, SportData, MatchData } from '../../types';

interface SettingsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: {
    name: string;
    email: string;
    avatar?: string;
  };
  allSports: SportData[];
  currentSport: string | null;
  currentMatchId: string | null;
  onSelectMatch: (matchId: string, sportIdentifier: string) => void;
  onNavigateToSettings: (section?: string) => void;
  onLogout: () => void;
}

export const SettingsSidebar: React.FC<SettingsSidebarProps> = ({
  isOpen,
  onClose,
  currentUser,
  allSports,
  currentSport,
  currentMatchId,
  onSelectMatch,
  onNavigateToSettings,
  onLogout
}) => {
  if (!isOpen) return null;

  const getSportDisplayName = (sport: SportData) => {
    return sport.customSportName || sport.sportType;
  };

  const getMatchStatusBadge = (status: string) => {
    const colors = {
      SETUP: 'bg-gray-600',
      ONGOING: 'bg-yellow-600',
      COMPLETED: 'bg-green-600'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-600';
  };

  const settingsSections = [
    { 
      id: 'general', 
      icon: <SettingsIcon size={16} />, 
      label: 'General Settings',
      description: 'Basic configuration & preferences'
    },
    { 
      id: 'match', 
      icon: <Trophy size={16} />, 
      label: 'Match Configuration',
      description: 'Sport type, budget, roles'
    },
    { 
      id: 'data', 
      icon: <Database size={16} />, 
      label: 'Data Management',
      description: 'Import/Export, backup, clear data'
    },
    { 
      id: 'teams', 
      icon: <Users size={16} />, 
      label: 'Teams & Players',
      description: 'Manage participants'
    },
    { 
      id: 'appearance', 
      icon: <Palette size={16} />, 
      label: 'Appearance',
      description: 'Theme, colors, display'
    },
    { 
      id: 'notifications', 
      icon: <Bell size={16} />, 
      label: 'Notifications',
      description: 'Alerts & updates'
    },
    { 
      id: 'privacy', 
      icon: <Shield size={16} />, 
      label: 'Privacy & Security',
      description: 'Account security settings'
    },
    { 
      id: 'history', 
      icon: <History size={16} />, 
      label: 'Auction History',
      description: 'View past transactions'
    },
    { 
      id: 'help', 
      icon: <HelpCircle size={16} />, 
      label: 'Help & Support',
      description: 'Documentation & support'
    },
    { 
      id: 'about', 
      icon: <Info size={16} />, 
      label: 'About HypeHammer',
      description: 'Version & credits'
    }
  ];

  return (
    <>
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-[#0d0a09] border-l border-[#c5a059]/30 z-[100] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 rounded-l-3xl">
        {/* Header */}
        <div className="bg-[#1a1410] border-b border-[#c5a059]/20 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-display font-black text-[#c5a059] uppercase tracking-wider">
              Menu
            </h2>
            <button 
              onClick={onClose}
              className="p-2 rounded-lg text-[#b4a697] hover:bg-[#c5a059]/10 hover:text-[#c5a059] transition-all"
            >
              <X size={20} />
            </button>
          </div>

          {/* User Profile */}
          <div className="bg-[#0d0a09] border border-[#c5a059]/20 rounded-2xl p-4 group hover:border-[#c5a059]/40 transition-all cursor-pointer"
            onClick={() => {
              onNavigateToSettings('profile');
              onClose();
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c5a059] to-[#d4af6a] flex items-center justify-center overflow-hidden">
                {currentUser.avatar ? (
                  <img src={currentUser.avatar} alt={currentUser.name} className="w-full h-full object-cover" />
                ) : (
                  <User size={24} className="text-[#0d0a09]" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-black text-[#f5f5dc] truncate uppercase tracking-wide">
                  {currentUser.name}
                </p>
                <p className="text-[10px] text-[#b4a697] truncate">
                  {currentUser.email}
                </p>
              </div>
              <SettingsIcon size={16} className="text-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {/* Active Matches */}
          {allSports.length > 0 && (
            <div className="p-6 border-b border-[#2a2016]">
              <h3 className="text-[10px] font-black uppercase text-[#b4a697] tracking-wider mb-4">
                Your Matches
              </h3>
              <div className="space-y-3">
                {allSports.map(sport => (
                  <div key={`${sport.sportType}-${sport.customSportName}`}>
                    <p className="text-[9px] font-black uppercase text-[#c5a059] mb-2 tracking-wider">
                      {getSportDisplayName(sport)}
                    </p>
                    {sport.matches.length === 0 ? (
                      <p className="text-[10px] text-[#5c4742] italic ml-2">No matches yet</p>
                    ) : (
                      <div className="space-y-2">
                        {sport.matches.map(match => (
                          <button
                            key={match.id}
                            onClick={() => {
                              const sportId = sport.customSportName || sport.sportType;
                              onSelectMatch(match.id, sportId);
                              onClose();
                            }}
                            className={`w-full text-left px-3 py-2 rounded-lg transition-all group ${
                              match.id === currentMatchId
                                ? 'bg-[#c5a059]/20 border border-[#c5a059]/40'
                                : 'bg-[#1a1410] border border-[#2a2016] hover:border-[#c5a059]/30'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex-1 min-w-0">
                                <p className="text-[11px] font-bold text-[#f5f5dc] truncate">
                                  {match.name}
                                </p>
                                <p className="text-[9px] text-[#b4a697]">
                                  {match.teams.length} teams • {match.players.length} players
                                </p>
                              </div>
                              <div className={`w-2 h-2 rounded-full ${getMatchStatusBadge(match.status)} ml-2`}></div>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings Sections */}
          <div className="p-6">
            <h3 className="text-[10px] font-black uppercase text-[#b4a697] tracking-wider mb-4">
              Settings
            </h3>
            <div className="space-y-2">
              {settingsSections.map(section => (
                <button
                  key={section.id}
                  onClick={() => {
                    onNavigateToSettings(section.id);
                    onClose();
                  }}
                  className="w-full text-left px-4 py-3 rounded-xl bg-[#1a1410] border border-[#2a2016] hover:border-[#c5a059]/40 hover:bg-[#c5a059]/5 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-[#c5a059] mt-0.5">
                      {section.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-black text-[#f5f5dc] uppercase tracking-wide mb-0.5">
                        {section.label}
                      </p>
                      <p className="text-[9px] text-[#b4a697]">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-6 border-t border-[#2a2016]">
            <h3 className="text-[10px] font-black uppercase text-[#b4a697] tracking-wider mb-4">
              Quick Actions
            </h3>
            <div className="space-y-2">
              <button 
                onClick={() => {
                  onNavigateToSettings('export');
                  onClose();
                }}
                className="w-full px-4 py-3 rounded-xl bg-[#1a1410] border border-[#2a2016] hover:border-[#c5a059]/40 transition-all flex items-center gap-3 text-left"
              >
                <Download size={16} className="text-[#c5a059]" />
                <span className="text-[11px] font-black text-[#f5f5dc] uppercase tracking-wide">
                  Export Data
                </span>
              </button>
              <button 
                onClick={() => {
                  onNavigateToSettings('import');
                  onClose();
                }}
                className="w-full px-4 py-3 rounded-xl bg-[#1a1410] border border-[#2a2016] hover:border-[#c5a059]/40 transition-all flex items-center gap-3 text-left"
              >
                <Upload size={16} className="text-[#c5a059]" />
                <span className="text-[11px] font-black text-[#f5f5dc] uppercase tracking-wide">
                  Import Data
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer - Logout */}
        <div className="bg-[#1a1410] border-t border-[#c5a059]/20 p-6">
          <button 
            onClick={() => {
              if (window.confirm('Are you sure you want to logout?')) {
                onLogout();
                onClose();
              }
            }}
            className="w-full px-4 py-3 rounded-xl bg-[#a65d50]/10 border border-[#a65d50]/30 hover:bg-[#a65d50]/20 hover:border-[#a65d50]/50 transition-all flex items-center justify-center gap-3"
          >
            <LogOut size={16} className="text-[#a65d50]" />
            <span className="text-[11px] font-black text-[#a65d50] uppercase tracking-wide">
              Logout
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
