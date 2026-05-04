"use client"
import gsap from 'gsap'
import Link from 'next/link'
import React, { useLayoutEffect, useRef } from 'react'
import { BsArrowRight } from 'react-icons/bs'


const HeroSection = (): React.JSX.Element => {
    const container = useRef<HTMLDivElement | null>(null);
    const headerRef = useRef<HTMLHeadingElement | null>(null);
    const subheaderRef = useRef<HTMLParagraphElement | null>(null);
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(headerRef.current, {
                y: 40,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out"
            }).from(
                subheaderRef.current,
                {
                    y: 20,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                },
                "-=0.6"
            );
        }, container);

        return () => ctx.revert();
    }, []);
    return (

        <section ref={container} className="bg-yellow-200 max-sm:h-[80vh] h-screen relative  w-full
    ">
            {/* upload video to cloudinary later */}
            <video autoPlay loop muted playsInline preload="metadata" className="inset-0 w-full h-full object-cover" poster="/images/hero-image.jpg">
                <source src="/images/labs.mp4" type="video/mp4" />Your browser does not support the video tag.
            </video>
            {/* texts */}

            <div className="absolute top-0 h-[inherit] flex items-center w-full bg-[rgba(0,0,0,0.6)]">
                <div className="content px-22 space-y-5 max-tab:px-10 max-mdLap:px-18 max-[600px]:px-8">
                    <h1 ref={headerRef} className="fade-up text-white leading-[1.2] text-8xl font-bold w-7/12  max-[1200px]:w-2/3 max-mdLap:text-7xl max-mdLap:w-3/4 max-tab:text-6xl max-[600px]:w-full">
                        {/* Uninterrupted Power Complete Peace of Mind */}
                        Uninterrupted <span className="text-secondary">
                            Power Total Peace
                        </span>  of Mind

                    </h1>
                    <p ref={subheaderRef} className="text-white font-medium text-3xl leading-relaxed w-1/2 max-mdLap:w-2/3 max-tab:w-3/4 max-tab:text-2xl max-[600px]:w-full">Say goodbye to blackouts and insecurity with reliable energy and nationwide support you can trust.</p>
                    <Link rel='noopener noreferrer' href={`https://wa.me/2348166823498?text==${encodeURIComponent(`Hi Syniciat Energy & Tech Solutions, can I get a free quote`)}`} className="pageLink">Get a free quote <BsArrowRight className="font-semibold text-3xl" /></Link>
                </div>

            </div>
        </section>)
}

export default HeroSection