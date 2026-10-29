import React from 'react'
import HeroTextReveal from '@/components/ui/HeroTextReveal'

const Hero = (): React.JSX.Element => {
    return (
        <section className="svg-container px-8 max-tab:px-4 h-[55vh] max-tab:h-[50vh] flex flex-col items-center text-center space-y-3 justify-center gap-4" aria-labelledby="find-installers-heading" aria-describedby='find-installers-subheading'>
            <HeroTextReveal
                title="Get It Installed. Done Right."
                description={<>Nigeria&apos;s elite network for solar, surveillance, security, and electrical installations</>}
                titleId="find-installers-heading"
                descriptionId="find-installers-subheading"
                titleClassName='text-6xl max-mdLap:text-6xl max-tab:text-5xl max-mdPhone:text-4xl font-bold text-white'
                descriptionClassName='text-blue-50 text-4xl leading-relaxed max-w-6xl max-tab:text-3xl max-sm:max-w-full max-mdPhone:text-2xl'
            >
                <div className="animateContainer" aria-hidden="true"><div className="animateItem"></div></div>
            </HeroTextReveal>
        </section>
    )
}

export default Hero