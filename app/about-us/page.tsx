import Hero from '@/components/about-us/Hero'
import Mission from '@/components/about-us/Mission'
import OurStory from '@/components/about-us/OurStory'
import React from 'react'

const page = (): React.JSX.Element => {
    return (
        <main>
            <Hero />
            <OurStory />
            <Mission />

        </main>
    )
}

export default page