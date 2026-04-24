import CoreValues from '@/components/about-us/CoreValues'
import Hero from '@/components/about-us/Hero'
import Mission from '@/components/about-us/Mission'
import OurJourney from '@/components/about-us/OurJourney'
import OurStory from '@/components/about-us/OurStory'
import OurTeam from '@/components/about-us/OurTeam'
import React from 'react'

const page = (): React.JSX.Element => {
    return (
        <main>
            <Hero />
            <OurStory />
            <Mission />
            <CoreValues />
            <OurJourney />
            <OurTeam />
        </main>
    )
}

export default page