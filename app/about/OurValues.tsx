
import React from 'react'
import { FaBrain, FaUsers, FaBullseye } from 'react-icons/fa';


const OurValues = () => {
  return (
    <div className="flex flex-col font-light py-5 pb-10 px-10 tracking-tight leading-tight text-black/85 gap-16">
        <div className="flex flex-col md:flex-row justify-between gap-6 ">
        <h2 className="text-lg pt-8 md:pt-0 md:text-xl flex-shrink-0 text-center md:text-left">The Values That Shape Our Work</h2>
        <h5 className="text-3xl text-center md:text-justify md:text-4xl w-full md:w-[65%] leading-tight md:leading-[1.1] ">
        The values we live by aren&apos;t just words — they guide how we think, create, and collaborate, shaping every solution we build and every relationship we nurture along the way.
        </h5>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-stretch justify-center">
        {/* Card 1 */}
        <div className="w-full md:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
          <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
            <FaBrain className="text-5xl text-black/70" />
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-3xl font-medium text-left">
              Innovation at Core
            </h5>
            <p className="text-sm text-black/65 text-left">
              We constantly explore emerging technologies and creative approaches to deliver cutting-edge solutions that drive significant value and keep our clients ahead of the curve.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="w-full md:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
          <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
            <FaUsers className="text-5xl text-black/70" />
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-3xl font-medium text-left">
              Collaborative Spirit
            </h5>
            <p className="text-sm text-black/65 text-left">
              We believe the best results come from working closely together, both internally and with our clients. Open communication and shared goals are key to our mutual success.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="w-full md:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
          <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
            <FaBullseye className="text-5xl text-black/70" />
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-3xl font-medium text-left">
              Client-Centric Approach
            </h5>
            <p className="text-sm text-black/65 text-left">
              Our clients&apos; success is our top priority. We listen intently to understand their unique challenges and goals, tailoring solutions that deliver measurable impact and foster long-term partnerships.
            </p>
          </div>
        </div>
      </div>
        
      </div>
   
  )
}

export default OurValues