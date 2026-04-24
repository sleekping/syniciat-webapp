import Image from 'next/image'
import React from 'react'
const team = [
    {
        img: "/images/syniciat-ceo.jpeg",
        name: "Engr. Opeyemi J. Adekola",
        role: "Founder & Chief Executive Officer",
        details: "Vision-driven leader committed to making reliable, clean energy accessible to homes and businesses across Nigeria. Abdulqudus leads Syniciat with a focus on innovation, operational excellence, and long-term sustainability."
    },
    {
        img: "/images/syniciat-team.jpeg", role: "Syniciat Team",
        details: "Behind Syniciat is a dedicated team of engineers, technicians, and support specialists working together to deliver seamless solar solutions. From system design to installation and customer support, every member of the team plays a critical role in ensuring quality, reliability, and customer satisfaction."
    }
]
const OurTeam = () => {
    return (
        <section className='px-20 py-20 space-y-20 ' id="our-team">
            <div className="text-center mb-20 place-items-center">
                <p className='text-2xl uppercase font-semibold text-primary tracking-wide'>Meet the Team</p>
                <h2 className='text-5xl font-bold mt-3.5 mb-6.5'>Our Leadership</h2>
                <div className="w-35 h-1.5 bg-primary rounded-full mb-8"></div>
                <p className='mt-8 text-gray-600 text-2xl'>The visionaries and experts driving our mission forward.</p>
            </div>
            <div className="grid grid-cols-2 gap-10 mx-50 max-xl:mx-10 max-lg:mx-0 max-mdLap:grid-cols-1">
                {/* Placeholder for team members */}
                {
                    team.map((v, i) => (
                        <article key={i} className='rounded-2xl group overflow-hidden 
                     shadow-sm border border-gray-200 hover:shadow-xl transition-all group 
                        
                        '><div className="overflow-hidden">

                            <Image loading='lazy' src={v.img} className='w-full h-150  object-top-left  object-cover  group-hover:scale-110 transition-transform duration-300' alt={v.role} width={400} height={400} />
                        </div>
                            <div className='space-y-2 p-8'>
                                <h3 className='text-3xl font-semibold'>{v.name}</h3>
                                <p className='text-primary text-2xl'>{v.role}</p>
                                <p className='text-gray-600 text-2xl leading-relaxed '>{v.details}</p>
                            </div>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

export default OurTeam