import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import { HiOutlineBolt } from "react-icons/hi2";
import { GoShieldLock } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { MdOutlineLightMode } from "react-icons/md";
const about = [
    { icon: MdOutlineLightMode, heading: "Smart Energy", subheading: "Reliable solar power with lower costs" },
    { icon: GoShieldLock, heading: "Smart Security", subheading: "Advanced systems that keep you protected" },
    { icon: GrLocation, heading: "GPS Tracking", subheading: "Real-time location and asset monitoring" },
    { icon: HiOutlineBolt, heading: "Built to Perform", subheading: "Durable systems you can depend on" },
]
const AboutSection = (): React.JSX.Element => {
    return (
        <section className='px-30 grid lg:grid-cols-2 gap-24 items-center bg-gray-50 py-20 max-mdLap:px-25 max-tab:px-20 max-mdPhone:px-15' aria-labelledby='about title'>

            <div className=''>
                <div className='relative'>
                    <Image src={"/images/about_us.jpeg"} loading='lazy' className='w-full h-180  max-tab:h-150 object-center object-cover rounded-2xl' width={400} height={400} alt="Syniciat Energy & Tech Solutions workspace and operations"
                    />
                    <div className="absolute -bottom-20  bg-primary -right-10 p-8 rounded-2xl" aria-hidden="true">
                        <h4 className='text-white text-5xl font-extrabold flex flex-col'>5+<span className='font-normal text-2xl'>Years Experience</span></h4>
                    </div>
                </div>

            </div>
            <div className='space-y-5 '>
                <h2 className='text-2xl font-semibold text-primary' id="about-title" >About Us</h2>
                <h3 className='text-5xl font-bold'>Syniciat Energy & Tech Solutions</h3>
                <div className="w-35 h-1.5 bg-primary rounded-full"></div>
                <div className='space-y-5 text-gray-600 leading-relaxed'>
                    <p className='text-2xl'>Syniciat was founded with one clear goal: to deliver smart, reliable, and modern energy and security solutions that power, protect, and connect homes and businesses seamlessly.</p>
                    <p className='text-2xl'>What started as a vision to solve everyday challenges like unstable power and rising security concerns has grown into a trusted brand providing <span className='font-medium text-foreground'> solar energy systems, advanced surveillance, GPS tracking, and integrated smart technologies.</span> We design every solution to be efficient, durable, and tailored to meet the unique needs of each client.</p>
                    <p className='text-2xl'>At Syniciat, we don’t just provide systems — we deliver confidence and peace of mind. Every project is executed with precision, technical expertise, and a commitment to long-term performance, ensuring our clients stay powered, secure, and in control at all times.</p>
                </div>

                <div className='space-y-10'>


                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        {about.map((v, i) => (
                            <article key={i} aria-label={v.heading} className='flex items-start space-x-3 p-8 rounded-2xl bg-white border border-gray-100  hover:border-primary/20 hover:shadow-md transition-all focus:outline-none focus:ring-2 '>
                                {/* icon */}

                                <div className='bg-primary/10 rounded-lg' aria-hidden="true">
                                    <v.icon className='text-primary text-3xl m-3' />
                                </div>


                                <div className='space-y-3'>
                                    <h4 className='text-foreground font-semibold text-xl'>{v.heading}</h4>
                                    <p className='text-gray-600 text-lg'>{v.subheading}</p>
                                </div>
                            </article>
                        )
                        )}
                    </div>
                    <Link href={"/about"} className='pageLink' aria-label="Read more about Syniciat Energy & Tech Solutions">Read More <BsArrowRight className="font-semibold text-3xl" aria-hidden="true" /></Link>
                </div>
            </div>


        </section>

    )
}

export default AboutSection