
import React from 'react'

const OurStory = () => {
  return (
    <div className=" pb-5 px-5">
        <div className="flex  md:p-5 flex-col md:flex-row font-light bg-white rounded-2xl  tracking-tight leading-tight text-black/85 gap-10">
        <div className="md:w-1/2 w-full flex flex-col gap-10 p-5">
        <h4 className="text-4xl text-black">Our Story</h4>
        <h5 className="text-xl text-left">
      Nexus Minds Technologies began its journey in 2017, driven by a clear purpose: to make world-class technology accessible, practical, and transformational for businesses everywhere. With an early focus on the dynamic markets of Asia and the Middle East, we quickly earned a reputation for delivering sophisticated yet cost-effective solutions that helped organizations navigate an increasingly digital landscape. From ambitious startups to established enterprises, every project was an opportunity to align innovation with real business outcomes, ensuring that our solutions fueled growth, streamlined operations, and created lasting value.
      <br></br><br></br>
      As our expertise deepened and our horizons expanded, we set our sights on new frontiers. Today, Nexus Minds Technologies is proud to extend its presence into the United States, bringing our distinctive blend of technical excellence, strategic insight, and relentless commitment to client success to one of the world’s most competitive markets. Yet, our core philosophy remains unchanged: the best technology is not just cutting-edge — it’s accessible, efficient, and built around the people who use it.
      <br></br><br></br>
      At Nexus Minds Technologies, we are not just building digital products; we are building possibilities. Our journey is fueled by curiosity, shaped by experience, and driven by a simple belief — technology should be a bridge to progress, not a barrier. We continue to empower businesses to scale smarter, operate faster, and achieve more — and we’re just getting started.
      </h5>
        </div>
        <div className="rounded-2xl w-full md:w-1/2 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/grad1.jpg')" }}>
        </div>
    </div>
    </div>
  )
}

export default OurStory