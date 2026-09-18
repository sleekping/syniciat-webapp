"use client"

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { useLayoutEffect, useRef } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { products } from '@/lib/products'

gsap.registerPlugin(ScrollTrigger)

export const ProductSection = () => {
    const container = useRef<HTMLElement | null>(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>('[data-home-product-card]')

            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                gsap.set(cards, { clearProps: 'all' })
                return
            }

            gsap.fromTo(cards, {
                y: 55,
                autoAlpha: 0,
            }, {
                y: 0,
                autoAlpha: 1,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '[data-home-products-grid]',
                    start: 'top 84%',
                    toggleActions: 'play none none none',
                },
            })

            ScrollTrigger.refresh()
        }, container)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={container} className="bg-white px-8 py-24 max-tab:px-10 max-mdPhone:px-6" aria-labelledby="products-heading">
            <div className="mx-auto max-w-560">
                <p className="text-2xl font-semibold uppercase tracking-wide text-primary">Our products</p>
                <div className="mt-3 flex items-end justify-between gap-6 max-tab:flex-col max-tab:items-start">
                    <h2 id="products-heading" className="max-w-3xl text-5xl font-bold max-mdPhone:text-4xl">Everything you need to stay powered and protected.</h2>
                    <Link href="/products" className="inline-flex shrink-0 items-center gap-3 text-xl font-semibold text-primary">View all products <BsArrowRight aria-hidden="true" /></Link>
                </div>
                <div data-home-products-grid className="mt-12 grid gap-5 md:grid-cols-3">
                    {products.slice(0, 3).map((product) => (
                        <Link data-home-product-card key={product.slug} href={`/products/${product.category}/${product.slug}`} className="group border border-gray-200 p-7 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg">
                            <p className="text-xl font-semibold uppercase tracking-wide text-gray-500">{product.eyebrow}</p><h3 className="mt-3 text-3xl font-bold">{product.title}</h3><p className="mt-3 text-xl leading-relaxed text-gray-600">{product.summary}</p><span className="mt-6 inline-flex items-center gap-3 text-xl font-semibold text-primary">Learn more <BsArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
