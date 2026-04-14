import React from 'react'

const Hero = (): React.JSX.Element => {
    return (
        <section className="svg-container px-8 max-tab:px-4 h-[70vh] flex flex-col items-center text-center space-y-5 justify-center gap-4">
            <h1 className='text-7xl max-mdLap:text-6xl max-tab:text-5xl max-mdPhone:text-4xl font-bold text-white'>About Syniciat Energy & Tech Solutions
            </h1>
            <p className=' text-blue-50 text-4xl leading-relaxed max-w-5xl max-tab:max-w-full max-tab:text-3xl max-mdPhone:text-2xl'>Innovative Energy and Security Solutions Designed for Efficiency Safety and Peace of Mind</p>
            <div className="animateContainer">
                <div className="animateItem"></div>
            </div>

        </section>)
}
export default Hero