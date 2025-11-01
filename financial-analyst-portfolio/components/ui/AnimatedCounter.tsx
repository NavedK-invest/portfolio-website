
import React, { useState, useEffect, useRef } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000, prefix = '', suffix = '', className = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isOnScreen = useOnScreen(ref);

    useEffect(() => {
        if (isOnScreen) {
            let start = 0;
            const endValue = end;
            if (start === endValue) return;

            const totalFrames = duration / (1000 / 60);
            const increment = endValue / totalFrames;

            const counter = () => {
                start += increment;
                if (start < endValue) {
                    setCount(Math.ceil(start));
                    requestAnimationFrame(counter);
                } else {
                    setCount(endValue);
                }
            };
            requestAnimationFrame(counter);
        }
    }, [end, duration, isOnScreen]);

    return (
        <span ref={ref} className={className}>
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
};

export default AnimatedCounter;
