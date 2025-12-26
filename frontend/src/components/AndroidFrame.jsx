import React from 'react';

const AndroidFrame = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-black flex items-center justify-center p-4 md:p-8">
      {/* Phone Frame Container */}
      <div className="relative">
        {/* Phone Device Frame */}
        <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl" style={{
          width: '375px',
          height: '812px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 0 0 2px rgba(255, 255, 255, 0.05)'
        }}>
          {/* Inner Screen Bezel */}
          <div className="relative bg-black rounded-[2.5rem] overflow-hidden h-full" style={{
            boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.8)'
          }}>
            {/* Camera Punch Hole */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-50">
              <div className="w-3 h-3 bg-slate-900 rounded-full border border-slate-800" style={{
                boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.8)'
              }} />
            </div>
            
            {/* Screen Content - Pure Mobile App View */}
            <div className="absolute inset-0 bg-[#121212] overflow-y-auto overflow-x-hidden" style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              width: '375px',
              height: '812px'
            }}>
              <style>
                {`
                  .android-screen-content::-webkit-scrollbar {
                    display: none;
                  }
                `}
              </style>
              <div className="android-screen-content w-full h-full">
                {children}
              </div>
            </div>
          </div>
          
          {/* Power Button */}
          <div className="absolute right-0 top-32 w-1 h-16 bg-slate-700 rounded-l-sm" style={{
            boxShadow: 'inset 1px 0 2px rgba(0, 0, 0, 0.5)'
          }} />
          
          {/* Volume Buttons */}
          <div className="absolute right-0 top-48 space-y-3">
            <div className="w-1 h-12 bg-slate-700 rounded-l-sm" style={{
              boxShadow: 'inset 1px 0 2px rgba(0, 0, 0, 0.5)'
            }} />
            <div className="w-1 h-12 bg-slate-700 rounded-l-sm" style={{
              boxShadow: 'inset 1px 0 2px rgba(0, 0, 0, 0.5)'
            }} />
          </div>
        </div>
        
        {/* Reflection Effect */}
        <div className="absolute inset-0 rounded-[3rem] pointer-events-none" style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 50%)'
        }} />
      </div>
    </div>
  );
};

export default AndroidFrame;