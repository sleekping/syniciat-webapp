import Hero from '@/components/projects/Hero'
import Projects from '@/components/projects/Projects'
import React from 'react'

const page = (): React.JSX.Element => {
  return (
    <main>
      <Hero />
      <Projects />
    </main>
  )
}

export default page