import React from 'react'

const Hero = () => {
    return (
        <section className="svg-container px-8 max-tab:px-4 h-[50vh] flex flex-col items-center text-center space-y-3 justify-center gap-4" aria-labelledby="contact-heading"
            aria-describedby="contact-subheading"
            role="region">
            <h1 className='text-7xl max-mdLap:text-6xl max-tab:text-5xl max-mdPhone:text-4xl font-bold text-white'
                id="contact-heading">Get in Touch</h1>
            <p className=' text-blue-50 text-4xl leading-relaxed max-w-5xl max-tab:max-w-full max-tab:text-3xl max-mdPhone:text-2xl'
                id="contact-subheading">Have a Question? Let’s Help You Out</p>
            <div className="animateContainer" aria-hidden="true">
                <div className="animateItem"></div>
            </div>
        </section>
    )
}

export default Hero