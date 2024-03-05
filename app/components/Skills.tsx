import React from 'react'
import Image from 'next/image'

function logoWithText(imagePath: string, title: string) {
    return (
        <div className='mb-3 flex gap-3 items-center'>
            <Image
                src={imagePath}
                alt={title}
                width={25}
                height={25}
                className=''
            />
            <p className='text-paragraph text-p-fluid poppins-thin opacity-85'>{title}</p>
        </div>
    )
}

function logoNotSquareWithText(imagePath: string, title: string, height: number, width: number) {
    return (
        <div className='mb-3 flex gap-4 items-center'>
            <Image
                src={imagePath}
                alt={title}
                width={width}
                height={height}
                className=''
            />
            <p className='text-paragraph text-p-fluid poppins-thin opacity-85'>{title}</p>
        </div>
    )
}

const Skills = () => {
  return (
    <div className='mt-10' id="skills">
        <h2 className='text-h2-fluid text-center text-paragraph poppins-semibold'>Skills</h2>

        <div className='flex flex-col justify-center items-center md:items-start md:flex-row gap-5 md:justify-between md:mx-[10%] sm:mx-auto my-[5%]'>
            <div>
                <h3 className='text-h3-fluid text-paragraph poppins-regular text-center md:text-left'>Design</h3>
                <ul className='mt-5'>
                    <li>{logoNotSquareWithText("/images/figma.svg", "Figma", 25, 20)}</li>
                    <li>{logoWithText("/images/photoshop.svg", "Photoshop")}</li>
                </ul>
            </div>

            <div>
                <h3 className='text-h3-fluid text-paragraph poppins-regular text-center md:text-left'>Front-end</h3>
                <ul className='mt-5'>
                    <li>{logoWithText("/images/nextjs.svg", "Next.js")}</li>
                    <li>{logoWithText("/images/reactjs.svg", "React.js")}</li>
                    <li>{logoWithText("/images/tailwind.svg", "Tailwind CSS")}</li>
                </ul>
            </div>

            <div>
                <h3 className='text-h3-fluid text-paragraph poppins-regular text-center md:text-left'>Back-end</h3>
                <ul className='mt-5'>
                    <li>{logoWithText("/images/nodejs.svg", "Node.js")}</li>
                    <li>{logoWithText("/images/postgresql.svg", "Postgresql")}</li>
                </ul>
            </div>

            <div>
                <h3 className='text-h3-fluid text-paragraph poppins-regular text-center md:text-left'>Other</h3>
                <ul className='mt-5'>
                    <li>{logoWithText("/images/github.svg", "Git & Github")}</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Skills