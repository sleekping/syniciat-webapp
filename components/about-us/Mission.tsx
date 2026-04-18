import React from 'react'
import { IoRocketOutline } from 'react-icons/io5';
import { TbTargetArrow } from "react-icons/tb";
const missionArray = [
    {
        heading: "Our Mission",
        details: `To deliver affordable, reliable, and sustainable energy and security solutions, including solar power systems, inverters, batteries, CCTV surveillance, GPS tracking, and integrated smart technologies. We empower homes and businesses to achieve energy independence, enhance security, and operate with confidence.  `,
        icon: TbTargetArrow
    },
    {
        heading: "Our Vision",
        details: `To be a leading provider of integrated energy and security solutions across West Africa, recognized for innovation, quality, and excellence in service delivery. We aim to redefine how homes and businesses stay powered, protected, and connected.`,
        icon: IoRocketOutline
    }
]

const Mission = (): React.JSX.Element => {

    return (
        <div className="bg-gray-50 flex gap-10 px-30 py-20 max-mdLap:px-15 max-tab:flex-col">

            {missionArray.map((value, index) => (
                <div key={index} className='bg-white flex-1 rounded-2xl border-primary/20 border-2
                shadow-sm  hover:border-primary/50 transition-all ease-in-out duration-500 hover:shadow-xl group               
                px-10 py-10'>
                    <div className="bg-primary/10 group-hover:bg-primary transition-all ease-in-out duration-300 w-16 h-16 rounded-lg flex items-center justify-center mb-5" aria-hidden="true">
                        {<value.icon className='text-primary group-hover:text-white' size={"2rem"} />}
                    </div>
                    <h3 className='text-3xl font-semibold'>{value.heading}</h3>
                    <p className='text-gray-600 text-2xl leading-relaxed mt-4'>{value.details}</p>
                </div>
            ))}
        </div>
    )
}

export default Mission