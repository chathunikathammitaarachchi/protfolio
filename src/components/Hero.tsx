import { Github, Linkedin, Mail, ArrowRight, Download, Award, Users, Coffee } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#0B1121] pt-16 overflow-hidden relative">
      {/* Professional Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0B1121] to-slate-900"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-purple-500/10"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-indigo-500/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 text-center md:text-left z-10">
          {/* Professional Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold text-cyan-300 bg-cyan-900/20 rounded-full border border-cyan-500/20 backdrop-blur-sm shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            <Award className="w-4 h-4" />
            <span>Available for Professional Opportunities</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient">
              Chathunika Thammitaarachchi
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-slate-400 mb-6 font-medium">
            Software Engineering Student & 
            <span className="text-cyan-400 font-semibold ml-2">Full-Stack Developer</span>
            <span className="block text-lg text-slate-500 mt-2 font-normal">
              Crafting innovative solutions with modern web technologies
            </span>
          </h2>
          
          {/* Professional Stats */}
          <div className="flex items-center justify-center md:justify-start gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">6+</div>
              <div className="text-sm text-slate-500">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">3+</div>
              <div className="text-sm text-slate-500">Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-sm text-slate-500">Technologies</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-10">
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
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start mb-10">
            <a href="#projects" className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 flex items-center justify-center font-semibold">
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/cv/Chathunika-Dayangani-CV.pdf" download="Chathunika-Dayangani-CV.pdf" className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm">
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
          </div>
        </div>
        
        <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center relative">
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
             {/* Enhanced Professional Radiant Blobs */}
             <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"></div>
             <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-4000"></div>
             
             {/* Premium Professional Badges */}
             <div className="absolute -top-6 -right-6 z-20">
               <div className="bg-slate-800/80 p-4 rounded-3xl shadow-2xl border border-slate-700 backdrop-blur-md">
                 <Coffee className="w-8 h-8 text-amber-500" />
               </div>
             </div>
             
             <div className="absolute -bottom-6 -left-6 z-20">
               <div className="bg-gradient-to-br from-white to-green-50 p-4 rounded-3xl shadow-2xl border border-green-100 backdrop-blur-sm">
                 <Users className="w-8 h-8 text-green-500" />
               </div>
             </div>
             
             {/* Professional Profile Container with Radiant Effects */}
             <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto mt-8">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 rounded-[3rem] rotate-6 opacity-20 animate-pulse shadow-2xl"></div>
               <div className="absolute inset-1 bg-gradient-to-br from-white to-blue-50/50 rounded-[2.8rem] shadow-2xl backdrop-blur-sm"></div>
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 rounded-[3rem] animate-pulse"></div>
               <img 
                 src="https://github.com/chathunikathammitaarachchi.png" 
                 alt="Chathunika Thammitaarachchi - Software Engineer"
                 className="relative w-full h-full object-cover rounded-[2.8rem] shadow-2xl border-4 border-white rotate-0 hover:rotate-2 transition-all duration-700 hover:scale-105 z-10"
               />
               
               {/* Enhanced Professional Status */}
               <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-400 to-emerald-500 w-8 h-8 rounded-full border-4 border-white shadow-xl animate-pulse flex items-center justify-center">
                 <div className="w-3 h-3 bg-white rounded-full"></div>
               </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Professional Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
