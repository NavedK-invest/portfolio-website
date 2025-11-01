
import React from 'react';

const iconProps = {
    className: "h-8 w-8 text-[#E2E8F0] group-hover:text-[#14B8A6] transition-colors duration-300",
};

export const ExcelIcon: React.FC = () => (
    <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2h14a2 2 0 012 2v2h4v14a2 2 0 01-2 2H8a2 2 0 01-2-2v-4H2V2zm14 2v2H4V4h12zM8 8h10v12H8V8zm-4 4h2v2H4v-2zm0 4h2v2H4v-2zm0-8h2v2H4V8zm11 2l-2 3 2 3h-2l-1-1.5L9 19H7l2-3-2-3h2l1 1.5L11 10h2z"/>
    </svg>
);
export const PowerBIIcon: React.FC = () => (
    <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 12v-6h5v6H3zm7 0v-9h11v9H10z"/>
    </svg>
);
export const PythonIcon: React.FC = () => (
    <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.27 12.02c.3-.29.43-.72.3-1.15l-.83-3.03c-.1-.36-.45-.63-.84-.63H11.5v-1.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75V7.25h-1.4c-.4 0-.75.27-.85.63l-.83 3.03c-.13.43 0 .86.3 1.15C7.5 12.2 7.7 12.5 7.7 13v1.5c0 .41.34.75.75.75s.75-.34.75-.75V13h1.4c.4 0 .75-.27.85-.63l.83-3.03c.04-.15.04-.31 0-.46l-.83 3.03c.13.43 0 .86-.3 1.15-.28.18-.48.48-.48.85v1.5c0 .41.34.75.75.75s.75-.34.75-.75v-1.5h1.4c.4 0 .75-.27.85-.63l.83-3.03c.13-.43 0-.86-.3-1.15s-.7-.48-.7-.85v-1.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75V12h-1.4c-.4 0-.75.27-.85.63l-.83 3.03c-.04.15-.04.31 0 .46l.83-3.03c.3.29.43.72.3 1.15.28-.18.48-.48.48-.85z"/>
    </svg>
);
export const BloombergIcon: React.FC = () => (
    <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3 2h2v8H9V8zm4 0h2v8h-2V8z"/>
    </svg>
);
export const TableauIcon: React.FC = () => (
    <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h4v16H4V4zm6 0h4v16h-4V4zm6 0h4v16h-4V4zM5 5v3h2V5H5zm6 0v5h2V5h-2zm6 0v2h2V5h-2zm-6 7v3h2v-3h-2zm-6 2v3h2v-3H5zm6 2v2h2v-2h-2z"/>
    </svg>
);

export const LinkedInIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "h-6 w-6"}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
    </svg>
);

export const EmailIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "h-6 w-6"}>
        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path>
    </svg>
);

export const GitHubIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "h-6 w-6"}>
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.043c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
    </svg>
);
