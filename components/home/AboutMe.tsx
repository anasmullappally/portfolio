'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import { GENERAL_INFO } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container }
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container }
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    I build scalable, high-performance web systems that combine clean
                    architecture, modern UI, and intelligent automation.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    About Me
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hi, I&apos;m {GENERAL_INFO.name}.
                        </p>
                    </div>

                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[520px]">
                            <p className="slide-up-and-fade">
                                I&apos;m a Full Stack Developer with professional experience
                                building production-ready applications using Next.js, React,
                                Node.js, and modern cloud technologies. I focus on delivering
                                fast, scalable, and SEO-optimized solutions.
                            </p>

                            <p className="mt-3 slide-up-and-fade">
                                I have worked on AI-powered search systems using OpenAI and
                                Pinecone, real-time communication platforms with Socket.IO,
                                and high-performance APIs optimized with Redis caching and
                                PostgreSQL. My work emphasizes performance, clean architecture,
                                and long-term maintainability.
                            </p>

                            <p className="mt-3 slide-up-and-fade">
                                From marketing websites to complex fleet management systems,
                                I enjoy turning business requirements into efficient technical
                                solutions that scale.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
