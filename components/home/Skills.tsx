'use client';

import { MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef } from 'react';
import SectionTitle from '@/components/SectionTitle';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const elements = containerRef.current?.querySelectorAll('.slide-up');
            if (!elements?.length) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up', {
                opacity: 0,
                y: 40,
                stagger: 0.15,
            });
        },
        { scope: containerRef }
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef }
    );

    return (
        <section id="my-stack" ref={containerRef} className="pb-section">
            <div className="container">
                <SectionTitle title="My Stack" />

                <div className="space-y-20">
                    {MY_STACK.map((section) => (
                        <div className="grid sm:grid-cols-12" key={section.title}>
                            {/* Category Title */}
                            <div className="sm:col-span-5">
                                <p className="slide-up text-5xl font-anton leading-none text-muted-foreground uppercase">
                                    {section.title}
                                </p>
                            </div>

                            {/* Skills */}
                            <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
                                {section.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="slide-up flex gap-3.5 items-center group"
                                    >
                                        <div className="relative w-10 h-10 flex items-center justify-center">
                                            <Image
                                                src={item.icon}
                                                alt={item.name}
                                                width={40}
                                                height={40}
                                                className="text-white transition-transform duration-300 group-hover:scale-110 object-contain w-full h-full"
                                            />
                                        </div>
                                        <span className="text-2xl transition-colors duration-300 group-hover:text-primary">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
