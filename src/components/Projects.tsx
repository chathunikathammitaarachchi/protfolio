import { Github, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Auditorium Booking System',
      description: 'A comprehensive system for managing auditorium bookings, event scheduling, and seat reservations with real-time availability.',
      language: 'JavaScript',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: 'https://github.com/chathunikathammitaarachchi/Auditorium-Booking-System',
      category: 'Management System',
    },
    {
      title: 'Saloon Management System',
      description: 'A comprehensive salon management system with appointment scheduling, customer management, and service tracking.',
      language: 'JavaScript',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: 'https://github.com/chathunikathammitaarachchi/saloon-project',
      category: 'Web Application',
    },
    {
      title: 'Coffee Shop Management',
      description: 'Modern coffee shop management system with inventory tracking, order management, and customer analytics.',
      language: 'TypeScript',
      technologies: ['React', 'TypeScript', 'Express'],
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: 'https://github.com/chathunikathammitaarachchi/CoffeeShop',
      category: 'Business Solution',
    },
    {
      title: 'Outing Aura',
      description: 'Comprehensive day trip booking platform with location management and customer experience optimization.',
      language: 'JavaScript',
      technologies: ['React', 'Node.js', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: 'https://github.com/chathunikathammitaarachchi/Outing-Aura',
      category: 'Travel Platform',
    },
    {
      title: 'Plant Showcase Platform',
      description: 'Beautiful plant showcase and management platform with interactive galleries and care guides.',
      language: 'CSS',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: 'https://github.com/chathunikathammitaarachchi/palnt-of-flowers',
      category: 'Frontend Design',
    },
    {
      title: 'Day Tripper',
      description: 'Advanced day outing booking system with real-time availability and integrated payment processing.',
      language: 'JavaScript',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: 'https://github.com/chathunikathammitaarachchi/DAY_TRIPPER',
      category: 'Booking System',
    },
    {
      title: 'Model Banking System',
      description: 'Professional banking management system with account handling, transaction processing, and security features.',
      language: 'JavaScript',
      technologies: ['React', 'Express', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: 'https://github.com/chathunikathammitaarachchi/ModelBank',
      category: 'Financial System',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#0B1121] relative overflow-hidden">
      {/* Professional Dark Background Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-purple-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-indigo-900/10 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-tl from-blue-900/10 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">My Projects</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
             A showcase of my recent work in software engineering. View more on <a href="https://www.behance.net/chathunika2001" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">Behance</a>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-slate-800/50 rounded-3xl flex flex-col h-full border border-slate-700/50 shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden backdrop-blur-sm">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
               
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden rounded-t-3xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1121] to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-900/80 backdrop-blur-md rounded-full text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-all shadow-md border border-slate-700"
                    title="View Code"
                  >
                    <Github size={18} />
                  </a>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-md rounded-full text-xs font-medium text-cyan-400 border border-cyan-500/30">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-4 flex-grow leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-slate-900/50 text-slate-400 rounded-lg text-xs font-medium border border-slate-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm font-medium text-slate-500 pt-4 border-t border-slate-700/50">
                  <div className="flex items-center">
                    <Code size={16} className="mr-2 text-cyan-500" />
                    <span className="text-slate-400">{project.language}</span>
                  </div>
                  <span className="text-cyan-400 font-semibold group-hover:underline cursor-pointer">View Details →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <a href="https://github.com/chathunikathammitaarachchi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-slate-700 shadow-lg text-base font-medium rounded-xl text-slate-300 bg-slate-800/50 hover:bg-slate-800 hover:text-cyan-400 hover:border-cyan-500/50 transition-all backdrop-blur-sm">
                <Github className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
                View more on GitHub
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
