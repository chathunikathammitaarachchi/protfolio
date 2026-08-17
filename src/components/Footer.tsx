import { Heart, Github, Linkedin, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-slate-900 bg-slate-950 py-12 text-slate-300">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 inline-block">
              Chathunika
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Crafting exceptional digital experiences with modern web technologies. Focus on clean code, performance, and user-centric design.
            </p>
            <div className="flex space-x-4">
               <a href="https://github.com/chathunikathammitaarachchi" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub profile" className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-900 hover:text-cyan-400">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/chathunika-thammitaarachchi-b2b9b2314/" target="_blank" rel="noopener noreferrer" aria-label="Open LinkedIn profile" className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-900 hover:text-blue-400">
                <Linkedin size={20} />
              </a>
              <a href="mailto:dayanganichathunika@gmail.com" aria-label="Send an email" className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-900 hover:text-purple-400">
                <Mail size={20} />
              </a>
              <a href="https://www.behance.net/chathunika2001" target="_blank" rel="noopener noreferrer" aria-label="Open Behance profile" className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-900 hover:text-emerald-300">
                <Globe size={20} />
              </a>
            </div>
          </div>

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

          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="mr-3 text-cyan-500 mt-1" />
                <a href="mailto:dayanganichathunika@gmail.com" className="text-slate-400 hover:text-cyan-300 transition-colors break-all">
                  dayanganichathunika@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Linkedin size={18} className="mr-3 text-blue-500 mt-1" />
                <a href="https://www.linkedin.com/in/chathunika-thammitaarachchi-b2b9b2314/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-300 transition-colors">
                  LinkedIn Profile
                </a>
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
