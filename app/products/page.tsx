"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { products } from "@/lib/products";

gsap.registerPlugin(ScrollTrigger);

const categories = ["solar", "security"] as const;

export default function ProductsPage(): React.JSX.Element {
    const container = useRef<HTMLElement | null>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

            gsap.from("[data-products-hero] > div > *", {
                y: 32,
                opacity: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: "power3.out",
            });

            gsap.from("[data-product-card]", {
                y: 60,
                opacity: 0,
                duration: 0.75,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "[data-product-grid]",
                    start: "top 82%",
                    end: "bottom 20%",
                   
                        toggleActions: "play none none reverse",
                },
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={container}>
            <section data-products-hero className="bg-primary px-8 pb-20 pt-44 text-white max-tab:px-10 max-mdPhone:px-6">
                <div className="mx-auto max-w-560">
                    <p className="text-2xl font-semibold uppercase tracking-[0.18em] text-secondary">Syniciat solutions</p>
                    <h1 className="mt-5 max-w-4xl text-8xl font-bold leading-tight max-tab:text-6xl max-mdPhone:text-5xl">Power that works. Security that lasts.</h1>
                    <p className="mt-6 max-w-3xl text-3xl leading-relaxed text-blue-50 max-tab:text-2xl">Explore practical energy and technology systems designed for homes, businesses, and communities across Nigeria.</p>
                </div>
            </section>
            <section className="mx-auto max-w-560 px-8 py-24 lg:px-12" aria-labelledby="all-products">
                <h2 id="all-products" className="sr-only">All products</h2>
                {categories.map((category) => <div key={category} className="mb-20 last:mb-0">
                    <div className="mb-8 flex items-end justify-between gap-6 border-b border-gray-200 pb-5 max-mdPhone:flex-col max-mdPhone:items-start"><div>
                        <p className="text-2xl font-semibold uppercase tracking-wide text-primary">{category === "solar" ? "Solar products" : "Security solutions"}</p>
                        <h2 className="mt-2 text-5xl font-bold max-mdPhone:text-4xl">{category === "solar" ? "Make your own power" : "Protect what matters"}</h2></div><span className="text-xl text-gray-500">
                            {products.filter((product) => product.category === category).length} solutions</span>
                    </div>
                    <div data-product-grid className="grid gap-5 md:grid-cols-2">{products.filter((product) => product.category === category).map((product) =>
                        <Link data-product-card key={product.slug} href={`/products/${product.category}/${product.slug}`}
                            className="group border border-gray-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg">
                            <p className="text-xl font-semibold uppercase tracking-wide text-gray-500">{product.eyebrow}</p>
                            <h3 className="mt-3 text-3xl font-bold text-foreground">{product.title}</h3><p className="mt-3 text-xl leading-relaxed text-gray-600">{product.summary}</p>
                            <span className="mt-6 inline-flex items-center gap-3 text-xl font-semibold text-primary">Explore solution
                                <BsArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                            </span></Link>)}
                    </div>
                </div>)}
            </section>
        </main>
    );
}
