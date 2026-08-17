import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

type EducationItem = {
  title: string;
  institute: string;
  period: string;
  note?: string;
};

const educationItems: EducationItem[] = [
  {
    title: 'BSc (Hons) in Software Engineering',
    institute: 'Kaatsu International University',
    period: '2022 - Present',
  },
  {
    title: 'Diploma in Cyber Security and Ethical Hacking',
    institute: 'SITC Campus',
    period: 'Feb 2025 - Aug 2025',
    note: 'Strengthened security mindset for building safer backend services.',
  },
  {
    title: 'Diploma in Psychology and Counselling',
    institute: 'SITC Campus',
    period: 'Jul 2025 - Jan 2026',
    note: 'Improved communication, empathy, and team collaboration skills.',
  },
];

const Education = () => {
  return (
    <section id="education" className="relative overflow-hidden bg-[#0B1121] py-20">
      <div className="absolute inset-0 bg-linear-to-tr from-blue-900/10 via-transparent to-indigo-900/10"></div>

      <div className="relative z-10 mx-auto w-full max-w-384 px-3 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">Education</h2>
          <div className="mx-auto mb-6 h-1.5 w-24 rounded-full bg-linear-to-r from-cyan-400 to-blue-600"></div>
          <p className="mx-auto max-w-3xl text-lg text-slate-400">
            Relevant academic background that supports both technical depth and professional soft skills.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {educationItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-card rounded-3xl p-6"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-cyan-500/15 p-3 text-cyan-300">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm font-semibold text-cyan-300">{item.institute}</p>
              <p className="mt-1 text-sm text-slate-400">{item.period}</p>
              {item.note && <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.note}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
