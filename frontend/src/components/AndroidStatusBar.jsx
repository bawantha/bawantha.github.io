import React from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

const AndroidStatusBar = () => {
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-6 bg-black text-white z-50 flex items-center justify-between px-4 text-xs">
      <div className="flex items-center gap-1">
        <span className="font-medium">{currentTime}</span>
      </div>
      <div className="flex items-center gap-2">
        <Signal size={14} />
        <Wifi size={14} />
        <Battery size={14} />
      </div>
    </div>
  );
};

export default AndroidStatusBar;
