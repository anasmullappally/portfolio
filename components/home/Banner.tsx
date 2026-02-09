'use client';

import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { calculateExperience } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    const experienceYears = calculateExperience(
        GENERAL_INFO.carrerStartDate
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 }
            );
        },
        { scope: containerRef }
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />

            <div
                ref={containerRef}
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
            >
                {/* Left Content */}
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[600px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">FULL STACK</span>
                        <br /> <span className="ml-4">DEVELOPER</span>
                    </h1>

                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            {GENERAL_INFO.name}
                        </span>
                        . A Full Stack Developer specializing in building scalable,
                        high-performance web applications using Next.js, React,
                        Node.js, and modern cloud technologies.
                    </p>

                    <Button
                        as="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(
                            GENERAL_INFO.emailSubject
                        )}&body=${encodeURIComponent(GENERAL_INFO.emailBody)}`}
                        variant="primary"
                        className="mt-9 banner-button slide-up-and-fade"
                    >
                        Let’s Work Together
                    </Button>
                </div>

                {/* Right Stats */}
                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            {experienceYears}+
                        </h5>
                        <p className="text-muted-foreground">
                            Years Professional Experience
                        </p>
                    </div>

                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            {GENERAL_INFO.totalProjects}+
                        </h5>
                        <p className="text-muted-foreground">
                            Projects Delivered
                        </p>
                    </div>

                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            {GENERAL_INFO.productionDeployments}+
                        </h5>
                        <p className="text-muted-foreground">
                            Production Deployments
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
