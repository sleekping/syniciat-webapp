"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ActiveLink } from "../ui/active-link";
import { IoChevronDown } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import Links from "./links";


export function Navbar(): React.JSX.Element {
    // for the scroll effect
    const [activeScroll, setActiveScroll] = useState(false);
    // for the mobile menu
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = () => {
        setMenuOpen(false);
        if (window.scrollY > 50) {
            setActiveScroll(true);
        } else {
            setActiveScroll(false);
        }
    };
    useEffect(() => {

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuOpen]);
    return (
        <nav className={activeScroll ? "active" : ""}  >
            {/* logo */}
            <Link href="/" className="">
                <Image src="/images/logo.png" loading="eager"
                    width={100} height={120}
                    alt="Logo" className="w-24 h-24" />
            </Link>

            {/* links */}
            <div className={`linkOpacityContainer max-mdLap:bg-[rgba(0,0,0,.5)]` + (menuOpen ? " open" : "")
            } onClick={() => setMenuOpen(false)}>

                <div className={"gap-10 flex linkContainer hide-scrollbar"} onClick={(e) => e.stopPropagation()}>
                    <div className="">

                        <LiaTimesSolid className={`cursor-pointer text-3xl place-self-end mt-10 hidden max-mdLap:block mb-10 text-gray-500 hover:text-primary transition-colors duration-200`} onClick={() => setMenuOpen(false)} />
                    </div>
                    {Links.map((link, id) => (
                        <div key={id}>
                            {"href" in link && (
                                <ActiveLink href={link.href}>{link.title}</ActiveLink>
                            )}

                            {
                                "type" in link && link.type === "product" && (
                                    <div className={`dropdown-container group ${openDropdown === id ? "open" : ""
                                        }`}>
                                        <button className="flex items-center gap-1 link max-mdLap:justify-between max-mdLap:w-full" onClick={() =>
                                            setOpenDropdown(openDropdown === id ? null : id)
                                        }>{link.title} <IoChevronDown className="icon" /></button>
                                        <div className="dropdown">
                                            <p className="mdLap:border-b font-semibold text-2xl border-gray-300 pb-4 max-mdLap:pl-2 max-mdLap:py-2">All products</p>
                                            <div className="flex flex-row gap-36 pt-4 max-mdLap:flex-col max-mdLap:gap-4 max-mdLap:pt-1 ">
                                                {link.dropdownItem.map((v, i) => (
                                                    <div className="" key={i}>
                                                        <p className="text-primary font-medium text-2xl max-mdLap:pl-4">{v.heading}</p>
                                                        <div className="flex flex-col gap-7 pt-6">
                                                            {v.product.map((p, j) => (
                                                                <Link href={p.href} key={j} className="max-mdLap:pl-8 text-2xl font-medium  text-gray-500  hover:text-primary transition-colors duration-100 ease-in-out">{p.title}</Link>
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
                                    <div className={`dropdown-container group ${openDropdown === id ? "open" : ""
                                        }`}>
                                        <button className="flex items-center gap-1 link max-mdLap:justify-between max-mdLap:w-full" onClick={() =>
                                            setOpenDropdown(openDropdown === id ? null : id)
                                        }>{link.title} <IoChevronDown className="icon" /></button>
                                        <div className="dropdown ">
                                            <h6 className="text-4xl text-primary font-bold max-mdLap:hidden">{link.dropdownData.heading}</h6>
                                            <p className="text-gray-500 pt-4 font-medium text-xl  max-mdLap:hidden">{link.dropdownData.subHeading}</p>
                                            <div className="flex flex-row  max-mdLap:flex-col max-mdLap:gap-4 gap-36 pt-4 max-mdLap:pl-8 max-mdLap:pt-0">
                                                {link.dropdownData.projects.map((v, i) => (
                                                    <Link href={{ pathname: "/projects", query: { city: v.title } }} key={i} className="flex flex-col gap-7 pt-6 text-2xl font-medium  text-gray-500 ">
                                                        <Image src={v.image} alt={v.title} width={100} height={100} className="w-24 h-24 block max-mdLap:hidden" />
                                                        <p className="text-2xl font-medium  text-gray-500 hover:text-primary transition-colors duration-100 ease-in-out">{v.title}</p>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                    ))}
                    <Link href="/contact-us" className="max-mdLap:block hidden mt-2 text-center px-4 py-4 bg-primary text-white rounded-md max-mdLap:mb-9   ">Get a quote</Link>

                </div>


            </div>
            <Link href="/contact-us" className="max-mdLap:hidden px-4 py-2 bg-primary text-white rounded-md">Get a quote</Link>

            <IoMenu className={`cursor-pointer text-5xl hidden max-mdLap:block ${activeScroll ? " text-gray-500" : "text-white"}`} onClick={() => setMenuOpen(true)} />
        </nav>
    )
}
