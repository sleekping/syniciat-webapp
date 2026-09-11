"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import type { Product } from "@/lib/products";

gsap.registerPlugin(ScrollTrigger);

export function ProductPage({ product }: { product: Product }): React.JSX.Element {
    const container = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

            const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
            intro
                .from("[data-product-image]", { scale: 1.12, duration: 1.4 })
                .from("[data-product-eyebrow], [data-product-title], [data-product-summary]", {
                    y: 36,
                    opacity: 0,
                    duration: 0.85,
                    stagger: 0.12,
                }, "-=0.9");

            gsap.to("[data-product-image]", {
                yPercent: 12,
                ease: "none",
                scrollTrigger: {
                    trigger: "[data-product-hero]",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            gsap.from("[data-product-content], [data-product-benefit]", {
                y: 70,
                opacity: 0,
                duration: 0.9,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "[data-product-details]",
                    start: "top 78%",
                    end: "bottom 25%",
                    toggleActions: "play reverse play reverse",
                },
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={container}>
            <section data-product-hero className="relative flex min-h-[72vh] items-end overflow-hidden bg-primary px-8 pb-18 pt-40 text-white max-tab:px-10 max-mdPhone:px-6">
                <Image data-product-image src={product.image} alt="" fill priority className="object-cover opacity-35" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/75 to-primary/20" />
                <div className="relative mx-auto w-full max-w-560">
                    <p data-product-eyebrow className="mb-5 text-2xl font-semibold uppercase tracking-[0.18em] text-secondary">{product.eyebrow}</p>
                    <h1 data-product-title className="max-w-4xl text-8xl font-bold leading-tight max-tab:text-6xl max-mdPhone:text-5xl">{product.title}</h1>
                    <p data-product-summary className="mt-6 max-w-3xl text-3xl leading-relaxed text-blue-50 max-tab:text-2xl">{product.summary}</p>
                </div>
            </section>
            <section data-product-details className="mx-auto grid max-w-560 gap-16 px-8 py-24 lg:grid-cols-[1.1fr_.9fr] lg:px-12" aria-labelledby="product-details">
                <div data-product-content>
                    <p className="text-2xl font-semibold uppercase tracking-wide text-primary">Built around your needs</p>
                    <h2 id="product-details" className="mt-4 text-5xl font-bold max-mdPhone:text-4xl">Power, protection, and a plan that fits.</h2>
                    <div className="mt-8 h-1.5 w-35 rounded-full bg-secondary" />
                    <p className="mt-8 text-2xl leading-relaxed text-gray-600">{product.description}</p>
                    <Link href="/contact-us" className="pageLink mt-10">Request a consultation <BsArrowRight aria-hidden="true" /></Link>
                </div>
                <div data-product-benefit className="border-l-4 border-secondary bg-gray-50 px-10 py-10 max-mdPhone:px-7" aria-label={`${product.title} benefits`}>
                    <h3 className="text-3xl font-bold">What you can expect</h3>
                    <ul className="mt-8 space-y-6">
                        {product.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-4 text-2xl text-gray-700"><span className="mt-3 h-3 w-3 shrink-0 rounded-full bg-primary" aria-hidden="true" />{benefit}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}
