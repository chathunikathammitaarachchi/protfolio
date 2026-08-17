import { motion } from 'framer-motion';
import { Quote, Star, UserCheck, ShieldCheck, Award } from 'lucide-react';

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  organization: string;
  highlight: string;
  rating: number;
  badgeIcon: typeof UserCheck;
};

const testimonials: Testimonial[] = [
  {
    quote:
      'Chathunika demonstrated impressive full-stack proficiency during her internship at Unitec Software Solutions, Gampaha. Her work with React, Spring Boot, and RESTful APIs was structured, clean, and delivered ahead of project schedules.',
    author: 'Senior Software Engineer & Team Mentor',
    role: 'Internship Supervisor',
    organization: 'Unitec Software Solutions, Gampaha',
    highlight: 'Full-Stack REST API & React Delivery',
    rating: 5,
    badgeIcon: ShieldCheck,
  },
  {
    quote:
      'As Team Lead for Outing Aura and Auditorium Management projects, Chathunika showed exceptional leadership. She delegated tasks effectively using Jira & Trello, conducted daily stand-ups, and guided her team through complex backend-frontend integrations.',
    author: 'Academic Project Supervisor',
    role: 'Faculty of Software Engineering',
    organization: 'Kaatsu International University, Koswatta, Battaramulla',
    highlight: 'Team Leadership & Agile Project Management',
    rating: 5,
    badgeIcon: Award,
  },
  {
    quote:
      'Working alongside Chathunika on our group projects was smooth and empowering. She takes initiative in resolving backend bottlenecks, designs intuitive MongoDB/SQL schemas, and maintains a highly collaborative environment.',
    author: 'Full-Stack Developer & Peer',
    role: 'Group Project Collaborator',
    organization: 'Software Engineering Degree Cohort',
    highlight: 'Collaborative Problem-Solving & Schema Architecture',
    rating: 5,
    badgeIcon: UserCheck,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#0B1121] py-20">
      <div className="absolute inset-0 bg-linear-to-b from-slate-900/60 via-[#0B1121] to-slate-900/60"></div>
      <div className="absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold text-cyan-300 backdrop-blur-md">
            <Quote className="h-4 w-4" />
            <span>Endorsements & Recommendations</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Testimonials
          </h2>
          <div className="mx-auto mb-6 h-1.5 w-24 rounded-full bg-linear-to-r from-cyan-400 to-blue-600"></div>
          <p className="mx-auto max-w-3xl text-lg text-slate-400">
            Feedback and recommendations from internship supervisors, academic mentors, and project teammates regarding leadership, technical execution, and work ethic.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => {
            const BadgeIcon = item.badgeIcon;
            return (
              <motion.div
                key={item.author}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card group relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/40 shadow-xl"
              >
                <div className="absolute top-0 right-0 h-24 w-24 rounded-tr-3xl bg-linear-to-bl from-cyan-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-slate-900/60 px-3 py-1 text-xs font-semibold text-cyan-300">
                      <BadgeIcon className="h-3.5 w-3.5" />
                      <span>Verified</span>
                    </div>
                  </div>

                  <blockquote className="mb-6 text-sm leading-relaxed text-slate-300 italic">
                    "{item.quote}"
                  </blockquote>
                </div>

                <div>
                  <div className="mb-4 rounded-xl border border-slate-700/60 bg-slate-900/40 p-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                      Key Impact
                    </p>
                    <p className="mt-0.5 text-xs text-slate-300 font-medium">
                      {item.highlight}
                    </p>
                  </div>

                  <div className="border-t border-slate-700/60 pt-4">
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.author}
                    </h3>
                    <p className="text-xs font-semibold text-cyan-400">{item.role}</p>
                    <p className="text-xs text-slate-400">{item.organization}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
