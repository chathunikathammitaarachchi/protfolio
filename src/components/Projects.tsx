import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Code, ExternalLink } from 'lucide-react';

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
};

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: 'Auditorium Booking System',
      description: 'Production-style booking flow for event scheduling, seat visibility, and admin approval controls.',
      language: 'JavaScript',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      repoLink: 'https://github.com/chathunikathammitaarachchi/auditorium',
      liveDemoLink: '',
      category: 'Management System',
      problem: 'Manual booking caused duplicate reservations and delayed confirmations.',
      techChoice: 'MongoDB was selected to model flexible booking and event entities during rapid iteration.',
      challenge: 'Preventing conflicting seat reservations when multiple users booked at the same time.',
      solution: 'Added server-side validation with slot conflict checks before confirming a reservation.',
      outcome: 'Booking flow became consistent and easier for staff to monitor from one dashboard.',
      leadership: 'Team Lead - organized daily stand-ups, delegated implementation tasks, and mentored teammates on React and Express integration.',
      deliveryTools: ['GitHub', 'Jira', 'Trello'],
    },
    {
      title: 'Outing Aura',
      description: 'Day-trip platform with destination management, booking lifecycle, and operational visibility.',
      language: 'JavaScript',
      technologies: ['React', 'Node.js', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      repoLink: 'https://github.com/chathunikathammitaarachchi/Outing-Aura',
      liveDemoLink: '',
      category: 'Travel Platform',
      problem: 'Trip operators had poor visibility into available slots and booking stages.',
      techChoice: 'MySQL was used for relational consistency across users, trips, and booking records.',
      challenge: 'Keeping booking status transitions valid from inquiry to confirmation.',
      solution: 'Designed clear status rules and protected transitions with backend validation.',
      outcome: 'Reduced booking confusion and gave operators a reliable overview of upcoming trips.',
      leadership: 'Team Lead - coordinated a 4-member team and ensured smooth frontend-backend integration with milestone tracking.',
      deliveryTools: ['GitHub', 'Jira', 'Trello'],
    },
    {
      title: 'Coffee Shop Management',
      description: 'Point-of-service operations app focused on inventory, order queueing, and analytics snapshots.',
      language: 'TypeScript',
      technologies: ['React', 'TypeScript', 'Express'],
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      repoLink: 'https://github.com/chathunikathammitaarachchi/CoffeeShop',
      liveDemoLink: '',
      category: 'Business Solution',
      problem: 'Separate tracking of sales and stock caused mismatched availability during rush hours.',
      techChoice: 'TypeScript was chosen for safer state management and clearer service contracts.',
      challenge: 'Maintaining accurate stock levels while processing rapid order updates.',
      solution: 'Connected order events directly to stock mutations with strict typed payloads.',
      outcome: 'Improved consistency between menu availability and actual inventory levels.',
      leadership: 'Individually delivered full-stack implementation, from API design to UI testing and integration.',
      deliveryTools: ['GitHub'],
    },
    {
      title: 'Model Banking System',
      description: 'Banking workflow simulator with account operations, transaction logs, and risk-aware validations.',
      language: 'JavaScript',
      technologies: ['React', 'Express', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      repoLink: 'https://github.com/chathunikathammitaarachchi/ModelBank',
      liveDemoLink: '',
      category: 'Financial System',
      problem: 'Basic demo banking systems often ignore validation and transaction safety checks.',
      techChoice: 'MongoDB enabled quick modeling of transaction history and account metadata.',
      challenge: 'Avoiding invalid transfers and ensuring account balances remained trustworthy.',
      solution: 'Applied layered validation and transaction logging for each critical money action.',
      outcome: 'Created a safer simulation environment with clearer financial operation rules.',
      leadership: 'Led architecture decisions around validation layers and transaction traceability.',
      deliveryTools: ['GitHub'],
    },
    {
      title: 'Saloon Management System',
      description: 'Appointment and customer-flow manager tailored for recurring salon operations.',
      language: 'JavaScript',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      repoLink: 'https://github.com/chathunikathammitaarachchi/saloon-project',
      liveDemoLink: '',
      category: 'Web Application',
      problem: 'Manual appointment tracking led to missed slots and weak customer follow-ups.',
      techChoice: 'MongoDB supported flexible customer/service history with fast iteration speed.',
      challenge: 'Preventing duplicate appointments while keeping the booking UX fast.',
      solution: 'Implemented time-slot conflict checking and service-aware booking forms.',
      outcome: 'Improved day-to-day scheduling accuracy and customer service continuity.',
      leadership: 'Spearheaded requirement gathering and data-model planning during team execution.',
      deliveryTools: ['GitHub'],
    },
  ];

  const resolveLiveDemo = (liveDemoLink: string, repoLink: string) => {
    return liveDemoLink && liveDemoLink !== '#' ? liveDemoLink : repoLink;
  };

  return (
    <section id="projects" className="relative overflow-hidden bg-[#0B1121] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.14),transparent_45%)]"></div>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-br from-indigo-900/10 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-linear-to-tl from-blue-900/10 via-transparent to-transparent"></div>
      <div className="mesh-grid absolute inset-0 opacity-25"></div>
      <div className="relative z-10 mx-auto w-full max-w-384 px-3 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">My Projects</h2>
          <div className="w-20 h-1.5 bg-linear-to-r from-cyan-400 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
             Featured 5 projects only. Each project includes the problem solved, technical decisions, and implementation challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.42, delay: index * 0.06 }}
              className="glass-card group relative flex h-full flex-col overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/10"
            >
               <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
               
              <div className="relative h-48 overflow-hidden rounded-t-3xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0B1121] to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <a 
                    href={project.repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-900/80 backdrop-blur-md rounded-full text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-all shadow-md border border-slate-700"
                    title="View Code"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={resolveLiveDemo(project.liveDemoLink, project.repoLink)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-900/80 backdrop-blur-md rounded-full text-slate-300 hover:text-blue-300 hover:bg-slate-800 transition-all shadow-md border border-slate-700"
                    title={project.liveDemoLink ? 'Live Demo' : 'Repository (deploy demo to replace)'}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-md rounded-full text-xs font-medium text-cyan-400 border border-cyan-500/30">
                    {project.category}
                  </span>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-[#020617]/95 via-[#020617]/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-[11px] font-bold tracking-[0.12em] text-cyan-300 uppercase">Problem</p>
                  <p className="mb-2 text-xs text-slate-200">{project.problem}</p>
                  <p className="text-[11px] font-bold tracking-[0.12em] text-emerald-300 uppercase">Solution</p>
                  <p className="text-xs text-slate-200">{project.solution}</p>
                </div>
              </div>
              
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-4 grow leading-relaxed text-sm">
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
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {expandedIndex === index ? 'Hide Case Study' : 'Case Study'}
                    </button>
                    <a
                      href={resolveLiveDemo(project.liveDemoLink, project.repoLink)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 font-semibold group-hover:underline"
                    >
                      {project.liveDemoLink ? 'Live Demo →' : 'Source Code →'}
                    </a>
                  </div>
                </div>

                {expandedIndex === index && (
                  <div className="mt-5 rounded-2xl border border-slate-700 bg-slate-900/50 p-4 text-left text-sm backdrop-blur-sm">
                    <p className="mb-3 text-slate-300">
                      <span className="font-semibold text-cyan-300">Technical Choice:</span> {project.techChoice}
                    </p>
                    <p className="mb-3 text-slate-300">
                      <span className="font-semibold text-amber-300">Challenge:</span> {project.challenge}
                    </p>
                    <p className="mb-3 text-slate-300">
                      <span className="font-semibold text-emerald-300">How I Solved It:</span> {project.solution}
                    </p>
                    <p className="text-slate-300">
                      <span className="font-semibold text-purple-300">Outcome:</span> {project.outcome}
                    </p>
                    <p className="mt-3 text-slate-300">
                      <span className="font-semibold text-cyan-200">Leadership:</span> <span className="font-semibold">{project.leadership}</span>
                    </p>
                    {project.deliveryTools && project.deliveryTools.length > 0 && (
                      <p className="mt-2 text-slate-300">
                        <span className="font-semibold text-sky-300">Delivery Tools:</span> {project.deliveryTools.join(', ')}
                      </p>
                    )}

                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-900/40 p-5 text-sm text-slate-300 backdrop-blur-sm">
          <p className="font-semibold text-cyan-300">Live Demo Readiness</p>
          <p className="mt-1">
            When a deployment URL is added, this button opens the live app. Until then, it safely opens the repository so visitors never hit a broken link.
          </p>
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
