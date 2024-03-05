import React from 'react'

const Footer = () => {
  return (
    <div className='mt-[8%]'>
      <div className='my-[5%] h-[1%] w-[75%] mx-auto bg-primary border opacity-50'></div>

      <div className='flex flex-col items-center justify-center my-[3%]'>
        <p className='text-paragraph text-p-fluid opacity-50'>Designed and built by Tristan Hourtoulle</p>
        <p className='text-paragraph text-p-fluid opacity-50'>@Copyright 2024 - Tristan Hourtoulle</p>
      </div>
    </div>
  )
}

export default Footer