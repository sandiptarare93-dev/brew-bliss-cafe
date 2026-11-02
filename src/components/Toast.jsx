import React from 'react';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-sm w-full bg-[#2C170A] text-white p-3.5 rounded-2xl shadow-2xl border border-[#D4A373]/40 flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-[#7B4420] text-[#D4A373] flex items-center justify-center shrink-0">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <p className="text-xs font-bold text-white">{toast.title}</p>
          <p className="text-[11px] text-[#D7BEA8]">{toast.message}</p>
        </div>
      </div>

      <button
        onClick={onClose}
        className="p-1 text-[#D7BEA8] hover:text-white rounded-lg transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
