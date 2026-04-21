import React from 'react'
const listItem = [
    {
        year: "2023",
        event: "Founding & Launch",
        details:
            "Founded in Lagos, Nigeria, Syniciat delivers reliable solar solutions—panels, inverters, batteries—alongside CCTV, fencing, wiring, car extenders, and vehicle tracking for homes and businesses."
    },
    {
        year: "2024",
        event: "Service Expansion",
        details:
            "Completed initial solar installations and expanded into CCTV, electric fencing, and house wiring to meet growing demand for integrated energy and security solutions."
    },
    {
        year: "2025",
        event: "Client Growth",
        details:
            "Served 30+ clients across Lagos and nearby states, strengthened installer partnerships, and expanded into solar street lighting and CCTV for private and community projects."
    },
    {
        year: "2026",
        event: "Trust & Growth",
        details:
            "Expanded our portfolio with more efficient inverters and batteries, strengthening our reputation as a trusted partner for homes and small businesses."
    },
]
const OurJourney = (): React.JSX.Element => {
    return (
        <section className='px-20 py-20 max-tab:px-10 bg-gray-50 ' id="our-journey">
            <div className='text-center place-items-center'>
                <p className='text-2xl uppercase font-semibold text-primary tracking-wide'>Our Evolution</p>
                <h2 className='text-5xl font-bold mt-3.5 mb-6.5'>Pivotal Chapters</h2>
                <div className="w-35 h-1.5 bg-primary rounded-full mb-8" aria-hidden="true"></div>
            </div>
            <div className="mt-8">

                <div className='relative flex gap-4 flex-col px-60  max-[1200px]:px-20  max-mdLap:px-0' role='list'>
                    <div className="max-[900px]:hidden  block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

                    {listItem.map((item, i) => (
                        <article role='listitem' className='mt-6 relative' key={i}>
                            <div className={`${i % 2 === 0 ? 'mr-auto pr-50 max-mdLap:pr-110' : 'pl-50 ml-auto max-mdLap:pl-110'} w-3/5 max-mdLap:w-4/5 max-[900px]:w-full max-[900px]:pl-0 max-[900px]:pr-0`}>
                                <div className="max-[900px]:hidden block absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg" aria-hidden="true"></div>
                                <div className=' bg-white flex-1 rounded-2xl border-primary/20 border-2
                shadow-sm  hover:border-primary/50 transition-all ease-in-out duration-500 hover:shadow-xl group               
                px-10 py-10'>
                                    <div className="flex items-center gap-4">
                                        <time dateTime={item.year} className='w-26 text-2xl h-26 text-white bg-primary flex items-center justify-center font-bold rounded-full'>{item.year}</time>
                                        <h3 className='text-2xl font-semibold'>{item.event}</h3>
                                    </div>
                                    <p className='text-gray-600 text-2xl leading-relaxed mt-4 max'>{item.details}</p>

                                </div>
                            </div>
                        </article>
                    ))}</div>
            </div>
        </section>

    )
}

export default OurJourney