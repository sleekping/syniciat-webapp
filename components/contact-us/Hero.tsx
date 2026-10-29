import React from 'react'
import HeroTextReveal from '@/components/ui/HeroTextReveal'

const Hero = (): React.JSX.Element => {
    return (
        <section className="svg-container px-8 max-tab:px-4 h-[50vh] flex flex-col items-center text-center space-y-3 justify-center gap-4" aria-labelledby="contact-heading"
            aria-describedby="contact-subheading"
            role="region">
            <HeroTextReveal
                title="Get in Touch"
                description="Have a Question? Let’s Help You Out"
                titleId="contact-heading"
                descriptionId="contact-subheading"
                titleClassName='text-7xl max-mdLap:text-6xl max-tab:text-5xl max-mdPhone:text-4xl font-bold text-white'
                descriptionClassName='text-blue-50 text-4xl leading-relaxed max-w-5xl max-tab:max-w-full max-tab:text-3xl max-mdPhone:text-2xl'
            >
                <div className="animateContainer" aria-hidden="true"><div className="animateItem"></div></div>
            </HeroTextReveal>
        </section>
    )
}

export default Hero