import Hero from '@/components/about-us/Hero'
import OurStory from '@/components/about-us/OurStory'
import React from 'react'

const page = (): React.JSX.Element => {
    return (
        <main>
            <Hero />
            <OurStory />
        </main>
    )
}

export default page