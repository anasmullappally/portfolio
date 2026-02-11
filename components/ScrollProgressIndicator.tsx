'use client';
import { useRef } from 'react';
import { useLenis } from 'lenis/react';

const ScrollProgressIndicator = () => {
    const scrollBarRef = useRef<HTMLDivElement>(null);

    useLenis(({ progress }) => {
        if (scrollBarRef.current) {
            scrollBarRef.current.style.width = `${progress * 100}%`;
        }
    });

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-foreground/10">
            <div
                className="h-full bg-primary transition-all duration-75 ease-out"
                ref={scrollBarRef}
                style={{ width: '0%' }}
            ></div>
        </div>
    );
};

export default ScrollProgressIndicator;
