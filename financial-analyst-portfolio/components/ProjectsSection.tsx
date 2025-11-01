
import React, { useRef } from 'react';
import type { Project } from '../types';
import { useOnScreen } from '../hooks/useOnScreen';

const projectsData: Project[] = [
    {
        title: 'Algorithmic Trading Bot',
        description: 'A Python-based bot that executes trades based on technical indicators and market sentiment analysis.',
        tags: ['Python', 'API Integration', 'Quantitative Analysis'],
        imageUrl: 'https://picsum.photos/seed/project1/600/400',
        link: '#',
    },
    {
        title: 'Real Estate Investment Model',
        description: 'An Excel model for forecasting ROI on commercial real estate properties, with sensitivity analysis.',
        tags: ['Excel', 'Financial Modeling', 'Valuation'],
        imageUrl: 'https://picsum.photos/seed/project2/600/400',
        link: '#',
    },
    {
        title: 'Sector Performance Dashboard',
        description: 'An interactive Power BI dashboard visualizing historical and real-time performance of S&P 500 sectors.',
        tags: ['Power BI', 'Data Visualization', 'Market Research'],
        imageUrl: 'https://picsum.photos/seed/project3/600/400',
        link: '#',
    },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;
        const rotateY = (x / width) * 20;
        const rotateX = (-y / height) * 20;
        cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    };

    return (
        <div 
            className="perspective-container group"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                ref={cardRef}
                className="tilt-card bg-[#1E293B] rounded-lg overflow-hidden shadow-2xl h-full flex flex-col border border-slate-700/50"
            >
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity" />
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold font-poppins text-slate-100 mb-2">{project.title}</h3>
                    <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs bg-[#0A192F] text-[#14B8A6] px-2 py-1 rounded-full">{tag}</span>
                        ))}
                    </div>
                    <a href={project.link} className="text-[#FBBF24] font-semibold hover:underline self-start">
                        View Details &rarr;
                    </a>
                </div>
            </div>
        </div>
    );
};


const ProjectsSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isOnScreen = useOnScreen(ref);

    return (
        <section id="projects" ref={ref} className="py-20 md:py-32">
             <div className={`transition-all duration-1000 ${isOnScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-12">
                    <span className="text-[#FBBF24]">/</span> Projects & Case Studies
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
