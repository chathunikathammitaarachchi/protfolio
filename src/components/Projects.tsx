import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Code, ExternalLink, BookOpen, Layers, X, CheckCircle2, AlertTriangle, Cpu, Trophy, UserCheck, Wrench } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  language: string;
  technologies: string[];
  image: string;
  repoLink: string;
  liveDemoLink: string;
  category: string;
  problem: string;
  techChoice: string;
  challenge: string;
  solution: string;
  outcome: string;
  leadership: string;
  deliveryTools?: string[];
  isResearch?: boolean;
};

const Projects = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const projects: Project[] = [
    {
      title: 'MindTrack: BehaviourNet Mobile App',
      description: 'Developing an individual research-based mobile application to passively sense user behavior (screen time, sleep, and mobility) and assess psychological well-being. Integrated pre-trained machine learning models with a Flask cloud backend (PythonAnywhere) to process behavioral features and generate real-time risk predictions.',
      language: 'Python & React Native',
      technologies: ['React Native', 'Python', 'Flask', 'Machine Learning', 'Scikit-Learn', 'REST APIs'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      repoLink: 'https://github.com/chathunikathammitaarachchi/MindTrack',
      liveDemoLink: '',
      category: 'Ongoing Individual Research Project',
      problem: 'Passive sensing of user behavioral features (screen time, mobility, sleep patterns) to detect early psychological risk indicators in real time.',
      techChoice: 'React Native for cross-platform mobile UI, Flask hosted on PythonAnywhere for ML REST endpoints, and Scikit-Learn for model inference.',
      challenge: 'Connecting mobile sensors and engineered REST APIs linking React Native to Flask cloud server while maintaining model prediction speed.',
      solution: 'Integrated pre-trained machine learning models to process behavioral features and generate real-time psychological risk predictions and confidence scores.',
      outcome: 'Successfully validated ML prediction pipeline with real-time risk scoring and passive sensing data capture.',
      leadership: 'Lead Researcher & Developer - Developed individual research project, engineered Flask cloud APIs, and integrated ML models.',
      deliveryTools: ['GitHub', 'PythonAnywhere', 'Visual Studio'],
      isResearch: true,
    },
    {
      title: 'Outing Aura Booking System',
      description: 'Designed and developed a comprehensive system for booking and managing day trips and excursions, aimed at simplifying the process for users and administrators. Acted as Team Lead, managing task delegation, project timelines using Jira/Trello, and ensuring smooth integration between the React frontend and Spring Boot backend.',
      language: 'React & Java',
      technologies: ['React Vite', 'Spring Boot', 'MongoDB', 'REST APIs', 'CSS'],
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
      repoLink: 'https://github.com/chathunikathammitaarachchi/Outing-Aura',
      liveDemoLink: '',
      category: '3rd Year Group Project - Team Lead',
      problem: 'Excursion operators faced fragmented booking workflows, slot overbooking, and lack of real-time confirmation for travellers.',
      techChoice: 'React Vite for dynamic frontend responsiveness paired with Spring Boot REST services and MongoDB for scalable document queries.',
      challenge: 'Managing team task delegation and keeping asynchronous Spring Boot backend APIs synced with React frontend state during sprints.',
      solution: 'Organized sprint timelines using Jira and Trello, defined strict JSON payload DTOs, and implemented real-time slot tracking.',
      outcome: 'Streamlined excursion reservation lifecycle with instant booking confirmations and robust admin schedule management.',
      leadership: 'Team Lead - Managed task delegation, project timelines using Jira/Trello, and ensured smooth integration between React frontend and Spring Boot backend.',
      deliveryTools: ['GitHub', 'Jira', 'Trello', 'Visual Studio'],
    },
    {
      title: 'Auditorium Management System',
      description: 'Web-based reservation and event scheduling management system designed for venue availability and booking workflows. Acted as Team Lead, organizing daily stand-ups and ensuring all project milestones were met on time.',
      language: 'JavaScript & React',
      technologies: ['React Vite', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
      repoLink: 'https://github.com/chathunikathammitaarachchi/auditorium',
      liveDemoLink: '',
      category: '2nd Year Group Project - Team Lead',
      problem: 'Manual auditorium reservation caused overlapping event schedules and delayed booking approvals.',
      techChoice: 'Node.js/Express.js backend with MongoDB provided high throughput for event calendar queries and reservation states.',
      challenge: 'Preventing double-booking of auditorium time slots when concurrent requests were made.',
      solution: 'Built server-side time slot validation and concurrency checks in Express before committing bookings to MongoDB.',
      outcome: 'Achieved zero double-booking occurrences and provided a clean calendar interface for venue managers.',
      leadership: 'Team Lead - Organized daily stand-ups, ensured milestones were met on time, and mentored teammates on React & Express APIs.',
      deliveryTools: ['GitHub', 'Jira', 'Trello'],
    },
    {
      title: 'POS System for Retail Store',
      description: 'Developed a Point-of-Sale system during professional internship for billing, inventory handling, and sales tracking. Implemented product management, transaction recording, and optimized database structures for sales and stock management.',
      language: 'PHP & JavaScript',
      technologies: ['React', 'Laravel', 'PHP', 'MySQL', 'REST APIs'],
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80',
      repoLink: '',
      liveDemoLink: '',
      category: 'Internship Project',
      problem: 'Retail store operators struggled with manual cashier calculations, stock discrepancies, and slow sales reporting.',
      techChoice: 'Laravel REST API framework combined with React frontend allowed rapid transactional processing and relational data safety.',
      challenge: 'Ensuring real-time stock deduction immediately upon checkout completion.',
      solution: 'Wrapped checkout billing actions in atomic database transactions to guarantee stock consistency.',
      outcome: 'Boosted daily transaction throughput and improved inventory balance reporting accuracy.',
      leadership: 'Software Engineering Intern @ Unitec Software Solutions, Gampaha - Implemented product management, transaction recording, and database structures.',
      deliveryTools: ['GitHub', 'Visual Studio'],
    },
    {
      title: 'Coffee Shop Management System',
      description: 'Built a full-stack web application for handling products, customer orders, and sales records independently. Developed RESTful APIs for order processing and backend business logic while designing MongoDB schemas for efficient data storage and retrieval.',
      language: 'TypeScript & Next.js',
      technologies: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80',
      repoLink: 'https://github.com/chathunikathammitaarachchi/CoffeeShop',
      liveDemoLink: '',
      category: 'Full-Stack Personal Project',
      problem: 'Coffee shop managers needed an integrated digital order queue and stock tracker to handle peak rush hours.',
      techChoice: 'Next.js for server-rendered UI paired with Express RESTful backend and flexible MongoDB document storage.',
      challenge: 'Managing real-time order status transitions (Pending -> Brewing -> Completed).',
      solution: 'Created REST API endpoints with strict state machine validation and indexed MongoDB schemas.',
      outcome: 'Delivered an intuitive order board that improved customer order processing efficiency.',
      leadership: 'Individual Full-Stack Developer - Developed frontend, RESTful APIs, and MongoDB schemas independently.',
      deliveryTools: ['GitHub'],
    },
    {
      title: 'Saloon Management System',
      description: 'Built an individual salon appointment and customer-flow management application tailored for recurring salon service scheduling, slot availability, and client history.',
      language: 'JavaScript & React',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
      repoLink: 'https://github.com/chathunikathammitaarachchi/saloon-project',
      liveDemoLink: '',
      category: 'Individual Project',
      problem: 'Manual appointment tracking led to double-booked time slots and customer follow-up delays.',
      techChoice: 'React frontend for quick booking interaction paired with Express/MongoDB REST backend for flexible appointment history.',
      challenge: 'Preventing overlapping time slot bookings during high-demand weekend hours.',
      solution: 'Implemented time-slot conflict validation and service-aware appointment forms.',
      outcome: 'Streamlined salon appointment scheduling and improved customer service continuity.',
      leadership: 'Individual Developer - Built requirement gathering, data models, and full-stack booking interface.',
      deliveryTools: ['GitHub'],
    },
    {
      title: 'Plant of Flowers (Care & Sales System)',
      description: 'Built an individual plant sales and care reservation web application enabling users to browse plant varieties, order plants online, and schedule plant care consultations.',
      language: 'JavaScript & React',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'CSS'],
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
      repoLink: 'https://github.com/chathunikathammitaarachchi/palnt-of-flowers',
      liveDemoLink: '',
      category: 'Individual Project',
      problem: 'Plant enthusiasts lacked a dedicated web platform to purchase floral varieties and book expert plant care advice.',
      techChoice: 'React for responsive catalog browsing paired with MongoDB for flexible plant metadata and sales transactions.',
      challenge: 'Managing stock availability for limited seasonal plant batches and consultation booking slots.',
      solution: 'Designed real-time stock deduction upon booking confirmation and automated reservation tracking.',
      outcome: 'Created an attractive plant catalog platform with seamless purchasing and care consultation scheduling.',
      leadership: 'Individual Developer - Designed UI/UX, implemented backend booking logic, and integrated database storage.',
      deliveryTools: ['GitHub'],
    },
    {
      title: 'Recipe Management System',
      description: 'Full-stack recipe and culinary catalog application built for managing ingredient lists, recipe step-by-step guides, category filtering, and personal recipe collections.',
      language: 'JavaScript & React',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=800&q=80',
      repoLink: 'https://github.com/chathunikathammitaarachchi/chathunika_Recipe_Management',
      liveDemoLink: '',
      category: 'Individual Project',
      problem: 'Home cooks and chefs needed a structured digital platform to catalog recipes, search by ingredients, and track cooking instructions.',
      techChoice: 'React frontend with search & filter controls paired with Node.js/Express REST backend for recipe CRUD operations.',
      challenge: 'Implementing multi-criteria recipe search by preparation time, ingredients, and dietary categories.',
      solution: 'Built optimized MongoDB aggregation queries for instant ingredient matching and category filtering.',
      outcome: 'Delivered an intuitive recipe management portal with fast search and clean step-by-step presentation.',
      leadership: 'Individual Developer - Designed recipe data schemas, engineered REST APIs, and built interactive frontend controls.',
      deliveryTools: ['GitHub'],
    },
    {
      title: 'Pasandul Holding Management System',
      description: 'Web-based business management system designed for corporate service tracking, client operations, invoice handling, and enterprise resource records.',
      language: 'JavaScript & Web Stack',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      repoLink: 'https://github.com/chathunikathammitaarachchi/Pasandul-Holding-',
      liveDemoLink: '',
      category: 'Individual Web Solution',
      problem: 'Enterprise management required unified digital tracking for client projects, service orders, and operational metrics.',
      techChoice: 'React with Tailwind CSS for clean corporate interface design paired with robust Express/MongoDB backend logic.',
      challenge: 'Designing an intuitive administrative dashboard that presents complex operational data clearly.',
      solution: 'Created modular dashboard widgets and secure RESTful endpoints for real-time status management.',
      outcome: 'Streamlined corporate client management and improved internal operational visibility.',
      leadership: 'Individual Developer - Developed complete business management solution from requirement analysis to deployment.',
      deliveryTools: ['GitHub', 'Visual Studio'],
    },
    {
      title: 'Garment Management System',
      description: 'Web-based inventory and order management solution for garment manufacturing and supplier operations. Spearheaded a team to develop the solution, taking ownership of requirement gathering and database design.',
      language: 'PHP & SQL',
      technologies: ['PHP', 'HTML', 'CSS', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
      repoLink: '',
      liveDemoLink: '',
      category: '1st Year Group Project - Team Lead',
      problem: 'Lack of automated inventory tracking caused raw material shortages and customer order tracking delays.',
      techChoice: 'PHP and MySQL relational database provided structured schema relationships between suppliers, raw materials, and orders.',
      challenge: 'Designing normalized database structures for multi-tier garment assembly line data.',
      solution: 'Spearheaded requirement gathering and engineered normalized MySQL ER schemas with foreign key constraints.',
      outcome: 'Improved inventory tracking efficiency and streamlined administrative order tracking.',
      leadership: 'Group Project Team Leader (1st Year) - Took ownership of requirement gathering, database design, and overall team coordination.',
      deliveryTools: ['GitHub', 'Visual Studio'],
    },
  ];

  return (
    <section id="projects" className="relative overflow-hidden bg-[#0B1121] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.14),transparent_45%)]"></div>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-br from-indigo-900/10 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-linear-to-tl from-blue-900/10 via-transparent to-transparent"></div>
      <div className="mesh-grid absolute inset-0 opacity-25"></div>
      
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold text-cyan-300 backdrop-blur-md">
            <Layers className="h-4 w-4" />
            <span>CV Synchronized Projects & R&D</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Projects & Academic Research</h2>
          <div className="w-20 h-1.5 bg-linear-to-r from-cyan-400 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Explore 10 featured engineering projects. Click any project or "Open Case Study →" to view the full project breakdown.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.42, delay: index * 0.05 }}
              onClick={() => setActiveModalProject(project)}
              className={`glass-card group relative flex h-full flex-col overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/15 cursor-pointer ${
                project.isResearch ? 'border-2 border-purple-500/40 bg-purple-950/20' : ''
              }`}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-linear-to-r ${project.isResearch ? 'from-purple-400 to-pink-500' : 'from-cyan-400 to-blue-500'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
               
              <div className="relative h-48 overflow-hidden rounded-t-3xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80';
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0B1121] to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                {(project.repoLink || project.liveDemoLink) && (
                  <div className="absolute top-4 right-4 flex gap-2" onClick={(e) => e.stopPropagation()}>
                    {project.repoLink && (
                      <a 
                        href={project.repoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-900/80 backdrop-blur-md rounded-full text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-all shadow-md border border-slate-700"
                        title="View Repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveDemoLink && (
                      <a
                        href={project.liveDemoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-900/80 backdrop-blur-md rounded-full text-slate-300 hover:text-blue-300 hover:bg-slate-800 transition-all shadow-md border border-slate-700"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 backdrop-blur-md rounded-full text-xs font-medium border ${
                    project.isResearch 
                      ? 'bg-purple-900/80 text-purple-300 border-purple-500/40 flex items-center gap-1.5' 
                      : 'bg-slate-900/80 text-cyan-400 border-cyan-500/30'
                  }`}>
                    {project.isResearch && <BookOpen className="h-3 w-3" />}
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-4 grow leading-relaxed text-sm line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-slate-900/50 text-slate-400 rounded-lg text-xs font-medium border border-slate-700/50">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-slate-900/40 text-slate-500 rounded-lg text-xs font-medium">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm font-medium text-slate-500 pt-4 border-t border-slate-700/50">
                  <div className="flex items-center">
                    <Code size={16} className="mr-2 text-cyan-500" />
                    <span className="text-slate-400">{project.language}</span>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalProject(project);
                    }}
                    className="inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 hover:underline transition-colors"
                  >
                    Open Case Study →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-900/40 p-5 text-sm text-slate-300 backdrop-blur-sm">
          <p className="font-semibold text-cyan-300">CV & Portfolio Synchronization</p>
          <p className="mt-1">
            All 10 featured projects match Chathunika's official CV and engineering achievements. Click any project card to view the complete case study popup.
          </p>
        </div>
        
        <div className="text-center mt-12">
            <a href="https://github.com/chathunikathammitaarachchi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-slate-700 shadow-lg text-base font-medium rounded-xl text-slate-300 bg-slate-800/50 hover:bg-slate-800 hover:text-cyan-400 hover:border-cyan-500/50 transition-all backdrop-blur-sm">
                <Github className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
                View public repositories on GitHub
            </a>
        </div>
      </div>

      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-4xl max-h-[88vh] overflow-y-auto no-scrollbar rounded-3xl border border-slate-700/80 bg-[#0E1629] p-6 sm:p-8 md:p-10 shadow-2xl text-left"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 z-20 rounded-full bg-slate-800/90 p-2.5 text-slate-400 hover:bg-slate-700 hover:text-white transition-all border border-slate-700 shadow-lg"
                aria-label="Close Case Study"
              >
                <X size={20} />
              </button>

              <div className="relative mb-8 h-56 md:h-72 w-full overflow-hidden rounded-2xl border border-slate-700/60 shadow-xl">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80';
                  }}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0E1629] via-[#0E1629]/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/30 mb-2 backdrop-blur-md">
                    {activeModalProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                    {activeModalProject.title}
                  </h3>
                </div>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {activeModalProject.technologies.map((tech) => (
                  <span key={tech} className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-300">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mb-8 text-slate-300 text-base leading-relaxed border-b border-slate-800 pb-6">
                {activeModalProject.description}
              </p>

              <div className="grid gap-6 md:grid-cols-2 mb-8">
                <div className="rounded-2xl border border-amber-500/20 bg-amber-950/10 p-5">
                  <h4 className="mb-2 flex items-center text-sm font-bold uppercase tracking-wider text-amber-400">
                    <AlertTriangle className="mr-2 h-4 w-4 shrink-0" />
                    Problem Statement
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeModalProject.problem}
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-500/20 bg-blue-950/10 p-5">
                  <h4 className="mb-2 flex items-center text-sm font-bold uppercase tracking-wider text-blue-400">
                    <Cpu className="mr-2 h-4 w-4 shrink-0" />
                    Technical Architecture Choice
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeModalProject.techChoice}
                  </p>
                </div>

                <div className="rounded-2xl border border-purple-500/20 bg-purple-950/10 p-5">
                  <h4 className="mb-2 flex items-center text-sm font-bold uppercase tracking-wider text-purple-400">
                    <Wrench className="mr-2 h-4 w-4 shrink-0" />
                    Engineering Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeModalProject.challenge}
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/10 p-5">
                  <h4 className="mb-2 flex items-center text-sm font-bold uppercase tracking-wider text-emerald-400">
                    <CheckCircle2 className="mr-2 h-4 w-4 shrink-0" />
                    Solution Implemented
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeModalProject.solution}
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/60 p-5">
                  <h4 className="mb-2 flex items-center text-sm font-bold uppercase tracking-wider text-cyan-400">
                    <Trophy className="mr-2 h-4 w-4 shrink-0" />
                    Project Outcome
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    {activeModalProject.outcome}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-5">
                  <h4 className="mb-2 flex items-center text-sm font-bold uppercase tracking-wider text-cyan-300">
                    <UserCheck className="mr-2 h-4 w-4 shrink-0" />
                    Leadership & Responsibility
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeModalProject.leadership}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-6">
                <div className="flex flex-wrap gap-3">
                  {activeModalProject.repoLink && (
                    <a
                      href={activeModalProject.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-xl bg-slate-800 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700 hover:text-cyan-400 transition-all border border-slate-700 shadow-md"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code on GitHub
                    </a>
                  )}
                  {activeModalProject.liveDemoLink && activeModalProject.liveDemoLink !== '#' && (
                    <a
                      href={activeModalProject.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-xl bg-linear-to-r from-cyan-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
