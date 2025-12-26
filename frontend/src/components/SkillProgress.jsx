import React, { useState, useEffect, useRef } from 'react';
import { Progress } from './ui/progress';

const SkillProgress = ({ skill, delay = 0 }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, delay]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div 
            className="w-3 h-3 rounded-full" 
            style={{ backgroundColor: skill.color }}
          />
          <span className="text-sm font-medium text-white">{skill.name}</span>
        </div>
        <span className="text-xs text-[#B3B3B3] font-mono">{progress}%</span>
      </div>
      <Progress 
        value={progress} 
        className="h-2 bg-[#2E2E2E]"
        style={{
          '--progress-color': skill.color
        }}
      />
    </div>
  );
};

export default SkillProgress;
