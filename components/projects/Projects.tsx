import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoChevronDown, IoChevronForward } from 'react-icons/io5'
const projectArray = [
  {
    title: "Project 1",
    image: "/images/project.jpg",
    date: "Jan 2023",
    category: "security",
    heading: "Electric Fencing for Farm in Benin",
    subheading: "Deployed 10KVA inverter system with lithium batteries to provide uninterrupted power for 20 apartments.",
    location: "Remote",
    link: "https://example.com/project1"
  },
  {
    title: "Project 2",
    image: "/images/project.jpg",
    date: "Feb 2023",
    category: "security",
    heading: "Intruder Detection System",
    subheading: "Implemented a smart intruder detection system using AI and machine learning.",
    location: "Remote",
    link: "https://example.com/project2"
  },
  {
    title: "Project 3",
    image: "/images/project.jpg",
    date: "Mar 2023",
    category: "security",
    heading: "Surveillance Camera Installation",
    subheading: "Installed a network of surveillance cameras for a commercial client.",
    location: "Remote",
    link: "https://example.com/project3"
  },
  {
    title: "Project 1",
    image: "/images/project.jpg",
    date: "Jan 2023",
    category: "security",
    heading: "Electric Fencing for Farm in Benin",
    subheading: "Deployed 10KVA inverter system with lithium batteries to provide uninterrupted power for 20 apartments.",
    location: "Remote",
    link: "https://example.com/project1"
  },
  {
    title: "Project 2",
    image: "/images/project.jpg",
    date: "Feb 2023",
    category: "security",
    heading: "Intruder Detection System",
    subheading: "Implemented a smart intruder detection system using AI and machine learning.",
    location: "Remote",
    link: "https://example.com/project2"
  },
  {
    title: "Project 3",
    image: "/images/project.jpg",
    date: "Mar 2023",
    category: "security",
    heading: "Surveillance Camera Installation",
    subheading: "Installed a network of surveillance cameras for a commercial client.",
    location: "Remote",
    link: "https://example.com/project3"
  },
  {
    title: "Project 1",
    image: "/images/project.jpg",
    date: "Jan 2023",
    category: "security",
    heading: "Electric Fencing for Farm in Benin",
    subheading: "Deployed 10KVA inverter system with lithium batteries to provide uninterrupted power for 20 apartments.",
    location: "Remote",
    link: "https://example.com/project1"
  },
  {
    title: "Project 2",
    image: "/images/project.jpg",
    date: "Feb 2023",
    category: "security",
    heading: "Intruder Detection System",
    subheading: "Implemented a smart intruder detection system using AI and machine learning.",
    location: "Remote",
    link: "https://example.com/project2"
  },
  {
    title: "Project 3",
    image: "/images/project.jpg",
    date: "Mar 2023",
    category: "security",
    heading: "Surveillance Camera Installation",
    subheading: "Installed a network of surveillance cameras for a commercial client.",
    location: "Remote",
    link: "https://example.com/project3"
  },
]
const Projects = (): React.JSX.Element => {
  return (
    <section className='mx-20 py-20 max-tab:mx-10'>

      <div className="flex justify-between pb-4 px-10 max-mdPhone:flex-col">
        <h2 className=' max-mdPhone:text-center max-mdPhone:pb-4'>Our Projects</h2>
        <div className='flex items-center gap-2'>
          <p className='text-2xl font-sembold max-mdPhone:text-xl'> Filter by state:</p>
          <div className="relative w-60 max-mdPhone:w-full max-mdPhone:flex-1">
            <select
              className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-2 pr-10 text-xl font-medium text-gray-900 shadow-sm outline-none transition-all duration-200 hover:border-primary/50 focus:border-primary/50 focus:ring-2 focus:ring-blue-100"
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="in-progress">In Progress</option>
              <option value="not-started">Not Started</option>
            </select>

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
              <IoChevronDown />
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 max-tab:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 max-xl:px-0 gap-10 py-3">
        {projectArray.map((project, index) => (
          <div className="project-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group" key={index}>
            <div className='overflow-hidden'>
              <Image className='w-full h-120 max-mdPhone:h-80 object-center object-cover group-hover:scale-105 transition-transform duration-300' src={project.image} alt={project.title} width={300} height={300} />
            </div>
            <div className="py-6 px-8 max-mdPhone:px-6 details space-y-3">
              <div className='flex items-center gap-6'>
                <time dateTime={project.date} className='text-gray-600 text-2xl'>{project.date}</time>
                <span className='w-1.5 h-1.5 rounded-full bg-gray-600'></span>
                <p className="bg-primary/10 text-primary px-2 py-2 capitalize rounded-full text-xl font-medium">{project.category}</p>
              </div>
              <div className=''>
                <h2 className='text-3xl font-bold leading-relaxed '>
                  <Link href={project.link} rel="noopener noreferrer" data-discover="true" className='' target='_blank'>
                    {project.heading}</Link>
                </h2>
                <p className='text-gray-600 mb-4 text-2xl line-clamp-3 font-maven max-mdPhone:text-xl'>{project.subheading}</p>
                <div className="flex items-center justify-between"><span className="text-2xl text-gray-500">Location: {project.location}</span><Link href={project.link} className="text-primary hover:text-primary-dark font-medium inline-flex items-center gap-2 text-2xl" aria-label={project.heading} rel="noopener noreferrer" data-discover="true" target='_blank'>View Project <IoChevronForward className="icon" /></Link></div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects