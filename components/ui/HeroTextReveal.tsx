"use client"

import gsap from "gsap"
import { useLayoutEffect, useRef } from "react"
import type { ReactNode } from "react"

type HeroTextRevealProps = {
    title: ReactNode
    description: ReactNode
    titleId?: string
    descriptionId?: string
    titleClassName: string
    descriptionClassName: string
    children?: ReactNode;
    containerClassName?: string
}

export default function HeroTextReveal({
    title,
    description,
    titleId,
    descriptionId,
    titleClassName,
    descriptionClassName,
    children, containerClassName="svg-container px-8 max-tab:px-4 h-[50vh] flex flex-col items-center text-center space-y-5 justify-center gap-4"
}: HeroTextRevealProps): React.JSX.Element {
    const container = useRef<HTMLDivElement | null>(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

            gsap.timeline({ defaults: { ease: "power3.out" } })
                .from("[data-hero-title]", { y: 44, autoAlpha: 0, duration: 0.9 })
                .from("[data-hero-description]", { y: 24, autoAlpha: 0, duration: 0.75 }, "-=0.5")
                .from("[data-hero-indicator]", { scaleX: 0, transformOrigin: "left center", autoAlpha: 0, duration: 0.6 }, "-=0.3")
        }, container)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={container} className={containerClassName}>
            <h1 data-hero-title id={titleId} className={titleClassName}>{title}</h1>
            <p data-hero-description id={descriptionId} className={descriptionClassName}>{description}</p>
            <div data-hero-indicator>{children}</div>
        </div>
    )
}
