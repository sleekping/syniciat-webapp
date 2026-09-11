import JoinUs from '@/components/about-us/JoinUs';
import Contact from '@/components/contact-us/Contact'
import Hero from '@/components/contact-us/Hero'
import PreferWhatsapp from '@/components/contact-us/PreferWhatsapp'
import React from 'react'

const page = (): React.JSX.Element => {
    return (
        <main>
            <Hero />
            <Contact />
            <PreferWhatsapp />
            <JoinUs/>
        </main>)
}

export default page