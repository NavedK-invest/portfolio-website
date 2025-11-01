import { useState, useEffect, RefObject } from 'react';

// Fix: Define a custom options type to include `triggerOnce`. This resolves the error on line 4 where
// `triggerOnce` was not a known property on `IntersectionObserverInit`.
interface UseOnScreenOptions extends IntersectionObserverInit {
    triggerOnce?: boolean;
}

export const useOnScreen = <T extends Element>(ref: RefObject<T>, options: UseOnScreenOptions = { threshold: 0.3, triggerOnce: true }): boolean => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        // Fix: Destructure to separate the custom `triggerOnce` property from standard IntersectionObserver options.
        // This also fixes the error on line 11 as `triggerOnce` is now a known property.
        const { triggerOnce, ...observerOptions } = options;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIntersecting(true);
                if (triggerOnce && ref.current) {
                    observer.unobserve(ref.current);
                }
            }
        }, observerOptions);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return isIntersecting;
};
