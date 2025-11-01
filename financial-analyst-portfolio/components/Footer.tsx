
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#1E293B]/20 border-t border-slate-800">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 py-6 text-center text-slate-500">
                <p>&copy; {new Date().getFullYear()} John Doe. All Rights Reserved.</p>
                <p className="text-sm mt-2">Built with React & Tailwind CSS.</p>
            </div>
        </footer>
    );
};

export default Footer;
