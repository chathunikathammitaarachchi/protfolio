import { Code2, Globe, Terminal, Cpu, Database, Server, Palette, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const skillGroups = {
    'Frameworks & Libraries': ['React', 'Node.js', 'Laravel', 'Spring Boot', 'Bootstrap', 'Tailwind CSS', 'Next.js'],
    Languages: ['JavaScript', 'TypeScript', 'Java', 'Python', 'PHP', 'C#', 'C', 'C++', 'HTML', 'CSS'],
    Databases: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
    Tools: ['GitHub', 'Figma', 'Balsamiq', 'Jira', 'Trello', 'Selenium', 'Android Studio', 'Visual Studio'],
  };

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with modern React, Next.js, and CSS frameworks",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description: "Building robust server-side applications and RESTful APIs with Node.js, Spring Boot, and Laravel",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Engineering",
      description: "Designing optimized relational and document database schemas with MySQL, MongoDB, and PostgreSQL",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX & Prototyping",
      description: "Crafting intuitive user journeys, wireframes, and modern visual designs using Figma and Balsamiq",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const highlights = [
    {
      quote:
        'Software Engineering Intern at Unitec Software Solutions, Gampaha (July 2025 - January 2026), contributing to responsive frontend features and REST API integration.',
      name: 'Industry Experience',
      role: 'Unitec Software Solutions, Gampaha',
    },
    {
      quote:
        'Hands-on with React, Spring Boot, Node.js, Laravel, MongoDB, MySQL, and PostgreSQL while working in team-based and lead-based project setups.',
      name: 'Technical Breadth',
      role: 'Full-Stack Development',
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-[#0B1121] py-20">
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-[#0B1121] to-slate-900"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-indigo-900/10 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-tr from-blue-900/10 via-transparent to-transparent"></div>
      <div className="mesh-grid absolute inset-0 opacity-30"></div>
      
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">About Me</h2>
          <div className="w-20 h-2 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">Passionate about creating innovative software solutions, full-stack web applications, and continuous engineering growth.</p>
        </motion.div>

        {/* 4 Core Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-card group relative rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:border-cyan-500/30 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${service.color} p-3 text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-cyan-500/20`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </div>
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Balanced 2-Column Profile & Skills Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Professional Profile */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
              className="glass-card relative overflow-hidden rounded-3xl p-8 shadow-xl flex-1 flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
              <div>
                <h3 className="text-2xl font-bold bg-linear-to-r from-white to-slate-300 bg-clip-text text-transparent mb-5 flex items-center relative z-10">
                  <div className="p-2.5 bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl mr-4 text-white shadow-lg">
                    <Globe className="w-6 h-6" />
                  </div>
                  Professional Profile
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed font-medium relative z-10 text-sm sm:text-base">
                  Motivated and detail-oriented Software Engineering undergraduate who builds full-stack applications with a practical focus on maintainability, performance, and user value.
                </p>
                <p className="text-slate-400 leading-relaxed relative z-10 text-sm sm:text-base">
                  I enjoy collaborating in teams, solving technical challenges, and delivering scalable solutions across frontend, backend, and database architectures.
                </p>
              </div>

              {/* Stats Counters */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-5 bg-slate-900/50 rounded-2xl border border-slate-700/60 text-center shadow-lg backdrop-blur-sm group hover:bg-slate-800/60 transition-colors">
                  <h5 className="font-extrabold text-3xl sm:text-4xl bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-1 group-hover:scale-105 transition-transform">10</h5>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Featured Projects</p>
                </div>
                <div className="p-5 bg-slate-900/50 rounded-2xl border border-slate-700/60 text-center shadow-lg backdrop-blur-sm group hover:bg-slate-800/60 transition-colors">
                  <h5 className="font-extrabold text-3xl sm:text-4xl bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 group-hover:scale-105 transition-transform">1</h5>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Internship</p>
                </div>
              </div>
            </motion.div>
            
            {/* Education & Specialization */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="glass-card rounded-3xl p-8 shadow-xl"
            >
               <h4 className="font-bold text-xl mb-3 flex items-center text-white">
                 <div className="p-2.5 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl mr-4 text-white shadow-lg">
                   <Terminal className="w-6 h-6" />
                 </div>
                 <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Education & Specialization</span>
               </h4>
               <p className="text-cyan-300 font-bold mb-1 text-lg">BSc (Hons) in Software Engineering</p>
               <p className="text-slate-400 text-sm mb-4 font-medium">Kaatsu International University, Koswatta, Battaramulla (2022 - Present)</p>
               <div className="flex flex-wrap gap-2">
                 <span className="px-3.5 py-1.5 bg-slate-900/60 text-cyan-300 rounded-xl text-xs font-semibold border border-cyan-500/30">Spring Boot</span>
                 <span className="px-3.5 py-1.5 bg-slate-900/60 text-cyan-300 rounded-xl text-xs font-semibold border border-cyan-500/30">Node.js APIs</span>
                 <span className="px-3.5 py-1.5 bg-slate-900/60 text-cyan-300 rounded-xl text-xs font-semibold border border-cyan-500/30">Database Engineering</span>
                 <span className="px-3.5 py-1.5 bg-slate-900/60 text-cyan-300 rounded-xl text-xs font-semibold border border-cyan-500/30">Team Leadership</span>
                 <span className="px-3.5 py-1.5 bg-slate-900/60 text-cyan-300 rounded-xl text-xs font-semibold border border-cyan-500/30">Full-Stack Web</span>
               </div>
            </motion.div>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="glass-card rounded-3xl p-6 shadow-xl relative overflow-hidden border border-slate-700/60"
            >
              <blockquote className="text-base sm:text-lg italic font-medium text-slate-200 mb-2 leading-relaxed">
                "Code is like humor. When you have to explain it, it's bad."
              </blockquote>
              <cite className="text-xs font-semibold text-cyan-400 uppercase tracking-widest not-italic">— Cory House</cite>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Technical Skills & Tools */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="glass-card rounded-3xl p-8 shadow-xl flex-1 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <div className="p-2.5 bg-linear-to-br from-indigo-600 to-purple-600 rounded-2xl mr-4 text-white shadow-lg">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Technical Skills & Tools</span>
                </h3>

                <div className="space-y-6">
                  {Object.entries(skillGroups).map(([groupName, groupSkills]) => (
                    <div key={groupName}>
                      <h4 className="mb-3 text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">{groupName}</h4>
                      <div className="flex flex-wrap gap-2">
                        {groupSkills.map((skill) => (
                          <span
                            key={skill}
                            className="group flex cursor-default select-none items-center rounded-xl border border-slate-700 bg-slate-900/50 px-3.5 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/50 hover:bg-slate-800 hover:text-cyan-400"
                          >
                            <Code2 className="mr-1.5 h-3.5 w-3.5 text-slate-500 transition-colors group-hover:text-cyan-400" />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Professional Highlights (Industry Experience & Technical Breadth) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="glass-card rounded-3xl p-8 shadow-xl"
            >
              <h4 className="mb-4 text-lg font-bold text-white flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-cyan-400" />
                Professional Highlights
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item) => (
                  <div key={item.name} className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-4 flex flex-col justify-between">
                    <p className="text-xs leading-relaxed text-slate-300 mb-3">"{item.quote}"</p>
                    <div>
                      <p className="text-xs font-bold text-cyan-300">{item.name}</p>
                      <p className="text-[11px] text-slate-400 font-medium">{item.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
