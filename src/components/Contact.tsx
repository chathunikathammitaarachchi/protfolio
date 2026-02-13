import { useState, type FormEvent } from 'react';
import { Mail, Linkedin, Globe, Send, Loader2, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch("https://formsubmit.co/ajax/chathunikathammitaarachchi74@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0B1121] relative overflow-hidden">
      {/* Professional Dark Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-cyan-900/20"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-900/10 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-indigo-900/10 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <div className="bg-slate-800/80 p-8 md:p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden border border-slate-700/50 backdrop-blur-sm">
             {/* Decorative circles */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-cyan-500 opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-blue-600 opacity-10 blur-3xl"></div>
            
            <h3 className="text-3xl font-bold mb-8 relative z-10 text-white">Contact Information</h3>
            
            <div className="space-y-8 relative z-10">
              <a href="mailto:chathunikathammitaarachchi74@gmail.com" className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300 group">
                <div className="p-3 bg-slate-900/50 rounded-xl shadow-md group-hover:bg-cyan-900/40 transition-colors text-cyan-400 border border-slate-700">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">Email Me</h4>
                  <p className="text-slate-400 break-all group-hover:text-cyan-400 transition-colors">chathunikathammitaarachchi74@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/chathunika-thammitaarachchi-b2b9b2314/" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300 group">
                <div className="p-3 bg-slate-900/50 rounded-xl shadow-md group-hover:bg-blue-900/40 transition-colors text-blue-400 border border-slate-700">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">LinkedIn</h4>
                  <p className="text-slate-400 group-hover:text-blue-400 transition-colors">Connect professionally</p>
                </div>
              </a>

              <a href="https://www.behance.net/chathunika2001" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300 group">
                <div className="p-3 bg-slate-900/50 rounded-xl shadow-md group-hover:bg-purple-900/40 transition-colors text-purple-400 border border-slate-700">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">Behance</h4>
                  <p className="text-slate-400 group-hover:text-purple-400 transition-colors">View my design portfolio</p>
                </div>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-800/50 p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-700/50 flex flex-col justify-between backdrop-blur-sm">
            <input type="hidden" name="_subject" value="New Portfolio Contact Submission" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

             {isSuccess && (
              <div className="mb-6 p-4 bg-green-900/20 text-green-400 rounded-2xl flex items-center animate-fade-in-down border border-green-500/30 shadow-lg">
                <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="font-semibold">Message sent successfully! I'll be in touch soon.</span>
              </div>
            )}
            
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600 text-white hover:bg-slate-900 focus:bg-slate-900"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600 text-white hover:bg-slate-900 focus:bg-slate-900"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-600 text-white hover:bg-slate-900 focus:bg-slate-900"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:hover:translate-y-0 disabled:shadow-none flex items-center justify-center space-x-2 mt-4"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
