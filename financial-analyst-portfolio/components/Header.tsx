
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Personal', href: '#personal' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#0A192F]/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex justify-between items-center py-4">
                    <a href="#" onClick={(e) => handleNavClick(e, '#hero')} className="text-xl font-poppins font-bold text-[#FBBF24]">
                        J. Doe
                    </a>
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link, index) => (
                            <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-[#E2E8F0] hover:text-[#14B8A6] transition-colors duration-300 font-medium" style={{ animationDelay: `${index * 100}ms` }}>
                                {link.name}
                            </a>
                        ))}
                    </nav>
                     <button className="md:hidden text-2xl">
                        {/* Mobile menu icon can be added here */}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
