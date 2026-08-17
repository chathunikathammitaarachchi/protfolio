import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Coffee,
  Download,
  Globe,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Users,
} from 'lucide-react';

const Hero = () => {
  const roles = useMemo(
    () => ['Full-Stack Developer', 'Software Engineering Student', 'Problem Solver'],
    []
  );
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const atEnd = typedText === currentRole;
    const atStart = typedText === '';

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && atEnd) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && atStart) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }

        const nextLength = typedText.length + (isDeleting ? -1 : 1);
        setTypedText(currentRole.slice(0, nextLength));
      },
      atEnd ? 1200 : isDeleting ? 42 : 80
    );

    return () => window.clearTimeout(timeout);
  }, [isDeleting, roleIndex, roles, typedText]);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B1121] pt-16">
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-[#0B1121] to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_48%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_85%,rgba(99,102,241,0.16),transparent_44%)]"></div>
      <div className="mesh-grid absolute inset-0 opacity-35"></div>
      
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-6 py-12 sm:px-10 md:flex-row lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="z-10 text-center md:w-1/2 md:text-left"
        >
          <div className="glass-card mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-cyan-200">
            <Award className="h-4 w-4" />
            <span>Available for Junior Roles</span>
          </div>

          <h1 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient inline-block mt-2 font-black tracking-normal">
              Chathunika Thammitaarachchi
            </span>
          </h1>

          <h2 className="mb-2 text-xl font-medium text-slate-400 md:text-2xl">Software Engineering Student</h2>
          <div className="mb-6 min-h-10 text-lg font-semibold text-cyan-300 md:text-2xl" aria-live="polite">
            <span className="typing-caret">{typedText}</span>
          </div>
          <p className="mb-6 block max-w-xl text-lg font-normal text-slate-400">
            Software Engineering undergraduate with hands-on full-stack experience across React, Spring Boot, Node.js, and MongoDB, focused on clean architecture and reliable delivery.
          </p>

          <div className="mb-6 inline-flex items-center gap-3 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-3 text-left text-sm text-cyan-100 backdrop-blur-md">
            <GraduationCap className="h-5 w-5 shrink-0 text-cyan-300" />
            <div>
              <p className="font-semibold">Social Proof Badge</p>
              <p className="text-xs text-cyan-200/90">Software Engineering Undergraduate</p>
            </div>
          </div>

          <div className="mb-8 flex items-center justify-center gap-8 md:justify-start">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">10</div>
              <div className="text-sm text-slate-500">Featured Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">1</div>
              <div className="text-sm text-slate-500">Internship</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">2022</div>
              <div className="text-sm text-slate-500">Started Degree</div>
            </div>
          </div>

          <div className="mb-10 flex flex-wrap justify-center gap-3 md:justify-start">
            <span className="px-4 py-2 bg-slate-800/50 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/20 shadow-sm hover:bg-slate-800 transition-colors">
              React & Node.js
            </span>
            <span className="px-4 py-2 bg-slate-800/50 text-blue-300 rounded-full text-sm font-medium border border-blue-500/20 shadow-sm hover:bg-slate-800 transition-colors">
              Database Design
            </span>
            <span className="px-4 py-2 bg-slate-800/50 text-purple-300 rounded-full text-sm font-medium border border-purple-500/20 shadow-sm hover:bg-slate-800 transition-colors">
              UI/UX Design
            </span>
          </div>

          <div className="mb-10 flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:justify-start">
            <a href="#projects" className="group px-8 py-4 bg-linear-to-r from-cyan-600 to-blue-600 text-white rounded-2xl hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 flex items-center justify-center font-semibold">
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/cv/Chathunika-Dayangani-CV.pdf" download="Chathunika-Dayangani-CV.pdf" className="glass-card px-8 py-4 text-white rounded-2xl hover:border-white/20 transition-all flex items-center justify-center font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1">
              <Download className="mr-2 w-5 h-5" />
              Download CV
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start space-x-6 text-slate-500">
            <a href="https://github.com/chathunikathammitaarachchi" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 rounded-xl shadow-md hover:shadow-cyan-500/20 hover:text-cyan-400 hover:scale-110 transition-all duration-300 border border-slate-700">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/chathunika-thammitaarachchi-b2b9b2314/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 rounded-xl shadow-md hover:shadow-blue-500/20 hover:text-blue-400 hover:scale-110 transition-all duration-300 border border-slate-700">
              <Linkedin size={24} />
            </a>
            <a href="mailto:chathunikathammitaarachchi74@gmail.com" className="p-3 bg-slate-800/50 rounded-xl shadow-md hover:shadow-purple-500/20 hover:text-purple-400 hover:scale-110 transition-all duration-300 border border-slate-700">
              <Mail size={24} />
            </a>
            <a href="https://www.behance.net/chathunika2001" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 rounded-xl shadow-md hover:shadow-emerald-500/20 hover:text-emerald-300 hover:scale-110 transition-all duration-300 border border-slate-700">
              <Globe size={24} />
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative mt-6 md:mt-0 flex justify-center md:w-1/2 md:-translate-y-10"
        >
          <div className="relative h-80 w-80 md:h-128 md:w-lg">
             <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"></div>
             <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-4000"></div>
             
             <div className="absolute -top-6 -right-6 z-20">
               <div className="glass-card p-4 rounded-3xl shadow-2xl">
                 <Coffee className="w-8 h-8 text-amber-500" />
               </div>
             </div>
             
             <div className="absolute -bottom-6 -left-6 z-20">
               <div className="bg-linear-to-br from-white to-green-50 p-4 rounded-3xl shadow-2xl border border-green-100 backdrop-blur-sm">
                 <Users className="w-8 h-8 text-green-500" />
               </div>
             </div>
             
             <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto -mt-6 md:-mt-12">
               {/* Glowing Ambient Background Ring */}
               <div className="absolute inset-0 bg-linear-to-tr from-cyan-500 via-blue-600 to-purple-600 rounded-full blur-2xl opacity-40 animate-pulse"></div>
               
               {/* Outer Gradient Border Ring */}
               <div className="relative w-full h-full p-1.5 rounded-full bg-linear-to-tr from-cyan-400 via-blue-500 to-purple-500 shadow-2xl shadow-cyan-500/25">
                 <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-900 bg-slate-900 relative">
                   <img 
                     src="/profile.jpg" 
                     alt="Chathunika Thammitaarachchi - Software Engineer"
                     width={640}
                     height={640}
                     loading="eager"
                     decoding="async"
                     fetchPriority="high"
                     onError={(e) => {
                       (e.currentTarget as HTMLImageElement).src = 'https://github.com/chathunikathammitaarachchi.png';
                     }}
                     className="w-full h-full object-cover object-[50%_15%] scale-105 rounded-full hover:scale-115 transition-transform duration-700"
                   />
                 </div>
               </div>
               
               {/* Online Status Badge */}
               <div className="absolute bottom-2 right-4 bg-linear-to-r from-emerald-400 to-green-500 p-2 rounded-full border-4 border-slate-900 shadow-xl flex items-center justify-center z-20">
                 <div className="w-3.5 h-3.5 bg-white rounded-full animate-pulse"></div>
               </div>
             </div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
