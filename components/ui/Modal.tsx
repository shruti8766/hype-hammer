import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md">
      <div className="bg-[#1a1410] w-full h-full overflow-hidden">
        <div className="px-8 py-6 border-b border-[#3d2f2b] flex items-center justify-between bg-[#211a17]/30">
          <h3 className="text-2xl font-display font-black text-[#f5f5dc] tracking-widest uppercase">{title}</h3>
          <button onClick={onClose} className="p-3 hover:bg-[#3d2f2b] rounded-2xl text-[#b4a697] hover:text-[#f5f5dc] transition-all">
            <X size={24} />
          </button>
        </div>
        <div className="px-8 py-6 h-[calc(100vh-88px)] overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};
