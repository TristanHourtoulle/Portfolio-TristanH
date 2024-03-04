"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'

export const Header = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap my-10'>
        <Link href='/' className='inline-flex items-center '>
              <Image
                src="/images/profil.svg"
                alt="Tristan Hourtoulle"
                width={8}
                height={8}
                className='fill-current h-8 w-8 mr-2'
                style={{ borderRadius: '10px' }}
              />
            <span className='text-paragraph font-bold tracking-wide'>
              TristanH
            </span>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-backgroundPrimary rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          {active ? <X /> : <Menu />}
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col items-center justify-center lg:h-auto'>
            <Link href='/' className='lg:inline-flex lg:w-auto px-3 py-2 rounded text-paragraph items-center justify-center '>
                Skills
            </Link>
            <Link href='/' className='lg:inline-flex lg:w-auto px-3 py-2 rounded text-paragraph items-center justify-center '>
                About Me
            </Link>
            <Link href='/' className='lg:inline-flex lg:w-auto px-3 py-2 rounded text-paragraph items-center justify-center '>
                Projects
            </Link>
            <Link href='/' className='lg:inline-flex lg:w-auto px-3 py-2 rounded text-paragraph items-center justify-center '>
                Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
