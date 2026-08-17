import { motion } from 'framer-motion';
import { BriefcaseBusiness, CheckCircle2 } from 'lucide-react';

const responsibilities = [
  'Developed responsive web application features using React, HTML, CSS, and JavaScript.',
  'Built and integrated RESTful APIs using Spring Boot, Node.js, and Laravel.',
  'Worked with MongoDB, MySQL, and PostgreSQL for efficient data management.',
  'Collaborated with development teams for implementation, debugging, testing, and maintenance.',
  'Used GitHub for version control, branch workflows, and project collaboration.',
  'Contributed to bug fixing and performance optimization during release cycles.',
];

const Experience = () => {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#0B1121] py-20">
      <div className="absolute inset-0 bg-linear-to-b from-slate-900/40 via-transparent to-slate-900/40"></div>

      <div className="relative z-10 mx-auto w-full max-w-384 px-3 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">Work Experience</h2>
          <div className="mx-auto mb-6 h-1.5 w-24 rounded-full bg-linear-to-r from-cyan-400 to-blue-600"></div>
          <p className="mx-auto max-w-3xl text-lg text-slate-400">
            Professional internship experience focused on full-stack development, API integration, and software quality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="glass-card rounded-3xl p-8 md:p-10"
        >
          <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="flex items-center text-2xl font-bold text-white">
                <BriefcaseBusiness className="mr-3 h-6 w-6 text-cyan-400" />
                Software Engineering Intern
              </h3>
              <p className="mt-1 text-base font-semibold text-cyan-300">Unitec Software Solutions</p>
            </div>
            <p className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-1 text-sm font-medium text-slate-300">
              July 2025 - January 2026
            </p>
          </div>

          <ul className="grid gap-3 md:grid-cols-2">
            {responsibilities.map((item) => (
              <li key={item} className="flex items-start rounded-2xl border border-slate-700/70 bg-slate-900/40 p-4 text-sm text-slate-300">
                <CheckCircle2 className="mr-3 mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
