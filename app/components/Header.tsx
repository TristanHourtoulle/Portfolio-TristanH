import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className='h-[10%] absolute w-full flex items-center justify-between pr-10 pl-10 header-text header'>
        <Link href="/" className=''>
            <p className='text-paragraph poppins-bold'>TristanH.</p>
        </Link>

        <div className='navbar flex items-center gap-20'>
            <Link href="/" className='text-paragraph poppins-regular little-zoom'>Skills</Link>
            <Link href="/" className='text-paragraph poppins-regular little-zoom'>About Me</Link>
            <Link href="/" className='text-paragraph poppins-regular little-zoom'>Projects</Link>
            <Link href="/" className='text-paragraph poppins-regular little-zoom'>Contact</Link>
        </div>
    </div>
  )
}
