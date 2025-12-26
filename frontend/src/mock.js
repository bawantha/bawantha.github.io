// Mock data for Android-style portfolio

export const profileData = {
  name: "Alex Morgan",
  title: "Mobile App Developer",
  bio: "Passionate mobile developer specializing in creating beautiful, performant Android and iOS applications. 5+ years of experience building apps that users love.",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  location: "San Francisco, CA",
  email: "alex.morgan@example.com",
  github: "https://github.com/alexmorgan",
  linkedin: "https://linkedin.com/in/alexmorgan"
};

export const skills = [
  {
    category: "Mobile Development",
    items: [
      { name: "React Native", level: 90, color: "#61DAFB" },
      { name: "Flutter", level: 85, color: "#02569B" },
      { name: "Kotlin", level: 80, color: "#7F52FF" },
      { name: "Swift", level: 75, color: "#FA7343" }
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95, color: "#61DAFB" },
      { name: "TypeScript", level: 88, color: "#3178C6" },
      { name: "Tailwind CSS", level: 92, color: "#06B6D4" },
      { name: "Next.js", level: 85, color: "#000000" }
    ]
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Node.js", level: 87, color: "#339933" },
      { name: "FastAPI", level: 82, color: "#009688" },
      { name: "MongoDB", level: 85, color: "#47A248" },
      { name: "PostgreSQL", level: 80, color: "#4169E1" }
    ]
  },
  {
    category: "Tools & Cloud",
    items: [
      { name: "Git", level: 93, color: "#F05032" },
      { name: "Firebase", level: 88, color: "#FFCA28" },
      { name: "AWS", level: 78, color: "#FF9900" },
      { name: "Docker", level: 80, color: "#2496ED" }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "FitTrack Pro",
    description: "A comprehensive fitness tracking app with workout plans, nutrition tracking, and progress analytics. Built with React Native and Firebase.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
    tech: ["React Native", "Firebase", "Redux", "Expo"],
    category: "Mobile App",
    link: "#",
    github: "#",
    featured: true
  },
  {
    id: 2,
    title: "ShopEase",
    description: "Modern e-commerce mobile app with seamless checkout, real-time inventory, and personalized recommendations using ML.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
    tech: ["Flutter", "Node.js", "MongoDB", "Stripe"],
    category: "Mobile App",
    link: "#",
    github: "#",
    featured: true
  },
  {
    id: 3,
    title: "MindfulMoments",
    description: "Meditation and mindfulness app with guided sessions, progress tracking, and daily reminders. Features beautiful animations.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
    tech: ["Swift", "SwiftUI", "CoreData", "HealthKit"],
    category: "Mobile App",
    link: "#",
    github: "#",
    featured: false
  },
  {
    id: 4,
    title: "TaskMaster",
    description: "Productivity app with smart task management, team collaboration, and AI-powered scheduling suggestions.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    tech: ["Kotlin", "Jetpack Compose", "Room", "WorkManager"],
    category: "Mobile App",
    link: "#",
    github: "#",
    featured: false
  },
  {
    id: 5,
    title: "TravelBuddy",
    description: "Travel planning and booking app with offline maps, itinerary management, and local recommendations.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    tech: ["React Native", "GraphQL", "Apollo", "MapBox"],
    category: "Mobile App",
    link: "#",
    github: "#",
    featured: true
  },
  {
    id: 6,
    title: "SocialConnect",
    description: "Social networking app with real-time messaging, stories, and content sharing. Supports dark mode and multiple themes.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    tech: ["Flutter", "WebSockets", "Redis", "AWS S3"],
    category: "Mobile App",
    link: "#",
    github: "#",
    featured: false
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    content: "Alex delivered an exceptional mobile app that exceeded our expectations. The attention to detail and smooth user experience made it a huge success.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO at StartupHub",
    content: "Working with Alex was a pleasure. The app was delivered on time, well-documented, and the code quality was outstanding. Highly recommend!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder of FitLife",
    content: "Alex transformed our vision into a beautiful, functional app. The animations and performance optimizations were top-notch.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
  }
];
