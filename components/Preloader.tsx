'use client';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';

gsap.registerPlugin(useGSAP);

const Preloader = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(true);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                defaults: {
                    ease: 'power3.inOut',
                },
                onComplete: () => {
                    setIsVisible(false);
                }
            });

            // 1. Animate text in (Slide up)
            tl.to('.name-text span', {
                y: 0,
                stagger: 0.05,
                duration: 0.8,
                ease: "power4.out"
            });

            // 2. Brief pause, then slide text out
            tl.to('.name-text span', {
                y: '-100%',
                stagger: 0.02,
                duration: 0.5,
                delay: 0.8,
                ease: "power4.in"
            });

            // 3. Slide the black columns out (synchronized with text exit)
            tl.to('.preloader-item', {
                y: '100%',
                duration: 0.8,
                stagger: 0.05,
                ease: 'expo.inOut',
            }, '-=0.4');

            // 4. Fade the entire container
            tl.to(preloaderRef.current, {
                autoAlpha: 0,
                duration: 0.5,
            }, '-=0.2');
        },
        { scope: preloaderRef },
    );

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex overflow-hidden bg-transparent" ref={preloaderRef}>
            {[...Array(10)].map((_, i) => (
                <div key={i} className="preloader-item h-full w-[10%] bg-black"></div>
            ))}

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <p className="name-text flex text-[12vw] lg:text-[120px] font-anton leading-none overflow-hidden uppercase whitespace-nowrap">
                    {GENERAL_INFO?.name?.split('').map((char, index) => (
                        <span key={index} className="inline-block translate-y-full">
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default Preloader;
