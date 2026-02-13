import { Code2, Globe, Terminal, Cpu, Database, Server, Palette } from 'lucide-react';

const About = () => {
  const skills = [
    "Angular", "Arduino", "AWS", "Bootstrap", "Chart.js", "C#", "CSS3", "Docker", 
    ".NET", "Express", "Figma", "Git", "HTML5", "Illustrator", "Java", 
    "JavaScript", "Jest", "Linux", "Materialize", "MATLAB", "MongoDB", "MySQL", 
    "Node.js", "Oracle", "Photoshop", "PHP", "PostgreSQL", "Postman", "Python", 
    "React", "React Native", "Selenium", "Spring", "Tailwind"
  ];

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with modern frameworks",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description: "Building robust server-side applications and RESTful APIs",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design",
      description: "Designing efficient database schemas and optimizing queries",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Crafting intuitive and visually appealing user experiences",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#0B1121] relative overflow-hidden">
      {/* Professional Dark Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0B1121] to-slate-900"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-indigo-900/10 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-blue-900/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">About Me</h2>
          <div className="w-20 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">Passionate about creating innovative solutions and constantly learning new technologies</p>
        </div>

        {/* Premium Services Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group p-8 bg-slate-800/40 rounded-3xl shadow-lg border border-slate-700/50 hover:border-cyan-500/30 hover:-translate-y-3 transition-all duration-500 backdrop-blur-sm">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-3 text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-cyan-500/20`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-slate-800/40 p-10 rounded-3xl shadow-xl border border-slate-700/50 backdrop-blur-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-6 flex items-center relative z-10">
                <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mr-4 text-white shadow-lg">
                  <Globe className="w-6 h-6" />
                </div>
                Professional Profile
              </h3>
              <p className="text-slate-300 mb-4 leading-relaxed font-medium relative z-10">
                I am a Software Engineering student passionate about building clean, efficient software. 
                I am currently dedicated to learning Software Engineering fundamentals and advanced concepts.
              </p>
              <p className="text-slate-400 leading-relaxed relative z-10">
                I enjoy solving complex problems and creating applications that make a real difference. 
                Always eager to learn new technologies and improve my skills in both frontend and backend development.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-slate-800/40 rounded-3xl border border-slate-700/50 text-center shadow-lg backdrop-blur-sm group hover:bg-slate-800/60 transition-colors">
                <h5 className="font-bold text-4xl bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">6+</h5>
                <p className="text-slate-400 text-sm font-semibold">Projects Completed</p>
              </div>
              <div className="p-6 bg-slate-800/40 rounded-3xl border border-slate-700/50 text-center shadow-lg backdrop-blur-sm group hover:bg-slate-800/60 transition-colors">
                <h5 className="font-bold text-4xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">3+</h5>
                <p className="text-slate-400 text-sm font-semibold">Years Experience</p>
              </div>
            </div>
            
            <div className="p-10 bg-slate-800/40 rounded-3xl border border-slate-700/50 shadow-xl backdrop-blur-sm">
               <h4 className="font-bold text-xl mb-4 flex items-center text-white">
                 <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mr-4 text-white shadow-lg">
                   <Terminal className="w-6 h-6" />
                 </div>
                 <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Education & Specialization</span>
               </h4>
               <p className="text-blue-300 font-bold mb-2 text-lg">Software Engineering Student</p>
               <p className="text-blue-200/90 text-sm mb-4 font-medium">Specializing in Full Stack Development & Modern Web Technologies</p>
               <div className="flex flex-wrap gap-3">
                 <span className="px-4 py-2 bg-slate-700/50 text-blue-300 rounded-full text-xs font-semibold border border-blue-500/30 shadow-sm hover:bg-slate-700 transition-colors">MERN Stack</span>
                 <span className="px-4 py-2 bg-slate-700/50 text-blue-300 rounded-full text-xs font-semibold border border-blue-500/30 shadow-sm hover:bg-slate-700 transition-colors">Database Design</span>
                 <span className="px-4 py-2 bg-slate-700/50 text-blue-300 rounded-full text-xs font-semibold border border-blue-500/30 shadow-sm hover:bg-slate-700 transition-colors">API Development</span>
                 <span className="px-4 py-2 bg-slate-700/50 text-blue-300 rounded-full text-xs font-semibold border border-blue-500/30 shadow-sm hover:bg-slate-700 transition-colors">Cloud Computing</span>
               </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <div className="p-2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl mr-4 text-white shadow-lg">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Technical Skills & Tools</span>
            </h3>
            <div className="bg-slate-800/40 p-10 rounded-3xl shadow-2xl border border-slate-700/50 backdrop-blur-sm">
              <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-5 py-3 bg-slate-900/50 text-slate-300 hover:bg-slate-800 hover:text-cyan-400 border border-slate-700 hover:border-cyan-500/50 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300 cursor-default select-none group flex items-center backdrop-blur-sm hover:-translate-y-1"
                  >
                    <Code2 className="w-4 h-4 mr-2 text-slate-500 group-hover:text-cyan-500 transition-colors" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Premium Professional Quote */}
            <div className="mt-10 p-8 bg-slate-800/40 rounded-3xl border border-slate-700/50 shadow-xl backdrop-blur-sm">
              <blockquote className="text-xl italic font-medium text-slate-300 mb-4">
                "Code is like humor. When you have to explain it, it's bad."
              </blockquote>
              <cite className="text-sm font-semibold text-slate-500">- Cory House</cite>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
