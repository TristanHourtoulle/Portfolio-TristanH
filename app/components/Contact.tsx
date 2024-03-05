import React from 'react'
import { ButtonLogoText } from './ButtonLogoText'

const Contact = () => {

  const sendMail = `mailto:tristan.hourtoulle@epitech.eu`

  return (
    <div className='mt-10'>
        <h2 className='text-h2-fluid text-center text-paragraph poppins-semibold'>Contact</h2>

        <p className='mx-auto w-[60%] text-paragraph text-p-fluid poppins-regular text-center mt-[3%]'>Be free to contact me directly by email or by any other platform you wish.</p>

        <div className='flex flex-col md:flex-row items-center justify-center gap-5 my-[2%]'>
            <ButtonLogoText imagePath="/images/linkedin.svg" title="LinkedIn" redirect="https://www.linkedin.com/in/tristan-hourtoulle/" />
            <ButtonLogoText imagePath="/images/email.svg" title="tristan.hourtoulle@epitech.eu" redirect={sendMail} />
        </div>
    </div>
  )
}

export default Contact