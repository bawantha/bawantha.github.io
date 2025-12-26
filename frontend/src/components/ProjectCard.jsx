import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <Card className="bg-[#1E1E1E] border-[#2E2E2E] overflow-hidden hover:border-[#3DDC84]/50 transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {project.featured && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-[#3DDC84] text-black border-none font-medium">
              Featured
            </Badge>
          </div>
        )}
      </div>
      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#3DDC84] transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-[#B3B3B3] line-clamp-2">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-xs border-[#3DDC84]/30 text-[#3DDC84] bg-[#3DDC84]/5"
            >
              {tech}
            </Badge>
          ))}
          {project.tech.length > 3 && (
            <Badge 
              variant="outline" 
              className="text-xs border-[#3DDC84]/30 text-[#3DDC84] bg-[#3DDC84]/5"
            >
              +{project.tech.length - 3}
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-3 pt-2">
          <a 
            href={project.link}
            className="flex items-center gap-1 text-xs text-[#3DDC84] hover:underline"
          >
            <ExternalLink size={14} />
            View Demo
          </a>
          <a 
            href={project.github}
            className="flex items-center gap-1 text-xs text-[#B3B3B3] hover:text-white transition-colors"
          >
            <Github size={14} />
            Code
          </a>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
