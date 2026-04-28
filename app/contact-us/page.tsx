import Contact from '@/components/contact-us/Contact'
import Hero from '@/components/contact-us/Hero'
import React from 'react'

const page = (): React.JSX.Element => {
    return (
        <main>
            <Hero />
            <Contact />
        </main>)
}

export default page