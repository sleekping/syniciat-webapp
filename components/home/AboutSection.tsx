import React from 'react'
import Image from 'next/image'
const AboutSection = (): React.JSX.Element => {
    return (
        <section className='mx-30 flex gap-10'>

            <div>
                <Image src={"/images/about_us.jpeg"} loading='lazy' className='w-260 h-240 object-cover rounded-2xl' width={400} height={400} alt='company' />
            </div>
            <div className='space-y-5'>
                <h2 className='text-3xl font-bold text-primary'>About Us</h2>
                <p className='text-lg text-gray-600'>We are a team of passionate developers dedicated to creating innovative solutions that empower businesses and individuals alike. 
                    Our mission is to leverage technology to solve real-world problems and enhance the way people interact with the digital world.</p>
            </div>
        </section>

    )
}

export default AboutSection