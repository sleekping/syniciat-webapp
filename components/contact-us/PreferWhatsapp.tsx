import Link from 'next/link'
import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io5";

const PreferWhatsapp = (): React.JSX.Element => {
    return (
        <section className='px-20 py-20 bg-gray-50 flex justify-center items-center flex-col gap-3'>
            <h2 className='text-4xl font-semibold mb-4'>Need Assistance?</h2>
            <p className='text-2xl font-medium text-gray-600 mb-8'>Connect with our team instantly via WhatsApp for quick support</p>
            <Link target='_blank' className='w-140 bg-primary text-white py-5 rounded-lg font-medium hover:bg-primary-dark transition ease-in-out duration-300 flex justify-center items-center gap-2' rel='noopener noreferrer' href="https://wa.me/2348166823498?text=Hi%20Syniciat%20Energy%20%26%20Tech%20Solutions%2C%20I%20have%20a%20question%20about%20your%20services."><IoLogoWhatsapp size={"2.5rem"} /> Chat on WhatsApp</Link>
        </section>
    )
}

export default PreferWhatsapp