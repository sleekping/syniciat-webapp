import React from 'react'
import { HiOutlineShieldCheck } from "react-icons/hi";
import { LuUsers } from "react-icons/lu";
import { PiHandshake } from "react-icons/pi";
import { TfiLightBulb } from "react-icons/tfi";
import { GoGlobe } from "react-icons/go";
import { LuAward } from "react-icons/lu";
const values = [
    {
        heading: "Uncompromising Quality",
        subheading: "We never cut corners on quality. Every product meets global standards and passes strict testing.",
        icon: HiOutlineShieldCheck
    },
    {
        heading: "Customer-Driven",
        subheading: "Everything we do starts with you. We listen, adapt, and deliver solutions that go beyond expectations.",
        icon: LuUsers
    },
    {
        heading: "Built on Trust",
        subheading: "We operate with honesty and transparency, building strong relationships founded on trust.",
        icon: PiHandshake
    },
    {
        heading: "Forward Thinking",
        subheading: "We embrace new technologies and constantly refine our products and services.",
        icon: TfiLightBulb
    },
    {
        heading: "Eco Commitment",
        subheading: "We’re dedicated to protecting the environment by promoting clean, renewable energy solutions.",
        icon: GoGlobe
    },
    {
        heading: "Pursuit of Excellence",
        subheading: "We aim for outstanding performance in every part of our business, from products to customer experience.",
        icon: LuAward
    }

]
const CoreValues = (): React.JSX.Element => {

    return (
        <section className='px-20 py-20 space-y-20 max-tab:px-10' id="core-values">
            <div className="text-center mb-20 place-items-center">
                <p className='text-2xl uppercase font-semibold text-primary tracking-wide'>Why Choose Us</p>
                <h2 className='text-5xl font-bold mt-3.5 mb-6.5'>Our Core Values</h2>
                <div className="w-35 h-1.5 bg-primary rounded-full mb-8"></div>
                <p className='mt-8 text-gray-600 text-2xl'>These principles shape every decision we make and every conversation we have.</p>
            </div>
            <div className="grid grid-cols-3 gap-10 max-mdLap:grid-cols-2 max-tab:grid-cols-1">
                {values.map((v, i) => (
                    <article key={i} className='bg-white flex-1 rounded-2xl border-primary/20 border-2
                shadow-sm  hover:border-primary/50 transition-all ease-in-out duration-500 hover:shadow-xl group               
                px-10 py-10 max-mdPhone:px-6'>

                        <div className="bg-primary/10 group-hover:bg-primary transition-all ease-in-out duration-300 w-16 h-16 rounded-lg flex items-center justify-center mb-5" aria-hidden="true">
                            {<v.icon className='text-primary group-hover:text-white' size={"2rem"} />}
                        </div>
                        <h3 className='text-3xl font-semibold'>{v.heading}</h3>
                        <p className='text-gray-600 text-2xl leading-relaxed mt-4'>{v.subheading}</p>

                    </article>
                ))}
            </div>
        </section>
    )
}

export default CoreValues