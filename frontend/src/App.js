import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AndroidFrame from "./components/AndroidFrame";
import AndroidStatusBar from "./components/AndroidStatusBar";
import BottomNavigation from "./components/BottomNavigation";
import SkillProgress from "./components/SkillProgress";
import ProjectCard from "./components/ProjectCard";
import { Card } from "./components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Badge } from "./components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { MapPin, Mail, Github, Linkedin, Send, Download, Smartphone } from "lucide-react";
import { profileData, skills, projects, testimonials } from "./mock";
import { useToast } from "./hooks/use-toast";
import { Toaster } from "./components/ui/toaster";

const Home = () => {
  const [activeScreen, setActiveScreen] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const handleNavigate = (screenId) => {
    setActiveScreen(screenId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const featuredProjects = projects.filter(p => p.featured);

  // Home Screen
  const HomeScreen = () => (
    <div className="flex flex-col items-center justify-center h-full px-4 py-6">
      <Avatar className="w-28 h-28 border-4 border-[#3DDC84] elevation-2 mb-4">
        <AvatarImage src={profileData.avatar} alt={profileData.name} />
        <AvatarFallback className="bg-[#1E1E1E] text-[#3DDC84] text-2xl">
          {profileData.name.split(' ').map(n => n[0]).join('')}
        </AvatarFallback>
      </Avatar>
      
      <h1 className="text-2xl font-bold text-white mb-1">{profileData.name}</h1>
      <div className="flex items-center gap-2 mb-1">
        <Smartphone size={16} className="text-[#3DDC84]" />
        <p className="text-base text-[#3DDC84] font-medium">{profileData.title}</p>
      </div>
      <div className="flex items-center gap-1 text-[#B3B3B3] mb-4">
        <MapPin size={12} />
        <span className="text-xs">{profileData.location}</span>
      </div>

      <Card className="bg-[#1E1E1E] border-[#2E2E2E] p-4 mb-4 w-full max-w-sm">
        <p className="text-[#B3B3B3] leading-relaxed text-sm text-center">
          {profileData.bio}
        </p>
      </Card>

      <div className="flex gap-3 mb-4">
        <Button 
          className="bg-[#3DDC84] text-black hover:bg-[#2ECC74] font-medium elevation-1"
          onClick={() => handleNavigate('contact')}
        >
          <Mail size={14} className="mr-1" />
          Contact
        </Button>
        <Button 
          variant="outline" 
          className="border-[#3DDC84] text-[#3DDC84] hover:bg-[#3DDC84]/10 elevation-1"
        >
          <Download size={14} className="mr-1" />
          Resume
        </Button>
      </div>

      <div className="flex gap-4">
        <a 
          href={profileData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B3B3B3] hover:text-[#3DDC84] transition-colors"
        >
          <Github size={22} />
        </a>
        <a 
          href={profileData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B3B3B3] hover:text-[#3DDC84] transition-colors"
        >
          <Linkedin size={22} />
        </a>
        <a 
          href={`mailto:${profileData.email}`}
          className="text-[#B3B3B3] hover:text-[#3DDC84] transition-colors"
        >
          <Mail size={22} />
        </a>
      </div>
    </div>
  );

  // Projects Screen
  const ProjectsScreen = () => (
    <div className="h-full flex flex-col px-4 py-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-6 bg-[#3DDC84] rounded-full"></div>
        <h2 className="text-xl font-bold text-white">Featured Projects</h2>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {featuredProjects.map((project) => (
          <Card key={project.id} className="bg-[#1E1E1E] border-[#2E2E2E] overflow-hidden hover:border-[#3DDC84]/50 transition-all duration-300">
            <div className="relative overflow-hidden h-32">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {project.featured && (
                <div className="absolute top-2 right-2">
                  <Badge className="bg-[#3DDC84] text-black border-none font-medium text-xs">
                    Featured
                  </Badge>
                </div>
              )}
            </div>
            <div className="p-3 space-y-2">
              <h3 className="text-base font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-xs text-[#B3B3B3] line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 3).map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-[10px] border-[#3DDC84]/30 text-[#3DDC84] bg-[#3DDC84]/5 px-2 py-0.5"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  // Skills Screen
  const SkillsScreen = () => (
    <div className="h-full flex flex-col px-4 py-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-6 bg-[#3DDC84] rounded-full"></div>
        <h2 className="text-xl font-bold text-white">Skills & Expertise</h2>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {skills.map((category, idx) => (
          <Card key={idx} className="bg-[#1E1E1E] border-[#2E2E2E] p-4 elevation-1">
            <h3 className="text-base font-semibold text-white mb-3">{category.category}</h3>
            <div className="space-y-3">
              {category.items.map((skill, skillIdx) => (
                <SkillProgress 
                  key={skillIdx} 
                  skill={skill} 
                  delay={skillIdx * 100}
                />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  // Contact Screen
  const ContactScreen = () => (
    <div className="h-full flex flex-col px-4 py-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-6 bg-[#3DDC84] rounded-full"></div>
        <h2 className="text-xl font-bold text-white">Get In Touch</h2>
      </div>

      <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <Card className="bg-[#1E1E1E] border-[#2E2E2E] p-4 elevation-1">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="text-xs text-[#B3B3B3] mb-1.5 block">Name</label>
              <Input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-[#2E2E2E] border-[#3E3E3E] text-white placeholder:text-[#666] focus:border-[#3DDC84] text-sm h-9"
                required
              />
            </div>
            <div>
              <label className="text-xs text-[#B3B3B3] mb-1.5 block">Email</label>
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-[#2E2E2E] border-[#3E3E3E] text-white placeholder:text-[#666] focus:border-[#3DDC84] text-sm h-9"
                required
              />
            </div>
            <div>
              <label className="text-xs text-[#B3B3B3] mb-1.5 block">Message</label>
              <Textarea
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-[#2E2E2E] border-[#3E3E3E] text-white placeholder:text-[#666] focus:border-[#3DDC84] min-h-[100px] text-sm"
                required
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-[#3DDC84] text-black hover:bg-[#2ECC74] font-medium elevation-1 h-9"
            >
              <Send size={14} className="mr-2" />
              Send Message
            </Button>
          </form>
        </Card>

        <div className="mt-4 text-center">
          <p className="text-xs text-[#B3B3B3]">
            Or email me at{' '}
            <a href={`mailto:${profileData.email}`} className="text-[#3DDC84] hover:underline">
              {profileData.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#121212] h-full text-white relative flex flex-col">
      <AndroidStatusBar />
      
      {/* Screen Container - No Scroll */}
      <div className="flex-1 overflow-hidden pt-6 pb-16">
        {activeScreen === 'home' && <HomeScreen />}
        {activeScreen === 'projects' && <ProjectsScreen />}
        {activeScreen === 'skills' && <SkillsScreen />}
        {activeScreen === 'contact' && <ContactScreen />}
      </div>

      <BottomNavigation activeSection={activeScreen} onNavigate={handleNavigate} />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <AndroidFrame>
              <Home />
            </AndroidFrame>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
