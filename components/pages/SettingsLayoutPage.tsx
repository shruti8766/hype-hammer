import React, { useState } from 'react';
import { 
  ArrowLeft, User, Settings as SettingsIcon, Trophy, Database, 
  Users, Palette, Bell, Shield, HelpCircle, Info, History,
  Save, RotateCcw, Download, Upload, Trash2, CheckCircle2,
  Plus, Eye, EyeOff, Mail, Lock, Camera
} from 'lucide-react';
import { AuctionStatus, AuctionConfig, Player, Team, SportType, AuctionType } from '../../types';

interface SettingsLayoutPageProps {
  config: AuctionConfig;
  setConfig: (config: AuctionConfig) => void;
  players: Player[];
  setPlayers: (players: Player[]) => void;
  teams: Team[];
  setTeams: (teams: Team[]) => void;
  currentUser: {
    name: string;
    email: string;
    avatar?: string;
  };
  setCurrentUser: (user: { name: string; email: string; avatar?: string }) => void;
  setStatus: (status: AuctionStatus) => void;
}

export const SettingsLayoutPage: React.FC<SettingsLayoutPageProps> = ({ 
  config, 
  setConfig, 
  players, 
  setPlayers, 
  teams, 
  setTeams,
  currentUser,
  setCurrentUser,
  setStatus 
}) => {
  const [activeSection, setActiveSection] = useState<string>('general');
  const [localConfig, setLocalConfig] = useState<AuctionConfig>(config);
  const [saveNotification, setSaveNotification] = useState<string | null>(null);

  const handleSave = () => {
    setConfig(localConfig);
    setSaveNotification('Settings saved successfully!');
    setTimeout(() => setSaveNotification(null), 3000);
  };

  const handleReset = () => {
    setLocalConfig(config);
    setSaveNotification('Settings reset to last saved state');
    setTimeout(() => setSaveNotification(null), 3000);
  };

  const handleExportData = () => {
    const exportData = {
      config: localConfig,
      players,
      teams,
      exportDate: new Date().toISOString()
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `hypehammer_settings_${new Date().toISOString()}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    setSaveNotification('Data exported successfully!');
    setTimeout(() => setSaveNotification(null), 3000);
  };

  const handleImportData = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        try {
          const importedData = JSON.parse(event.target.result);
          if (importedData.config) setLocalConfig(importedData.config);
          if (importedData.players) setPlayers(importedData.players);
          if (importedData.teams) setTeams(importedData.teams);
          setSaveNotification('Data imported successfully!');
          setTimeout(() => setSaveNotification(null), 3000);
        } catch (error) {
          setSaveNotification('Error importing data. Please check the file format.');
          setTimeout(() => setSaveNotification(null), 3000);
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  const handleClearAllData = () => {
    if (window.confirm('Are you sure you want to clear all players and teams? This action cannot be undone.')) {
      setPlayers([]);
      setTeams([]);
      setSaveNotification('All data cleared!');
      setTimeout(() => setSaveNotification(null), 3000);
    }
  };

  const addRole = () => {
    const roleName = prompt('Enter new role name:');
    if (roleName && roleName.trim()) {
      setLocalConfig({
        ...localConfig,
        roles: [...localConfig.roles, { id: Math.random().toString(36).substr(2, 9), name: roleName.trim() }]
      });
    }
  };

  const removeRole = (roleId: string) => {
    if (localConfig.roles.length <= 1) {
      alert('Cannot remove the last role. At least one role is required.');
      return;
    }
    setLocalConfig({
      ...localConfig,
      roles: localConfig.roles.filter(r => r.id !== roleId)
    });
  };

  const menuItems = [
    { id: 'profile', icon: <User size={18} />, label: 'Profile' },
    { id: 'general', icon: <SettingsIcon size={18} />, label: 'General' },
    { id: 'match', icon: <Trophy size={18} />, label: 'Match Config' },
    { id: 'data', icon: <Database size={18} />, label: 'Data Management' },
    { id: 'teams', icon: <Users size={18} />, label: 'Teams & Players' },
    { id: 'appearance', icon: <Palette size={18} />, label: 'Appearance' },
    { id: 'notifications', icon: <Bell size={18} />, label: 'Notifications' },
    { id: 'privacy', icon: <Shield size={18} />, label: 'Privacy' },
    { id: 'history', icon: <History size={18} />, label: 'History' },
    { id: 'help', icon: <HelpCircle size={18} />, label: 'Help' },
    { id: 'about', icon: <Info size={18} />, label: 'About' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-display font-black text-[#c5a059] uppercase mb-2">Profile Settings</h2>
              <p className="text-sm text-[#b4a697]">Manage your account information</p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-black uppercase text-[#c5a059] tracking-wider mb-4">Profile Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#c5a059] to-[#d4af6a] flex items-center justify-center overflow-hidden">
                        {currentUser.avatar ? (
                          <img src={currentUser.avatar} alt={currentUser.name} className="w-full h-full object-cover" />
                        ) : (
                          <User size={48} className="text-[#0d0a09]" />
                        )}
                      </div>
                      <button className="absolute bottom-0 right-0 p-2 bg-[#c5a059] rounded-lg hover:bg-[#d4af6a] transition-all">
                        <Camera size={16} className="text-[#0d0a09]" />
                      </button>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-[#b4a697] mb-2">Profile Picture</p>
                      <button className="text-xs font-black uppercase text-[#c5a059] hover:text-[#d4af6a] transition-colors">
                        Change Avatar
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-[#c5a059] tracking-wider">Full Name</label>
                    <input 
                      type="text"
                      className="w-full bg-[#1a1410] border border-[#3d2f2b] rounded-2xl px-5 py-4 text-[#f5f5dc] outline-none focus:ring-1 ring-[#c5a059]"
                      value={currentUser.name}
                      onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-[#c5a059] tracking-wider">Email Address</label>
                    <input 
                      type="email"
                      className="w-full bg-[#1a1410] border border-[#3d2f2b] rounded-2xl px-5 py-4 text-[#f5f5dc] outline-none focus:ring-1 ring-[#c5a059]"
                      value={currentUser.email}
                      onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
                    />
                  </div>

                  <button 
                    onClick={() => {
                      setSaveNotification('Profile updated successfully!');
                      setTimeout(() => setSaveNotification(null), 3000);
                    }}
                    className="px-6 py-3 gold-gradient rounded-xl text-[#0d0a09] font-black uppercase text-xs tracking-wider hover:brightness-110 transition-all"
                  >
                    Update Profile
                  </button>
                </div>
              </div>

              <div className="border-t border-[#3d2f2b] pt-8">
                <h3 className="text-sm font-black uppercase text-[#c5a059] tracking-wider mb-4">Security</h3>
                <div className="space-y-3">
                  <button className="w-full px-5 py-4 bg-[#1a1410] border border-[#3d2f2b] rounded-2xl hover:border-[#c5a059]/40 transition-all flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <Lock size={18} className="text-[#c5a059]" />
                      <span className="text-sm font-bold text-[#f5f5dc]">Change Password</span>
                    </div>
                    <ArrowLeft size={16} className="text-[#b4a697] rotate-180 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full px-5 py-4 bg-[#1a1410] border border-[#3d2f2b] rounded-2xl hover:border-[#c5a059]/40 transition-all flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <Shield size={18} className="text-[#c5a059]" />
                      <span className="text-sm font-bold text-[#f5f5dc]">Two-Factor Authentication</span>
                    </div>
                    <ArrowLeft size={16} className="text-[#b4a697] rotate-180 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'general':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-display font-black text-[#c5a059] uppercase mb-2">General Settings</h2>
              <p className="text-sm text-[#b4a697]">Basic configuration and preferences</p>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase text-[#c5a059] tracking-wider mb-4">Basic Configuration</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-[#c5a059] tracking-wider">Sport Type</label>
                  <select 
                    className="w-full bg-[#1a1410] border border-[#3d2f2b] rounded-2xl px-5 py-4 text-[#f5f5dc] outline-none focus:ring-1 ring-[#c5a059]"
                    value={localConfig.sport}
                    onChange={(e) => setLocalConfig({...localConfig, sport: e.target.value as SportType})}
                  >
                    {Object.values(SportType).map(sport => (
                      <option key={sport} value={sport}>{sport}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-[#c5a059] tracking-wider">Auction Type</label>
                  <select 
                    className="w-full bg-[#1a1410] border border-[#3d2f2b] rounded-2xl px-5 py-4 text-[#f5f5dc] outline-none focus:ring-1 ring-[#c5a059]"
                    value={localConfig.type}
                    onChange={(e) => setLocalConfig({...localConfig, type: e.target.value as AuctionType})}
                  >
                    {Object.values(AuctionType).map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        );

      case 'match':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-display font-black text-[#c5a059] uppercase mb-2">Match Configuration</h2>
              <p className="text-sm text-[#b4a697]">Configure sport settings, budget, and roles</p>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-black uppercase text-[#c5a059] tracking-wider mb-4">Budget Settings</h3>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-[#c5a059] tracking-wider">Total Budget per Team</label>
                    <input 
                      type="number"
                      className="w-full bg-[#1a1410] border border-[#3d2f2b] rounded-2xl px-5 py-4 text-[#f5f5dc] outline-none focus:ring-1 ring-[#c5a059]"
                      value={localConfig.totalBudget}
                      onChange={(e) => setLocalConfig({...localConfig, totalBudget: Number(e.target.value)})}
                    />
                    <p className="text-[9px] text-[#b4a697]">${localConfig.totalBudget.toLocaleString()}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-black uppercase text-[#c5a059] tracking-wider mb-4">Squad Size</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-[#c5a059] tracking-wider">Minimum</label>
                      <input 
                        type="number"
                        className="w-full bg-[#1a1410] border border-[#3d2f2b] rounded-2xl px-5 py-4 text-[#f5f5dc] outline-none focus:ring-1 ring-[#c5a059]"
                        value={localConfig.squadSize.min}
                        onChange={(e) => setLocalConfig({...localConfig, squadSize: {...localConfig.squadSize, min: Number(e.target.value)}})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-[#c5a059] tracking-wider">Maximum</label>
                      <input 
                        type="number"
                        className="w-full bg-[#1a1410] border border-[#3d2f2b] rounded-2xl px-5 py-4 text-[#f5f5dc] outline-none focus:ring-1 ring-[#c5a059]"
                        value={localConfig.squadSize.max}
                        onChange={(e) => setLocalConfig({...localConfig, squadSize: {...localConfig.squadSize, max: Number(e.target.value)}})}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#3d2f2b] pt-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-black uppercase text-[#c5a059] tracking-wider">Player Roles</h3>
                  <button 
                    onClick={addRole}
                    className="px-4 py-2 bg-[#c5a059] text-[#0d0a09] rounded-lg font-bold text-xs uppercase hover:bg-[#d4af6a] transition-all flex items-center gap-2"
                  >
                    <Plus size={14} />
                    Add Role
                  </button>
                </div>
                <div className="space-y-2">
                  {localConfig.roles.map(role => (
                    <div key={role.id} className="flex items-center justify-between bg-[#1a1410] border border-[#3d2f2b] rounded-xl px-5 py-3 group hover:border-[#c5a059]/40 transition-all">
                      <span className="text-[#f5f5dc] font-bold">{role.name}</span>
                      <button 
                        onClick={() => removeRole(role.id)}
                        className="opacity-0 group-hover:opacity-100 p-2 text-[#a65d50] hover:bg-[#a65d50]/10 rounded-lg transition-all"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'data':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-display font-black text-[#c5a059] uppercase mb-2">Data Management</h2>
              <p className="text-sm text-[#b4a697]">Import, export, and manage your auction data</p>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase text-[#c5a059] tracking-wider mb-4">Data Operations</h3>
              <div className="space-y-3">
                <button 
                  onClick={handleExportData}
                  className="w-full px-6 py-4 bg-[#1a1410] border border-[#c5a059]/30 rounded-2xl hover:bg-[#c5a059]/5 hover:border-[#c5a059]/50 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Download size={20} className="text-[#c5a059]" />
                    <div className="text-left">
                      <p className="text-sm font-black text-[#f5f5dc] uppercase">Export Data</p>
                      <p className="text-xs text-[#b4a697]">Download all settings and data as JSON</p>
                    </div>
                  </div>
                  <ArrowLeft size={16} className="text-[#c5a059] rotate-180 group-hover:translate-x-1 transition-transform" />
                </button>

                <button 
                  onClick={handleImportData}
                  className="w-full px-6 py-4 bg-[#1a1410] border border-[#c5a059]/30 rounded-2xl hover:bg-[#c5a059]/5 hover:border-[#c5a059]/50 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Upload size={20} className="text-[#c5a059]" />
                    <div className="text-left">
                      <p className="text-sm font-black text-[#f5f5dc] uppercase">Import Data</p>
                      <p className="text-xs text-[#b4a697]">Load settings and data from JSON file</p>
                    </div>
                  </div>
                  <ArrowLeft size={16} className="text-[#c5a059] rotate-180 group-hover:translate-x-1 transition-transform" />
                </button>

                <button 
                  onClick={handleClearAllData}
                  className="w-full px-6 py-4 bg-[#a65d50]/10 border border-[#a65d50]/30 rounded-2xl hover:bg-[#a65d50]/20 hover:border-[#a65d50]/50 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Trash2 size={20} className="text-[#a65d50]" />
                    <div className="text-left">
                      <p className="text-sm font-black text-[#a65d50] uppercase">Clear All Data</p>
                      <p className="text-xs text-[#b4a697]">Remove all players and teams (irreversible)</p>
                    </div>
                  </div>
                  <ArrowLeft size={16} className="text-[#a65d50] rotate-180 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="border-t border-[#3d2f2b] pt-8">
              <h3 className="text-sm font-black uppercase text-[#c5a059] tracking-wider mb-4">Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1a1410] border border-[#3d2f2b] rounded-2xl p-5">
                  <p className="text-[9px] font-black uppercase text-[#b4a697] mb-2">Total Players</p>
                  <p className="text-3xl font-display font-black text-[#f5f5dc]">{players.length}</p>
                </div>
                <div className="bg-[#1a1410] border border-[#3d2f2b] rounded-2xl p-5">
                  <p className="text-[9px] font-black uppercase text-[#b4a697] mb-2">Total Teams</p>
                  <p className="text-3xl font-display font-black text-[#f5f5dc]">{teams.length}</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'appearance':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-display font-black text-[#c5a059] uppercase mb-2">Appearance</h2>
              <p className="text-sm text-[#b4a697]">Customize the look and feel</p>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase text-[#c5a059] tracking-wider mb-4">Theme</h3>
              <p className="text-xs text-[#b4a697]">Theme customization coming soon...</p>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-display font-black text-[#c5a059] uppercase mb-2">About HypeHammer</h2>
              <p className="text-sm text-[#b4a697]">Version and information</p>
            </div>

            <div>
              <div className="text-center py-8">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden border-2 border-[#c5a059]">
                  <img src="./logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-3xl font-display font-black text-[#c5a059] uppercase mb-3">HypeHammer</h3>
                <p className="text-base text-[#b4a697] mb-2">Universal Sports Auction Platform</p>
                <p className="text-sm text-[#5c4742]">Version 1.0.0</p>
              </div>
              <div className="border-t border-[#3d2f2b] pt-8">
                <p className="text-sm text-[#b4a697] leading-relaxed">
                  A sport-agnostic auction management system for professional leagues, local tournaments, and esports drafts.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-display font-black text-[#c5a059] uppercase mb-2">{activeSection}</h2>
              <p className="text-sm text-[#b4a697]">Content coming soon...</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0a09] flex relative">
      {/* Notification */}
      {saveNotification && (
        <div className="fixed top-8 right-8 z-[200] bg-[#c5a059] text-[#0d0a09] px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-5">
          <CheckCircle2 size={20} />
          <span className="font-black text-sm uppercase tracking-wider">{saveNotification}</span>
        </div>
      )}

      {/* Sidebar */}
      <div className="w-72 bg-[#1a1410] border-r border-[#c5a059]/20 flex flex-col overflow-y-auto custom-scrollbar">
        {/* Header */}
        <div className="p-6 border-b border-[#c5a059]/20">
          <button 
            onClick={() => setStatus(AuctionStatus.READY)}
            className="flex items-center gap-3 text-[#c5a059] hover:text-[#d4af6a] transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            <span className="text-xs font-black uppercase tracking-wider">Back to Dashboard</span>
          </button>
          <h1 className="text-2xl font-display font-black text-[#c5a059] uppercase tracking-wider">Settings</h1>
        </div>

        {/* Menu */}
        <div className="p-4 flex-1">
          <nav className="space-y-1">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeSection === item.id
                    ? 'bg-[#c5a059]/20 border border-[#c5a059]/40 text-[#c5a059]'
                    : 'text-[#b4a697] hover:bg-[#c5a059]/5 hover:text-[#f5f5dc]'
                }`}
              >
                {item.icon}
                <span className="text-sm font-bold">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-[#c5a059]/20 space-y-2">
          <button 
            onClick={handleReset}
            className="w-full px-4 py-3 bg-[#3d2f2b] border border-[#c5a059]/20 rounded-xl text-[#c5a059] hover:bg-[#c5a059]/10 transition-all text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <RotateCcw size={14} />
            Reset
          </button>
          <button 
            onClick={handleSave}
            className="w-full px-4 py-3 gold-gradient rounded-xl text-[#0d0a09] hover:brightness-110 transition-all text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
          >
            <Save size={14} />
            Save Changes
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="max-w-5xl mx-auto p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};
