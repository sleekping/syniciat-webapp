"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ActiveLink } from "../ui/active-link";
import { IoChevronDown } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
type NavLinks = (
    | {
        title: string;
        href: string;
    }
    | {
        title: string;
        type: "product"
        dropdownItem: {
            heading: string;
            product: {
                href: string;
                title: string;
            }[];
        }[];
    }

    | {
        title: string;
        type: "project",
        dropdownData: {
            heading: string;
            subHeading: string;
            projects: {
                href: string;
                title: string;
                image: string;
            }[];
        };

    }
)[];
const links: NavLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about-us" },
    {

        title: "Products", type: "product", dropdownItem: [

            {
                heading: "Solar Products", product: [
                    { title: "Solar Panels", href: "/products/solar/solar-panels" },
                    { title: "Inverters", href: "/products/solar/inverters" },
                    { title: "Batteries", href: "/products/solar/batteries" },
                    { title: "Charge Controllers", href: "/products/solar/charge-controllers" },
                    { title: "Solar Street Lights", href: "/products/solar/solar-street-lights" },
                ],
            },
            {
                heading: "Security Solutions", product: [
                    { title: "CCTV Systems", href: "/products/security/cctv-systems" },
                    { title: "House Wiring", href: "/products/security/house-wiring" },
                    { title: "Electric Fencing", href: "/products/security/electric-fencing" },
                ]
            }

        ]
    },
    { title: "Find Installers", href: "/find-installers" },

    {
        title: "Projects", type: "project",
        dropdownData: {
            heading: "Trusted Across Cities",
            subHeading: "We've delivered successful solar and electrical projects in major cities.",
            projects: [
                { title: "Lagos", href: "/projects/lagos", image: "" },
                { title: "Abuja", href: "/projects/abuja", image: "" },
                { title: "Benin", href: "/projects/benin", image: "" },
            ]

        }
    }, { title: "Blog", href: "/blog" },
    { title: "Contact Us", href: "/contact-us" },
]

export function Navbar() {
    const [activeScroll, setActiveScroll] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setActiveScroll(true);
            } else {
                setActiveScroll(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    console.log(activeScroll);
    return (
        <nav className={activeScroll ? "active" : ""}  >
            {/* logo */}
            <Link href="/" className="">
                <Image src="/images/nav-logo.png" loading="eager"
                    width={100} height={120}
                    alt="Logo" className="w-24 h-24" />
            </Link>

            {/* links */}
            <div className="gap-10 flex">
                {links.map((link, id) => (
                    <div key={id}>
                        {"href" in link && (
                            <ActiveLink href={link.href}>{link.title}</ActiveLink>
                        )}

                        {
                            "type" in link && link.type === "product" && (
                                <div className="relative flex justify-center">
                                    <button className="flex text-gray-500 items-center gap-1">{link.title} <IoChevronDown /></button>
                                    <div className="product-dropdown top-30 w-180 bg-white absolute z-40 py-15 px-10 rounded-2xl">
                                        <p className="border-b font-semibold text-2xl border-gray-300 pb-4">All products</p>
                                        <div className="flex flex-row gap-36 pt-4">
                                            {link.dropdownItem.map((v, i) => (
                                                <div className="" key={i}>
                                                    <p className="text-primary font-medium text-2xl">{v.heading}</p>
                                                    <div className="flex flex-col gap-7 pt-6">
                                                        {v.product.map((p, j) => (
                                                            <Link href={p.href} key={j} className="text-2xl font-medium  text-gray-500">{p.title}</Link>
                                                        ))}
                                                    </div>
                                                </div>

                                            ))}
                                        </div>

                                    </div>
                                </div>
                            )
                        }

                        {
                            "type" in link && link.type === "project" && (
                                <div className="relative flex justify-center">
                                    <button className="flex text-gray-500 items-center gap-1">{link.title} <IoChevronDown /></button>
                                    <div className="product-dropdown top-30 w-180 bg-white absolute z-40 py-15 px-10 rounded-2xl">
                                        <h6 className="text-4xl text-primary font-bold">{link.dropdownData.heading}</h6>
                                        <p className="text-gray-500 pt-4 font-medium text-xl">{link.dropdownData.subHeading}</p>
                                        <div className="flex flex-row gap-36 pt-4">
                                            {link.dropdownData.projects.map((v, i) => (
                                                <Link href={v.href} key={i} className="flex flex-col gap-7 pt-6">
                                                    {/* <Image src={v.image} alt={v.title} width={100} height={100} className="w-24 h-24" />  */}
                                                    <p className="text-2xl font-medium  text-gray-500">{v.title}</p>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                ))}
            </div>
            <Link href="/contact-us" className="px-4 py-2 bg-primary text-white rounded-md">Get a quote</Link>

            <IoMenu className={`text-5xl text-white hidden `} />
        </nav>
    )
}
