import React, { useRef } from 'react';
import AnimatedCounter from './ui/AnimatedCounter';
import { useOnScreen } from '../hooks/useOnScreen';

const HeroSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isOnScreen = useOnScreen(ref);
    
    return (
        <section id="hero" ref={ref} className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A192F]"></div>
            
            <div className={`z-10 transition-all duration-1000 ${isOnScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-4">
                    John Doesss
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#FBBF24] font-semibold font-poppins mb-6">
                    Financial Analyst & Data Strategist
                </h2>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 font-lato">
                    Expert in Market Research, Investment Analysis, and Financial Modeling.
                </p>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="p-4 border border-slate-700/50 rounded-lg bg-[#1E293B]/30 backdrop-blur-sm">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#14B8A6]">
                            <AnimatedCounter end={98} suffix="%" />
                        </h3>
                        <p className="text-slate-400 mt-2">Model Accuracy</p>
                    </div>
                    <div className="p-4 border border-slate-700/50 rounded-lg bg-[#1E293B]/30 backdrop-blur-sm">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#14B8A6]">
                            <AnimatedCounter end={50} prefix="$" suffix="M+" />
                        </h3>
                        <p className="text-slate-400 mt-2">Assets Analyzed</p>
                    </div>
                    <div className="p-4 border border-slate-700/50 rounded-lg bg-[#1E293B]/30 backdrop-blur-sm">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#14B8A6]">
                            <AnimatedCounter end={15} suffix="%" />
                        </h3>
                        <p className="text-slate-400 mt-2">Portfolio Growth</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;