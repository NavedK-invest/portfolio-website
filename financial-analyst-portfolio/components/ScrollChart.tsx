import React, { useState, useEffect, useRef } from 'react';

const ScrollChart: React.FC = () => {
    const pathRef = useRef<SVGPathElement>(null);
    const [pathLength, setPathLength] = useState(0);
    const [dashOffset, setDashOffset] = useState(0);

    useEffect(() => {
        if (pathRef.current) {
            const length = pathRef.current.getTotalLength();
            setPathLength(length);
            setDashOffset(length); // Start with line hidden
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (pathLength > 0) {
                const scrollHeight = document.documentElement.scrollHeight;
                const clientHeight = document.documentElement.clientHeight;
                const scrollTop = window.scrollY;

                if (scrollHeight === clientHeight) {
                    setDashOffset(0); // If no scrollbar, show full chart
                    return;
                }
                
                const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
                const newDashOffset = pathLength * (1 - scrollPercentage);
                setDashOffset(Math.max(0, newDashOffset));
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Run once on mount in case page doesn't start at top
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathLength]);
    
    // A smooth, curved path that fits nicely within the viewBox
    const pathData = "M 20,290 C 25,250 15,200 20,160 S 25,80 20,50 C 15,20 25,10 20,5";
    
    return (
        <div className="fixed top-0 left-0 h-full w-24 z-10 pointer-events-none hidden lg:block" aria-hidden="true">
            <svg width="100%" height="100%" viewBox="0 0 40 300" preserveAspectRatio="xMidYMid meet">
                 <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#14B8A6" stopOpacity="0" />
                        <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.3" />
                    </linearGradient>
                </defs>
                <path
                    d={pathData}
                    fill="url(#chartGradient)"
                    stroke="none"
                />
                <path
                    ref={pathRef}
                    d={pathData}
                    fill="none"
                    stroke="#14B8A6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray={pathLength}
                    strokeDashoffset={dashOffset}
                />
            </svg>
        </div>
    );
};

export default ScrollChart;