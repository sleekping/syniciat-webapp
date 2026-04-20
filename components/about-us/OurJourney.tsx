import React from 'react'
const listItem = [
    { year: "2023", event: "Where It All Began", details: "We started our journey with a vision to revolutionize the industry." },
    { year: "2024", event: "Product Launch", details: "Excited to announce the launch of our flagship product." },
    { year: "2025", event: "Expansion", details: "We expanded our operations to new markets and regions." },
    { year: "2026", event: "Awards & Recognition", details: "Received industry awards for our innovative solutions." },
]
const OurJourney = (): React.JSX.Element => {
    return (
        <section className='px-20 py-20 bg-gray-50'>
            <div className='text-center place-items-center'>
                <p className='text-2xl uppercase font-semibold text-primary tracking-wide'>Our Evolution</p>
                <h2 className='text-5xl font-bold mt-3.5 mb-6.5'>Pivotal Chapters</h2>
                <div className="w-35 h-1.5 bg-primary rounded-full mb-8" aria-hidden="true"></div>
            </div>
            <div className="">

                <div className='relative flex gap-4 mx-60 flex-col' role='list'>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

                    {listItem.map((item, i) => (
                        <article role='listitem' className='mt-6 relative' key={i}>
                            <div className={i % 2 === 0 ? 'mr-auto w-1/2 pr-16' : 'pl-16 ml-auto w-1/2'}>
<div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg" aria-hidden="true"></div>
                                <div className=' bg-white flex-1 rounded-2xl border-primary/20 border-2
                shadow-sm  hover:border-primary/50 transition-all ease-in-out duration-500 hover:shadow-xl group               
                px-10 py-10'>
                                    <div className="flex items-center gap-4">
                                        <time dateTime={item.year} className='w-26 text-2xl h-26 text-white bg-primary flex items-center justify-center font-bold rounded-full'>{item.year}</time>
                                        <h3 className='text-2xl font-semibold'>{item.event}</h3>
                                    </div>
                                    <p className='text-gray-600 text-2xl leading-relaxed mt-4'>{item.details}</p>

                                </div>
                            </div>
                        </article>
                    ))}</div>
            </div>
        </section>

    )
}

export default OurJourney