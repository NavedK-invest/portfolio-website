import React, { useRef } from 'react';
import type { Experience } from '../types';
import { ExcelIcon, PowerBIIcon, PythonIcon, BloombergIcon, TableauIcon } from './icons/Icons';
import { useOnScreen } from '../hooks/useOnScreen';

const experienceData: Experience[] = [
    {
        year: '2020 - Present',
        role: 'Senior Financial Analyst',
        company: 'Quantum Analytics Inc.',
        description: 'Lead analyst for the equity research team, focusing on tech and renewable energy sectors.',
        achievements: [
            'Developed a predictive model improving forecast accuracy by 15%.',
            'Managed a portfolio of over $50M in assets.',
            'Published 5 major industry reports cited by leading financial news outlets.'
        ]
    },
    {
        year: '2017 - 2020',
        role: 'Financial Analyst',
        company: 'Apex Financial Group',
        description: 'Conducted detailed financial modeling, valuation, and due diligence for M&A deals.',
        achievements: [
            'Contributed to 10+ successful M&A transactions valued at over $200M.',
            'Automated reporting processes with Python, saving 20 hours per week.',
            'Mentored junior analysts and improved team onboarding efficiency.'
        ]
    },
    {
        year: '2016 - 2017',
        role: 'Junior Analyst',
        company: 'Momentum Investments',
        description: 'Supported senior analysts with market research, data gathering, and preparing investment summaries.',
        achievements: [
            'Assisted in creating valuation models for over 50 companies.',
            'Maintained and updated a database of key market indicators.',
        ]
    }
];

const skills = [
    { name: 'Excel', icon: <ExcelIcon /> },
    { name: 'Power BI', icon: <PowerBIIcon /> },
    { name: 'Python', icon: <PythonIcon /> },
    { name: 'Bloomberg', icon: <BloombergIcon /> },
    { name: 'Tableau', icon: <TableauIcon /> },
];

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-12">
        <span className="text-[#FBBF24]">/</span> {children}
    </h2>
);

const AboutSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isOnScreen = useOnScreen(ref, { threshold: 0.1 });

    return (
        <section id="about" ref={ref} className="py-20 md:py-32">
            <div className={`transition-all duration-1000 ${isOnScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <SectionTitle>About & Experience</SectionTitle>

                <div className="relative max-w-4xl mx-auto mt-16">
                    <div className="absolute left-4 top-2 h-full w-0.5 bg-slate-700/50 md:left-1/2 md:-translate-x-1/2"></div>
                    {experienceData.map((item, index) => (
                         <div key={index} className={`mb-12 flex w-full items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="hidden md:block md:w-1/2"></div>
                            <div className="w-full pl-12 md:w-1/2 md:pl-0 md:px-8">
                                <div className="p-6 bg-[#1E293B]/50 border border-slate-700/50 rounded-lg shadow-lg backdrop-blur-sm relative">
                                    <div className={`absolute top-5 -translate-y-1/2 w-4 h-4 bg-[#14B8A6] rounded-full border-4 border-[#0A192F] -left-[3.5rem] md:left-auto ${index % 2 === 0 ? 'md:-right-10' : 'md:-left-10'}`}></div>
                                    <p className="text-[#14B8A6] font-semibold mb-1">{item.year}</p>
                                    <h3 className="text-xl font-bold text-slate-100 mb-2">{item.role}</h3>
                                    <p className="text-[#FBBF24] font-medium mb-3">{item.company}</p>
                                    <p className="text-slate-400 text-sm mb-3">{item.description}</p>
                                    <ul className="list-disc list-inside text-slate-400 text-sm space-y-1">
                                        {item.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20">
                    <h3 className="text-2xl font-bold font-poppins text-center mb-8">Technical Skills</h3>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                        {skills.map((skill) => (
                            <div key={skill.name} className="group flex flex-col items-center gap-2">
                                {skill.icon}
                                <p className="text-slate-400 group-hover:text-[#14B8A6] transition-colors duration-300">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;