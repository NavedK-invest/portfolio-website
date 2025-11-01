
import React, { useRef } from 'react';
import { LinkedInIcon, EmailIcon, GitHubIcon } from './icons/Icons';
import { useOnScreen } from '../hooks/useOnScreen';

const ContactSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isOnScreen = useOnScreen(ref);

    return (
        <section id="contact" ref={ref} className="py-20 md:py-32">
             <div className={`transition-all duration-1000 ${isOnScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
                        <span className="text-[#FBBF24]">/</span> Get In Touch
                    </h2>
                    <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
                        I'm always open to discussing new opportunities, creative ideas, or how we can collaborate. Feel free to reach out.
                    </p>

                    <div className="bg-[#0A192F] p-8 rounded-lg border border-slate-800 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#14B8A6]/20 via-[#FBBF24]/20 to-[#14B8A6]/20 animated-gradient opacity-30"></div>
                        <form className="relative z-10 space-y-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <input type="text" placeholder="Your Name" className="w-full bg-[#1E293B] border border-slate-700 rounded-md px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]" />
                                <input type="email" placeholder="Your Email" className="w-full bg-[#1E293B] border border-slate-700 rounded-md px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]" />
                            </div>
                            <textarea placeholder="Your Message" rows={5} className="w-full bg-[#1E293B] border border-slate-700 rounded-md px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"></textarea>
                            <button type="submit" className="px-8 py-3 bg-[#14B8A6] text-[#0A192F] font-bold rounded-md hover:bg-opacity-80 transition-all duration-300 shadow-[0_0_15px_rgba(20,184,166,0.5)]">
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="mt-12 flex justify-center items-center gap-6">
                         <a href="#" className="text-slate-400 hover:text-[#FBBF24] transition-colors duration-300"><LinkedInIcon className="h-7 w-7"/></a>
                         <a href="#" className="text-slate-400 hover:text-[#FBBF24] transition-colors duration-300"><EmailIcon className="h-7 w-7"/></a>
                         <a href="#" className="text-slate-400 hover:text-[#FBBF24] transition-colors duration-300"><GitHubIcon className="h-7 w-7"/></a>
                    </div>
                </div>
             </div>
        </section>
    );
};

export default ContactSection;
