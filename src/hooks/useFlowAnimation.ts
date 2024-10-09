'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export default function useFlowAnimation() {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    const callback = useCallback((entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setIsInView(true);
            } else {
                setIsInView(false);
            }
        });
    }, []);

    useEffect(() => {
        const currentRef = ref.current;

        if (!currentRef) return;

        const observer = new IntersectionObserver(callback, {
            root: null,
            rootMargin: '300px',
            threshold: 0,
        });

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [callback, isInView]);

    return {
        isInView: isInView,
        animationRef: ref,
    };
}
