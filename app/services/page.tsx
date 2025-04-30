import React from 'react'
import SerTabs from './SerTabs'
import Hero from './Hero'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
<Hero />
<div className="px-5">
<div className="bg-white rounded-2xl">
<SerTabs />
</div>
</div>
<Footer />
    </>
  )
}

export default page