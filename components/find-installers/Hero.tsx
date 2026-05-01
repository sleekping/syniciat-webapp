import React from 'react'

const Hero = (): React.JSX.Element => {
    return (
        <section className="svg-container px-8 max-tab:px-4 h-[55vh] max-tab:h-[50vh] flex flex-col items-center text-center space-y-3 justify-center gap-4" aria-labelledby="find-installers-heading" aria-describedby='find-installers-subheading'>
            <h1 className='text-6xl max-mdLap:text-6xl max-tab:text-5xl max-mdPhone:text-4xl font-bold text-white' id="find-installers-heading"
            >Get It Installed. Done Right.</h1>
            <p className=' text-blue-50 text-4xl leading-relaxed max-w-6xl  max-tab:text-3xl max-sm:max-w-full max-mdPhone:text-2xl' id="find-installers-subheading">Nigeria&apos;s elite network for solar, surveillance, security, and electrical installations</p>
            <div className="animateContainer" aria-hidden="true"> <div className="animateItem"></div>
            </div>
        </section>
    )
}

export default Hero