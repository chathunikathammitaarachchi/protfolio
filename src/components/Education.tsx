import { motion } from 'framer-motion';
import { GraduationCap, ShieldCheck, HeartHandshake, Languages, Layout, School, Award } from 'lucide-react';

type QualificationItem = {
  title: string;
  institute: string;
  period: string;
  category: 'Degree' | 'Diploma & Certification' | 'Schooling';
  note?: string;
  versatilityTag?: string;
  icon: typeof GraduationCap;
};

const qualifications: QualificationItem[] = [
  {
    title: 'BSc (Hons) in Software Engineering',
    institute: 'Kaatsu International University, Koswatta, Battaramulla',
    period: '2022 - Present',
    category: 'Degree',
    note: 'Specializing in full-stack web application development, software design patterns, database architecture, and agile software development life cycles.',
    versatilityTag: 'Core Degree',
    icon: GraduationCap,
  },
  {
    title: 'Diploma in Cyber Security & Ethical Hacking',
    institute: 'SITC Campus, Kandy',
    period: 'Feb 2025 - August 2025',
    category: 'Diploma & Certification',
    note: 'Strengthened security mindset for building secure REST APIs, input sanitization, and backend vulnerability prevention.',
    versatilityTag: 'Technical Security Depth',
    icon: ShieldCheck,
  },
  {
    title: 'Diploma in Psychology & Counselling',
    institute: 'SITC Campus, Kandy',
    period: 'July 2025 - January 2026',
    category: 'Diploma & Certification',
    note: 'Fostered deep interpersonal dynamics, active listening, user empathy, team lead communication, and conflict management in team environments.',
    versatilityTag: 'Leadership & Soft Skills',
    icon: HeartHandshake,
  },
  {
    title: 'Diploma in English',
    institute: 'ICBT Campus, Gampaha',
    period: 'Feb 2022 - July 2022',
    category: 'Diploma & Certification',
    note: 'Refined professional oral and written communication skills for technical documentation, client interaction, and presentation.',
    versatilityTag: 'Global Communication',
    icon: Languages,
  },
  {
    title: 'Certificate in Typesetting & Layout Design',
    institute: 'Sri Lanka Institute of Printing',
    period: 'Feb 2023 - July 2023',
    category: 'Diploma & Certification',
    note: 'Developed sharp eye for visual typography, layout hierarchy, and user interface aesthetics.',
    versatilityTag: 'UI/UX & Aesthetics',
    icon: Layout,
  },
  {
    title: 'G.C.E. Advanced Level - Engineering Technology',
    institute: 'Galahitiyawa Central College, Ganemulla',
    period: '2020',
    category: 'Schooling',
    note: 'Gained strong foundations in engineering mathematics, physics, and technical problem-solving.',
    versatilityTag: 'Engineering Foundation',
    icon: School,
  },
  {
    title: 'G.C.E. Ordinary Level',
    institute: 'Parakrama National College, Gampaha',
    period: '2017',
    category: 'Schooling',
    note: 'Completed secondary education with high distinction grades.',
    versatilityTag: 'Secondary Education',
    icon: School,
  },
];

const Education = () => {
  return (
    <section id="education" className="relative overflow-hidden bg-[#0B1121] py-20">
      <div className="absolute inset-0 bg-linear-to-tr from-blue-900/10 via-transparent to-indigo-900/10"></div>
      <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl"></div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold text-cyan-300 backdrop-blur-md">
            <Award className="h-4 w-4" />
            <span>Academic Background & Qualifications</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Education & Certifications
          </h2>
          <div className="mx-auto mb-6 h-1.5 w-24 rounded-full bg-linear-to-r from-cyan-400 to-blue-600"></div>
          <p className="mx-auto max-w-3xl text-lg text-slate-400">
            A versatile blend of Software Engineering degree education, Cyber Security depth, Psychology soft skills, and UI/UX design training.
          </p>
        </motion.div>

        {/* Highlight Degree Card */}
        <div className="mb-12">
          {qualifications
            .filter((item) => item.category === 'Degree')
            .map((degree) => {
              const DegreeIcon = degree.icon;
              return (
                <motion.div
                  key={degree.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass-card relative overflow-hidden rounded-3xl p-8 md:p-10 border-2 border-cyan-500/40 shadow-2xl"
                >
                  <div className="absolute top-0 right-0 h-40 w-40 rounded-bl-full bg-linear-to-br from-cyan-500/20 to-blue-600/10"></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                    <div className="flex items-start gap-5">
                      <div className="rounded-2xl bg-linear-to-br from-cyan-500 to-blue-600 p-4 text-white shadow-lg">
                        <DegreeIcon className="h-8 w-8" />
                      </div>
                      <div>
                        <span className="inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold text-cyan-300 border border-cyan-500/30 mb-2">
                          {degree.versatilityTag}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                          {degree.title}
                        </h3>
                        <p className="mt-1 text-lg font-semibold text-cyan-400">
                          {degree.institute}
                        </p>
                        <p className="text-sm text-slate-400 mt-1">{degree.period}</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-slate-300 text-base leading-relaxed border-t border-slate-700/60 pt-6 relative z-10">
                    {degree.note}
                  </p>
                </motion.div>
              );
            })}
        </div>

        {/* Diplomas and Certifications Grid */}
        <h3 className="mb-8 text-xl font-bold text-white flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-cyan-400"></span>
          Diplomas & Specialized Certifications
        </h3>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {qualifications
            .filter((item) => item.category === 'Diploma & Certification')
            .map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="glass-card group flex flex-col justify-between rounded-3xl p-6 transition-all duration-400 hover:-translate-y-2 hover:border-cyan-500/40 shadow-lg"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="rounded-2xl bg-cyan-500/15 p-3 text-cyan-300 group-hover:bg-cyan-500/25 transition-colors">
                        <ItemIcon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full border border-slate-700 bg-slate-900/60 px-2.5 py-0.5 text-[11px] font-semibold text-slate-300">
                        {item.period}
                      </span>
                    </div>

                    <span className="inline-block rounded-md bg-slate-800/80 px-2.5 py-1 text-xs font-semibold text-cyan-300 border border-slate-700 mb-2">
                      {item.versatilityTag}
                    </span>

                    <h4 className="mb-1 text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm font-semibold text-slate-400">{item.institute}</p>
                    {item.note && (
                      <p className="mt-3 text-xs leading-relaxed text-slate-300">{item.note}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
        </div>

        {/* Secondary Education Accordion / Grid */}
        <h3 className="mb-6 text-lg font-bold text-slate-300 flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-500"></span>
          Secondary Education
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {qualifications
            .filter((item) => item.category === 'Schooling')
            .map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-sm flex items-start gap-4"
              >
                <div className="rounded-xl bg-slate-800 p-2.5 text-slate-400">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">{item.title}</h4>
                  <p className="text-xs font-medium text-cyan-400">{item.institute}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.period}</p>
                  <p className="mt-2 text-xs text-slate-400">{item.note}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

