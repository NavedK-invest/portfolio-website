
import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const PersonalSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isOnScreen = useOnScreen(ref);

    return (
        <section id="personal" ref={ref} className="py-20 md:py-32 relative">
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#FBBF24]/5 via-transparent to-transparent opacity-50 blur-3xl"></div>
            <div className={`transition-all duration-1000 ${isOnScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-4xl mx-auto text-center bg-[#1E293B]/30 backdrop-blur-md p-8 md:p-12 rounded-lg border border-slate-700/50">
                    <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                        <span className="text-[#FBBF24]">/</span> Beyond the Numbers
                    </h2>
                    <p className="text-lg text-slate-300 mb-4 font-lato">
                        I am passionate about leveraging financial literacy for community empowerment. I volunteer as a mentor for 'FinFuture', a non-profit organization dedicated to teaching financial basics to underserved youth. This work is incredibly rewarding and reinforces my belief in the power of knowledge to create opportunities.
                    </p>
                    <p className="text-lg text-slate-300 font-lato">
                        Additionally, I actively participate in local hackathons, collaborating with developers and designers to build innovative fintech solutions aimed at solving real-world financial challenges.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PersonalSection;
