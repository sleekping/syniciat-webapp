import Hero from '@/components/find-installers/Hero'
import SelectState from '@/components/find-installers/SelectState'
import React from 'react'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: {
    template: '%s | Find Installers',
    default: 'Syniciat', // a default is required when creating a template
  },
}
const page = (): React.JSX.Element => {
    return (
        <main>
            <Hero />
            <SelectState />
        </main>
    )
}

export default page