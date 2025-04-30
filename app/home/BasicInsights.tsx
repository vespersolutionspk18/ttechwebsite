import React from 'react'

const BasicInsights = () => {
  return (
    <div className="font-light tracking-tight leading-tight flex flex-col lg:flex-row p-10 gap-10 items-center justify-between ">
        <div className="flex flex-col gap-5 lg:w-[45%]">
        <h3 className="text-6xl text-black/90">Fauna & Flora Works in Nearly 50 Countries Around The World</h3>
        <h5 className="text-xl text-black/65">
            Fauna & Fiona has been tusing the collective knowledge and experience of our people and our partners to protect nature across the globe.
        </h5>
        </div>
        <div className="my-16 flex flex-row gap-2 items-center justify-center lg:w-[45%]">
        <div className="flex flex-col gap-5 w-1/2">
            <div className="flex flex-col gap-5"> 
            <h3 className="text-6xl font-medium text-black">125M+</h3>
            <p className="text-xl text-black/65">Acres of Land Protected</p>
            </div>
            <div className="flex flex-col gap-5"> 
            <h3 className="text-6xl font-medium text-black">500+</h3>
            <p className="text-xl text-black/65">Partner Organisations</p>
            </div>
        </div>
        <div className="flex flex-col gap-5 w-1/2">
            <div className="flex flex-col gap-5"> 
            <h3 className="text-6xl font-medium text-black">125M+</h3>
            <p className="text-xl text-black/65">Acres of Land Protected</p>
            </div>
            <div className="flex flex-col gap-5"> 
            <h3 className="text-6xl font-medium text-black">500+</h3>
            <p className="text-xl text-black/65">Partner Organisations</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default BasicInsights