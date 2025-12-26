import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();
  
  const sectionsRef = {
    home: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    contact: useRef(null)
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionsRef).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionsRef).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const handleNavigate = (sectionId) => {
    sectionsRef[sectionId]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const featuredProjects = projects.filter(p => p.featured);
  const allProjects = projects;

  return (
    <div className="bg-[#121212] min-h-screen text-white pb-20">
      <AndroidStatusBar />
      
      {/* Hero Section */}
      <section id="home" ref={sectionsRef.home} className="pt-12 px-4 min-h-[calc(100vh-5rem)]">
        <div className="max-w-md mx-auto">
          <div className="flex flex-col items-center text-center space-y-6 py-8 animate-fade-in-up">
            <Avatar className="w-32 h-32 border-4 border-[#3DDC84] elevation-2">
              <AvatarImage src={profileData.avatar} alt={profileData.name} />
              <AvatarFallback className="bg-[#1E1E1E] text-[#3DDC84] text-2xl">
                {profileData.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-white">{profileData.name}</h1>
              <div className="flex items-center justify-center gap-2">
                <Smartphone size={18} className="text-[#3DDC84]" />
                <p className="text-lg text-[#3DDC84] font-medium">{profileData.title}</p>
              </div>
              <div className="flex items-center justify-center gap-1 text-[#B3B3B3]">
                <MapPin size={14} />
                <span className="text-sm">{profileData.location}</span>
              </div>
            </div>

            <Card className="bg-[#1E1E1E] border-[#2E2E2E] p-5 elevation-1">
              <p className="text-[#B3B3B3] leading-relaxed text-sm">
                {profileData.bio}
              </p>
            </Card>

            <div className="flex gap-3 pt-2">
              <Button 
                className="bg-[#3DDC84] text-black hover:bg-[#2ECC74] font-medium elevation-1 ripple-effect"
                onClick={() => handleNavigate('contact')}
              >
                <Mail size={16} className="mr-2" />
                Contact Me
              </Button>
              <Button 
                variant="outline" 
                className="border-[#3DDC84] text-[#3DDC84] hover:bg-[#3DDC84]/10 elevation-1"
              >
                <Download size={16} className="mr-2" />
                Resume
              </Button>
            </div>

            <div className="flex gap-4 pt-2">
              <a 
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B3B3B3] hover:text-[#3DDC84] transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B3B3B3] hover:text-[#3DDC84] transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={`mailto:${profileData.email}`}
                className="text-[#B3B3B3] hover:text-[#3DDC84] transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={sectionsRef.projects} className="px-4 py-12 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[#3DDC84] rounded-full"></div>
            <h2 className="text-2xl font-bold text-white">Projects</h2>
          </div>

          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="bg-[#1E1E1E] border border-[#2E2E2E] mb-6 w-full grid grid-cols-2">
              <TabsTrigger 
                value="featured"
                className="data-[state=active]:bg-[#3DDC84] data-[state=active]:text-black"
              >
                Featured
              </TabsTrigger>
              <TabsTrigger 
                value="all"
                className="data-[state=active]:bg-[#3DDC84] data-[state=active]:text-black"
              >
                All Projects
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="featured" className="space-y-4">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </TabsContent>
            
            <TabsContent value="all" className="space-y-4">
              {allProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={sectionsRef.skills} className="px-4 py-12 min-h-screen">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[#3DDC84] rounded-full"></div>
            <h2 className="text-2xl font-bold text-white">Skills & Expertise</h2>
          </div>

          <div className="space-y-6">
            {skills.map((category, idx) => (
              <Card key={idx} className="bg-[#1E1E1E] border-[#2E2E2E] p-5 elevation-1">
                <h3 className="text-lg font-semibold text-white mb-4">{category.category}</h3>
                <div className="space-y-4">
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

          {/* Testimonials */}
          <div className="mt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-[#3DDC84] rounded-full"></div>
              <h2 className="text-2xl font-bold text-white">Testimonials</h2>
            </div>
            <div className="space-y-4">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="bg-[#1E1E1E] border-[#2E2E2E] p-5 elevation-1">
                  <div className="flex items-start gap-3 mb-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-[#2E2E2E] text-[#3DDC84]">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                      <p className="text-xs text-[#B3B3B3]">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#B3B3B3] leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={sectionsRef.contact} className="px-4 py-12 min-h-screen">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[#3DDC84] rounded-full"></div>
            <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
          </div>

          <Card className="bg-[#1E1E1E] border-[#2E2E2E] p-6 elevation-1">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-[#B3B3B3] mb-2 block">Name</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[#2E2E2E] border-[#3E3E3E] text-white placeholder:text-[#666] focus:border-[#3DDC84]"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-[#B3B3B3] mb-2 block">Email</label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#2E2E2E] border-[#3E3E3E] text-white placeholder:text-[#666] focus:border-[#3DDC84]"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-[#B3B3B3] mb-2 block">Message</label>
                <Textarea
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-[#2E2E2E] border-[#3E3E3E] text-white placeholder:text-[#666] focus:border-[#3DDC84] min-h-[120px]"
                  required
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-[#3DDC84] text-black hover:bg-[#2ECC74] font-medium elevation-1 ripple-effect"
              >
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          <div className="mt-6 text-center">
            <p className="text-sm text-[#B3B3B3]">
              Or email me directly at{' '}
              <a href={`mailto:${profileData.email}`} className="text-[#3DDC84] hover:underline">
                {profileData.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      <BottomNavigation activeSection={activeSection} onNavigate={handleNavigate} />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
