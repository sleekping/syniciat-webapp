"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect, useRef } from "react"
import type { ReactNode } from "react"

gsap.registerPlugin(ScrollTrigger)

type RevealDirection = "up" | "left" | "right"

type ScrollRevealProps = {
    children: ReactNode
    direction?: RevealDirection
    delay?: number
    className?: string
}

const offsets: Record<RevealDirection, { x: number; y: number }> = {
    up: { x: 0, y: 60 },
    left: { x: -90, y: 0 },
    right: { x: 90, y: 0 },
}

export default function ScrollReveal({
    children,
    direction = "up",
    delay = 0,
    className,
}: ScrollRevealProps): React.JSX.Element {
    const element = useRef<HTMLDivElement | null>(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

            const offset = offsets[direction]
            gsap.fromTo(element.current,
                { x: offset.x, y: offset.y, autoAlpha: 0 },
                {
                    x: 0,
                    y: 0,
                    autoAlpha: 1,
                    delay,
                    duration: 0.85,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element.current,
                        start: "top 86%",
                        end: "bottom 18%",
                        toggleActions: "play reverse play reverse",
                    },
                },
            )
        }, element)

        return () => ctx.revert()
    }, [delay, direction])

    return <div ref={element} className={`${className ?? ""}`}>{children}</div>
}
