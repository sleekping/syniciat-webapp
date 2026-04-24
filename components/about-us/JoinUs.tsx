import Link from 'next/link'
import React from 'react'

const JoinUs = () => {
    return (

        <section className="px-6 md:px-12 lg:px-20 py-16 bg-gray-50" role='region'>
            <div className="max-w-400 mx-auto bg-primary rounded-2xl text-center px-6 md:px-12 py-14 shadow-md space-y-8">

                {/* Heading */}
                <h2 className="text-5xl font-bold text-white max-mdLap:text-4xl max-md:text-3xl pb-2">
                   Ready to Be Part of Something Bigger?
                </h2>

                {/* Subtext */}
                <p className="pb-4 text-white/90 max-md:text-xl max-mdlap:text-2xl text-3xl">
                     Discover the Syniciat Energy & Tech Solutions advantage. Let’s build a smarter, more reliable future together.</p>

                {/* Links */}
                <div className="flex max-sm:flex-col flex-row items-center justify-center gap-4">

                    {/* Primary */}
                    <Link href={"/"} className="bg-gray-100 max-sm:w-full text-primary/90 font-semibold px-13 py-4 rounded-lg hover:bg-white transition whitespace-nowrap text-2xl">
                        Contact Us Today
                    </Link>

                    {/* Secondary */}
                    <Link href={"/"} className="border max-sm:w-full border-white text-white font-semibold px-13 py-4 rounded-lg hover:bg-white hover:text-primary transition whitespace-nowrap text-2xl">
                        Explore Solutions
                    </Link>

                </div>
            </div>
        </section>

    )
}

export default JoinUs