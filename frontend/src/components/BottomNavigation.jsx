import React from 'react';
import { Home, Briefcase, Code, Mail } from 'lucide-react';

const BottomNavigation = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#1E1E1E] border-t border-[#2E2E2E] z-40 pb-safe">
      <div className="flex items-center justify-around h-16 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center justify-center gap-1 px-3 py-2 transition-all duration-200 min-w-[60px]"
            >
              <div className={`p-1.5 rounded-full transition-all duration-200 ${
                isActive ? 'bg-[#3DDC84]/20' : 'bg-transparent'
              }`}>
                <Icon 
                  size={20} 
                  className={`transition-colors duration-200 ${
                    isActive ? 'text-[#3DDC84]' : 'text-[#B3B3B3]'
                  }`}
                />
              </div>
              <span className={`text-[10px] font-medium transition-colors duration-200 ${
                isActive ? 'text-[#3DDC84]' : 'text-[#B3B3B3]'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
