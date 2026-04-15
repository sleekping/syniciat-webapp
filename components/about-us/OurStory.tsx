import React from 'react'
import Image from 'next/image'
const OurStory = (): React.JSX.Element => {
    return (
        <section aria-labelledby="our-story" className='grid grid-cols-2 max-mdLap:grid-cols-1  gap-16 max-tab:gap-20 px-30 py-20 max-mdLap:px-25 max-tab:px-20 max-mdPhone:px-15'>
            <div className=''>
                <div className='relative'>
                    <Image src={"/images/cctv.jpg"} loading='lazy' className='w-full h-180  max-tab:h-150 object-center object-cover rounded-2xl' width={400} height={400} alt="CCTV Surveilance system installed by Syniciat Energy & Tech Solutions"
                    />
                    <div className="absolute -bottom-20  bg-primary -right-10 p-8 rounded-2xl" aria-hidden="true">
                        <h4 className='text-white text-5xl font-bold flex flex-col'>5+<span className='font-normal text-2xl'>Years Experience</span></h4>
                    </div>
                </div>
            </div>

            <div className=''>
                <div className="header">
                    <h3 className='text-primary text-2xl uppercase tracking-wide  font-semibold' id="our-story">Our Story</h3>
                    <h2 className='text-6xl font-bold mt-3 mb-8 max-tab:text-5xl max-mdPhone:text-4xl'>Powering Your World, Securing Your Future</h2>
                    <div className="w-35 h-1.5 bg-primary rounded-full mb-8"></div>
                    <div className='space-y-6 text-gray-600 leading-relaxed pt-4'>
                        <p className='text-2xl'>Established in 2021 and headquartered in Lagos, Synciat Solutions was founded with a clear and ambitious vision: to power, protect, and connect homes and businesses across Nigeria through reliable and modern technology.</p>
                        <p className='text-2xl'>What started as a small operation has grown into a trusted provider of solar systems, CCTV, electric fencing, wiring, and smart vehicle tracking. With over six years of experience and certified installers across 12+ states, we deliver reliable solutions tailored to each client.</p>
                        <p className='text-2xl'>We serve businesses, homeowners, and institutions with complete solutions—from consultation and installation to maintenance and 24/7 support, backed by strong customer satisfaction and warranty coverage.</p>
                        <p className='text-2xl font-medium text-foreground'>At Synciat Solutions, we don’t just install systems — we deliver power, protection, and control for a smarter, safer Nigeria.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurStory