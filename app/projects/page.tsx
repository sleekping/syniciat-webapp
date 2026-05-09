import CTA from '@/components/projects/CTA'
import Hero from '@/components/projects/Hero'
import Projects from '@/components/projects/Projects'
import React from 'react'

const page = (): React.JSX.Element => {
  return (
    <main>
      <Hero />
      <Projects />
      <CTA />
    </main>
  )
}

export default page