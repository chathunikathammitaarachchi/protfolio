import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 relative overflow-hidden border-t border-slate-900">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
              Chathunika
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Crafting exceptional digital experiences with modern web technologies. Focus on clean code, performance, and user-centric design.
            </p>
            <div className="flex space-x-4">
               <a href="https://github.com/chathunikathammitaarachchi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors p-2 hover:bg-slate-900 rounded-full">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/chathunika-thammitaarachchi-b2b9b2314/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors p-2 hover:bg-slate-900 rounded-full">
                <Linkedin size={20} />
              </a>
              <a href="mailto:chathunikathammitaarachchi74@gmail.com" className="text-slate-400 hover:text-purple-400 transition-colors p-2 hover:bg-slate-900 rounded-full">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center hover:translate-x-1 duration-300">Home</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center hover:translate-x-1 duration-300">About Me</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center hover:translate-x-1 duration-300">Projects</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center hover:translate-x-1 duration-300">Contact</a></li>
              <li><a href="/cv/Chathunika-Dayangani-CV.pdf" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center hover:translate-x-1 duration-300">Download CV</a></li>
            </ul>
          </div>

          {/* Contact Info (Simplified) */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="mr-3 text-cyan-500 mt-1" />
                <span className="text-slate-400">chathunikathammitaarachchi74@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Linkedin size={18} className="mr-3 text-blue-500 mt-1" />
                <span className="text-slate-400">LinkedIn Profile</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between">
           <p className="text-slate-500 text-sm mb-4 md:mb-0">
             © {new Date().getFullYear()} Chathunika Thammitaarachchi. All rights reserved.
          </p>
          <p className="flex items-center text-slate-500 text-sm">
            Made with <Heart size={14} className="mx-1 text-red-500 fill-current animate-pulse" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
