import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import PersonalSection from './components/PersonalSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ScrollChart from './components/ScrollChart';
import InteractiveBackground from './components/InteractiveBackground';

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2800); // Simulate loading time
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const cursorStyle: React.CSSProperties = {
        left: `${cursorPos.x}px`,
        top: `${cursorPos.y}px`,
        transform: `translate(-50%, -50%)`,
    }

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="text-[#E2E8F0] relative overflow-x-hidden bg-transparent">
            <InteractiveBackground />
            <ScrollChart />
            
            <div
                className="pointer-events-none fixed hidden md:block z-50 w-2 h-2 bg-[#14B8A6] rounded-full transition-transform duration-200"
                style={cursorStyle}
            ></div>

            <Header />
            <main className="container mx-auto px-6 md:px-12 lg:px-20 isolate">
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <PersonalSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default App;